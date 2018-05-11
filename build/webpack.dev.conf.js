const merge = require('webpack-merge');
const path = require('path');
const base = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');


//模拟数据后台服务器
const express = require('express');
const app = express();

const router = express.Router();

const apiRouter = express.Router();

app.use(router);
app.use('/api', apiRouter);
const mock = require('../mock/mock.js');
module.exports = merge(base, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html', filename: 'index.html' }),
    ],
    devServer: {
        host: '192.168.0.122',
        port: 3000,
        contentBase: './dist',
        before(app) {
            const bodyParser = require('body-parser');
            const request = require('request');

            app.use(bodyParser.urlencoded({ extended: false }));
            app.use(bodyParser.json());
            app.post('/api/Home/index', function (req, res) {
                res.json(mock.indexData)
            });
            app.get('/api/Ranking/getRanking', function (req, res) {
                if (req.query.level == 2) {
                    res.json(mock.rank_level_2)
                }
                if (req.query.level == 1) {
                    res.json(mock.rank_level_1)
                }
            })
            app.get('/api/wx/js/sdk', function (req, res) {
                request.get('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=9_sKJ3ZdmVOhq0twYiTEYEEJfq9kriBD_ueD8ZIdCEEk6y2_D8UhlF1G3dhpdCw5hL0TEUOd8FcCuWSmWjn0QIDR8QfbDcWOWOyXUP2HbZUL0oKGixeKTenwhkxaOQZF8leaYGgtNJ7edf84o-JKKfAAADEE&type=jsapi').then(res => {
                    console.log(res)
                })
            })

            app.get('/api/Element/getElementDetails', function (req, res) {
                res.json(mock.element)
            })
        }

    }
})