/*Created By Jsir on 2018/4/25*/
'use strict'
import request from './request'

module.exports = {
    //获取首页推送
    getIendx(parmas) {
        return request({
            url: '/Home/index',
            method: 'POST',
            data: {
                time: parmas
            }
        })
    },
    //获取二级榜单
    getSecondRank(params) {
        return request({
            url: '/Ranking/getRanking',
            method: 'GET',
            params: {
                level: params.level,
                id: params.id
            }
        })
    },
    //获取一级榜单
    getFirstRank(params) {
        return request({
            url: '/Ranking/getRanking',
            method: 'GET',
            params: {
                level: params.level,
                id: params.id
            }
        })
    },
    //获取微信鉴权
    getWXConfig() {
        return request({
            url: '/Wx/signature',
            method: 'POST'
        })
    },
    //获取元素详情
    getElement(id) {
        return request({
            url: '/Element/getElementDetails',
            method: 'GET',
            params: {
                id: id
            }
        })
    },
    //获取评论
    getDiscuss(params) {
        return request({
            url: '/Ranking/getComment',
            method: 'GET',
            params: params
        })
    },
    //获取POST详情
    getPostDetailsById(params) {
        return request({
            url: '/Post/getPostDetails',
            method: 'GET',
            params: {
                id: params
            }
        })
    }
}