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
        new HtmlWebpackPlugin({template: './index.html', filename: 'index.html'}),
    ],
    devServer: {
        port: 3000,
        contentBase: './dist',
        before(app) {
            const bodyParser = require('body-parser');
            app.use(bodyParser.urlencoded({extended: false}));
            app.use(bodyParser.json());
            app.get('/api/rank', function (req, res) {
                res.json(mock.rank_level_2)
            })
        }

    }
})