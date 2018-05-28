require('./webgl');

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
}, 2000);

import PageIndex from './components/pages/Index'
import PageAbout from './components/pages/About'
import PageProjects from './components/pages/Projects'
import PageProject from './components/pages/Project'

Vue.component('page-index', PageIndex);
Vue.component('page-about', PageAbout);
Vue.component('page-projects', PageProjects);
Vue.component('page-project', PageProject);

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
            path: '/project/:slug',
            name: 'project',
            component: PageProject
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.querySelector('body').classList.remove('status__transition--start');
    setTimeout(() => {
        document.querySelector('body').classList.add('status__transition--start');

        setTimeout(() => {
            next();
        }, 500)
    }, 50);
});

router.afterEach(() => {

});

const app = new Vue({
    el: '#app',
    router,
    data: {
        class_hover: false
    },

    mounted() {

    },

    methods: {
        stopHover: () => {
            app.class_hover = false;
        },

        startHover: () => {
            app.class_hover = true;
        }
    }
});
