/*Created By Jsir on 2018/4/25*/
'use strict'
import request from './request'

module.exports = {
    //登陆
    test(parmas) {
        return request({
            url: '/rank',
            method: 'get',
            data: parmas || {}
        })
    },

}