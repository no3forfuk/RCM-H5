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
    },
    //获取微信鉴权
    getWXConfig(){
        return request({
            url: '/wx/js/sdk',
            method: 'GET'
        })
    },
    //获取元素详情
    getElement(id){
        return request({
            url: '/Element/getElementDetails',
            method: 'GET',
            params:{
                id:id
            }
        })
    }
}