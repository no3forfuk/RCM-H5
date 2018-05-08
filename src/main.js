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
import {getWXConfig} from './api/api';
import wx from 'weixin-js-sdk';

Vue.prototype.WXConfig = getWXConfig


new Vue({
    el: '#app',
    router,
    render: c => c(App)
})