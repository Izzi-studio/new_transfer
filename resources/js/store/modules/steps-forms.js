import axios from "axios"

const state = {
    formData: {},
    typesJobs: [],
    regions: [],
    currentStep: 1,
}

const getters = {}

const mutations = {
    setData(state, payload) {
        state.formData[payload.key] = null
        state.formData[payload.key] = payload.data
    },
    resetData(state, payload) {
        state.formData[payload] = null
    },
    prevStep(state, payload) {
        state.currentStep = state.currentStep - 1
    },
    nextStep(state, payload) {
        state.currentStep = state.currentStep + 1
    },
}

const actions = {
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
    sendData(context) {
        const formData = new FormData()
        
        for(let group in context.state.formData) {    
            for (let key in context.state.formData[group]) {
                if (Array.isArray(context.state.formData[group][key])) {
                    formData.append(key, JSON.stringify(context.state.formData[group][key]))
                } else {
                    if(key === 'upload_file' && !context.state.formData[group][key]) continue
                    formData.append(key, context.state.formData[group][key])
                }
            }
        }

        axios({
            method: "POST",
            url: '/partner-werden',
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then((response) => {
                window.location.href = response.data.redirect_url;
            })
            .catch((error) => {
            
            })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}