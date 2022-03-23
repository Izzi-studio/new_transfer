import Vue from 'vue';
import Vuex from 'vuex';

import stepsForms from './modules/steps-forms'
import profile from './modules/profile'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        typesJobs: [],
        regions: [],
    },
    getters: {},
    mutations: {},
    actions: {
        getTypeJobs(context) {
            axios.get('/api/front/types-jobs')
                .then(({ data }) => {
                    context.state.typesJobs = data.data
                })
                .catch(() => {
                    
                })
        },
        getRegions(context) {
            axios.get('/api/front/regions')
                .then(({ data }) => {
                    context.state.regions = data.data
                })
                .catch(() => {
                    
                })
        },
    },
    modules: {
        stepsForms,
        profile
    }
});