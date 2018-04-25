import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);


import Focus from '../components/Focus/focus.vue';
import HomeList from '../components/Home/homelist.vue';
Vue.component('y-focus', Focus);
Vue.component('y-homelist', HomeList);
