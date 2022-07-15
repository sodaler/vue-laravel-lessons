import Vue from 'vue'
import PostComponent from "./components/PostComponent";
require('./bootstrap');

Vue.config.productionTip = false;

const app = new Vue({
    el: '#app',

    components: {
        PostComponent,
    }

})
