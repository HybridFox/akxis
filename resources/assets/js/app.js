import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

setTimeout(() => {
    document.querySelector('body').classList.remove('status__loading');
    document.querySelector('body').classList.add('status__loaded');

    setTimeout(() => {
        document.querySelector('body').classList.remove('status__loaded');
        document.querySelector('body').classList.add('status__ready');
    }, 500);
}, 1000);

import PageIndex from './components/pages/Index'
import PageAbout from './components/pages/About'
import PageProjects from './components/pages/Projects'
import PageContact from './components/pages/Contact'

Vue.component('page-index', PageIndex);
Vue.component('page-about', PageAbout);
Vue.component('page-projects', PageProjects);
Vue.component('page-contact', PageContact);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: PageIndex
        },
        {
            path: '/about',
            name: 'about',
            component: PageAbout
        },
        {
            path: '/projects',
            name: 'projects',
            component: PageProjects
        },
        {
            path: '/contact',
            name: 'contact',
            component: PageContact
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.querySelector('body').classList.remove('status__transition--start');
    document.querySelector('body').classList.add('status__transition--start');

    next();
});

router.afterEach(() => {

});

const app = new Vue({
    el: '#app',
    router,
    data: {

    },

    mounted() {

    }
});
