//引入vue

import Vue from 'vue';
//引入样式
import './style/reset.css'
import './style/common.css'
import App from "./app.vue";
import './style/fonts/iconfont.css'

import VueRouter from 'vue-router';

Vue.use(VueRouter);
const router = new VueRouter(require('./router/router'));


require('./uiComponent/uiComponent');





new Vue({
    el: '#app',
    router,
    render: c => c(App)
})