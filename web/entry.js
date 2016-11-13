/**
 * Created by jamie on 16/11/13.
 */
import Vue from 'vue'
import index from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config'
import ElementUI from 'element-ui'

import MainHeader from './components/header.vue'


Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.component('main-header',MainHeader);


const router  = new VueRouter({
    routes : routes
})

new Vue({
    render: h => h(index),
    router
}).$mount('#app');