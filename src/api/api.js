/*Created By Jsir on 2018/4/25*/
'use strict'
import request from './request'

module.exports = {
    //获取首页推送
    getIendx(parmas) {
        return request({
            url: '/Home/index',
            method: 'GET',
            data: parmas || {}
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
    getFirstRank(params){
        return request({
            url: '/Ranking/getRanking',
            method: 'GET',
            params: {
                level: params.level,
                id: params.id
            }
        })
    }

}