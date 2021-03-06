import Vue from 'vue'
import store from './store'
import router from "./router";
import Index from "./components/Index";
require('./bootstrap');

Vue.config.productionTip = false

const app = new Vue({
    el: '#app',

    components: {
        Index
    },

    router,
    store

})
