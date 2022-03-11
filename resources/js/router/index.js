import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/benutzerkonto/personliche-daten/info',
            name: 'personalData',
            component: () => import('../profiles/client/views/PersonalData.vue')
        },
        {
            path: '/benutzerkonto/personliche-daten/passwort-andern',
            name: 'changePassword',
            component: () => import('../profiles/client/views/ChangePassword.vue')
        },
        {
            path: '/benutzerkonto/:typeJob',
            name: 'requests',
            component: () => import('../profiles/client/views/Requests.vue')
        },
    ]
});

export default router;