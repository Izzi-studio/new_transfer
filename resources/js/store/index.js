import Vue from 'vue';
import Vuex from 'vuex';

import stepsForms from './modules/steps-forms'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    modules: {
        stepsForms
    }
});