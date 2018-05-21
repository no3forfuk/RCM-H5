//引入vue

import Vue from 'vue';
//引入样式
import 'mint-ui/lib/style.css'
import './style/fonts/iconfont.css';
import './style/reset.css';
import './style/common.css';

import App from "./app.vue";

import VueRouter from 'vue-router';
//引入文本
import text from './text/text'

Vue.prototype.text = text;
Vue.use(VueRouter);
const router = new VueRouter(require('./router/router'));


require('./uiComponent/uiComponent');
//微信SDK
import {getWXConfig} from './api/api';

// const wx = require('./utils/wx-sdk');
// import wx from 'weixin-js-sdk'
//
// console.log(wx);
router.beforeEach((to, from, next) => {
    // getWXConfig().then(res => {
    //     let config = res.data.data;
    //     config.jsApiList = [];
    //     config.jsApiList[0] = 'onMenuShareAppMessage';
    //     wx.config(config);
    //     wx.ready(function () {
    //         wx.onMenuShareTimeline({
    //             title: 'a', // 分享标题
    //             link: 's', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //             imgUrl: 'd', // 分享图标
    //             success: function () {
    //                 // 用户确认分享后执行的回调函数
    //             },
    //             cancel: function () {
    //                 // 用户取消分享后执行的回调函数
    //             }
    //         });
    //     })
    // }).catch(err => {
    //     console.log(err);
    // })

    next();

})

new Vue({
    el: '#app',
    router,
    render: c => c(App)
})