import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "HomePage" */ '@/views/HomePage.vue')
        },
        {
            path: '/solutiondetail/:solution',
            name: 'solutiondetail',
            component: () => import(/* webpackChunkName: "SolutionDetail" */ '@/views/SolutionDetail.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "About" */ '@/views/AboutPage.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import(/* webpackChunkName: "Contact" */ '@/views/ContactPage.vue')
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: () => import(/* webpackChunkName: "Jobs" */ '@/views/JobsPage.vue')
        },
        {
            path: '/jobsdetail',
            name: 'jobsdetail',
            component: () => import(/* webpackChunkName: "JobsDetail" */ '@/views/JobsPageDetail.vue')
        },
        {
            path: '/jobform',
            name: 'jobform',
            component: () => import(/* webpackChunkName: "JobsSubmit" */ '@/views/JobsSubmitPage.vue')
        },
        {
            path: '/servicedetail/:service',
            name: 'servicedetail',
            component: () => import(/* webpackChunkName: "ServiceDetail" */ '@/views/ServiceDetailPage.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import(/* webpackChunkName: "Profile" */ '@/views/ProfilePage.vue')
        },

        {
            path: '/success',
            name: 'success',
            component: () => import(/* webpackChunkName: "SuccessSendMail" */ '@/views/SuccessfulPage.vue')
        },
        {
            path: '*',
            name: '404',
            component: () => import(/* webpackChunkName: "Error" */ '@/views/ErrorPage.vue')
        },

    ],
    scrollBehavior() {
        window.scrollTo(0, 0);
    }
})