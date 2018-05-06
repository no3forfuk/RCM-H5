//引入vue

import Vue from 'vue';
//引入样式

import App from "./app.vue";

import VueRouter from 'vue-router';
//引入文本
import text from './text/text'
Vue.prototype.text = text;
Vue.use(VueRouter);
const router = new VueRouter(require('./router/router'));


require('./uiComponent/uiComponent');





new Vue({
    el: '#app',
    router,
    render: c => c(App)
})