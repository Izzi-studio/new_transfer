import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/benutzerkonto/personliche-daten/info',
            name: 'personalData_client',
            component: () => import('../profiles/client/views/PersonalData.vue')
        },
        {
            path: '/benutzerkonto/personliche-daten/passwort-andern',
            name: 'changePassword_client',
            component: () => import('../profiles/client/views/ChangePassword.vue')
        },
        {
            path: '/benutzerkonto/:typeJob',
            name: 'requests_client',
            component: () => import('../profiles/client/views/Requests.vue')
        },

        {
            path: '/firmenkonto/personliche-daten/info',
            name: 'personalData_firma',
            component: () => import('../profiles/firma/views/PersonalData.vue')
        },
        {
            path: '/firmenkonto/personliche-daten/passwort-andern',
            name: 'changePassword_firma',
            component: () => import('../profiles/firma/views/ChangePassword.vue')
        },
        {
            path: '/firmenkonto/anfragen/:requests',
            name: 'requests_firma',
            component: () => import('../profiles/firma/views/Requests.vue')
        },
        {
            path: '/firmenkonto/reviews',
            name: 'reviews_firma',
            component: () => import('../profiles/firma/views/Reviews.vue')
        },
        {
            path: '/firmenkonto/preise',
            name: 'prices_firma',
            component: () => import('../profiles/firma/views/Prices.vue')
        },
    ]
});

export default router;