//引入vue

import Vue from 'vue';
//引入样式
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
import { getWXConfig } from './api/api';
import wx from 'weixin-js-sdk';
import axios from 'axios';

axios.get('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=9_sKJ3ZdmVOhq0twYiTEYEEJfq9kriBD_ueD8ZIdCEEk6y2_D8UhlF1G3dhpdCw5hL0TEUOd8FcCuWSmWjn0QIDR8QfbDcWOWOyXUP2HbZUL0oKGixeKTenwhkxaOQZF8leaYGgtNJ7edf84o-JKKfAAADEE&type=jsapi').then(res => {
    console.log(res)
})
Vue.prototype.WXConfig = getWXConfig
getWXConfig()

new Vue({
    el: '#app',
    router,
    render: c => c(App)
})