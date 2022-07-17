import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            // dynamic conn
            path: '/people', component: () => import('./components/Person/Index'),
            name: 'person.index'
        },
        {
            path: '/people/create', component: () => import('./components/Person/Create'),
            name: 'person.create'
        }
    ]
})
