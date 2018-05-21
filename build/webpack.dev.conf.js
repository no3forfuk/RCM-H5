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
        host: '192.168.0.122',
        port: 3000,
        contentBase: './dist',
        before(app) {
            const bodyParser = require('body-parser');
            const request = require('request');

            app.use(bodyParser.urlencoded({extended: false}));
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


            })
            //获取评论
            app.post('/api/discuss/list', (req, res) => {
                res.json({
                    status_code: 1,
                    message: 'success',
                    data: [
                        {
                            id: 1,
                            content: '你6什么6'
                        }
                    ]
                })
            })

            app.get('/api/Element/getElementDetails', function (req, res) {
                res.json(mock.element)
            })
            app.get('/api/Post/getPostDetails', (req, res) => {
                res.json({
                    status_code: 1,
                    data: {
                        "id": 1,
                        "post_content": "乳白色乳霜质地，延展性极佳，淡淡的清香",
                        "type": 1,
                        "img": null,
                        "video": null,
                        "out_link": null,
                        "link_title": null,
                        "link_desc": null,
                        "exponent": 0,
                        "comment_num": 0,
                        "is_check": 0,
                        "is_hide": 1,
                        "updated_at": "2018-05-21 15:39:57",
                        "operate_type": 1
                    }
                })
            })
            app.get('/api/Ranking/getComment', (req, res) => {
                res.json({
                    "status_code": 1,
                    "message": "获取成功！",
                    "data": {
                        "current_page": 1,
                        "data": [
                            {
                                "content": "评论1",
                                "updated_at": "2018-05-21 15:44:34",
                                "user_type": 1,
                                "like": 0,
                                "user": {
                                    "name": "齐飞",
                                    "email": "10863648@qq.com",
                                    "updated_at": "2018-05-21 15:37:26",
                                    "avatar": "http://p8rk87lub.bkt.clouddn.com/avator/4934501486627131.jpg"
                                }
                            },
                            {
                                "content": "评论2",
                                "updated_at": "2018-05-21 15:44:34",
                                "user_type": 1,
                                "like": 0,
                                "user": {
                                    "name": "viva",
                                    "email": "10646566@qq.com",
                                    "updated_at": "2018-05-21 15:37:26",
                                    "avatar": "http://p8rk87lub.bkt.clouddn.com/avator/11522055a-8.jpg"
                                }
                            },
                            {
                                "content": "评论3",
                                "updated_at": "2018-05-21 15:44:34",
                                "user_type": 1,
                                "like": 0,
                                "user": {
                                    "name": "小圆圆",
                                    "email": "10157268@qq.com",
                                    "updated_at": "2018-05-21 15:37:26",
                                    "avatar": "http://p8rk87lub.bkt.clouddn.com/avator/ds9pypet.jpg"
                                }
                            },
                            {
                                "content": "评论4",
                                "updated_at": "2018-05-21 15:44:34",
                                "user_type": 1,
                                "like": 0,
                                "user": {
                                    "name": "汤汤",
                                    "email": "10132006@qq.com",
                                    "updated_at": "2018-05-21 15:37:26",
                                    "avatar": "http://p8rk87lub.bkt.clouddn.com/avator/79f0f736afc37931c4549099e3c4b74543a91145.jpg"
                                }
                            },
                            {
                                "content": "阿达第三块",
                                "updated_at": "2018-05-21 15:47:56",
                                "user_type": 2,
                                "like": 0,
                                "visitor": {
                                    "id": 1
                                }
                            },
                            {
                                "content": "阿达第三块",
                                "updated_at": "2018-05-21 15:54:17",
                                "user_type": 2,
                                "like": 0,
                                "visitor": {
                                    "id": 1
                                }
                            },
                            {
                                "content": "这是内容啊1",
                                "updated_at": "2018-05-21 15:55:09",
                                "user_type": 1,
                                "like": 0,
                                "user": {
                                    "name": "一尾",
                                    "email": "10374078@qq.com",
                                    "updated_at": "2018-05-21 15:37:26",
                                    "avatar": "http://p8rk87lub.bkt.clouddn.com/avator/9f1613f6f6a3fd76a425e48d95e0344c.jpg"
                                }
                            }
                        ],
                        "first_page_url": "http://rcm.cc/api/Ranking/getComment?page=1",
                        "from": 1,
                        "last_page": 1,
                        "last_page_url": "http://rcm.cc/api/Ranking/getComment?page=1",
                        "next_page_url": null,
                        "path": "http://rcm.cc/api/Ranking/getComment",
                        "per_page": 15,
                        "prev_page_url": null,
                        "to": 7,
                        "total": 7
                    }
                })
            })

        }

    }
})