const state = {
    formData: {},
    initialData: {},
    currentStep: 1,
    isHasEmail: false,
    urlHandler: '',
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
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".form-progress").offset().top - $('.header').outerHeight() - 30
        }, 600);

        setTimeout(() => {
            state.currentStep = state.currentStep + 1
        }, 400)
    },
    setUrlHandler(state, payload) {
        state.urlHandler = payload
    }
}

const actions = {
    getClientValues(context, payload) {
        axios.get(`/api/front/client/proposals/${payload}`)
            .then(({ data }) => {
                context.state.initialData = data.data
            })
    },
    checkEmail(context, { email }) {        
        return new Promise(resolve => {
            axios.post('/check-email', {
                email,
            })
                .then(({ data }) => {
                    context.state.isHasEmail = !data.success
                    resolve(data);
                })
                .catch(() => {

                })
        })
    },
    sendData(context) {
        const formData = new FormData()

        formData.append('_token', document.querySelector('meta[name="csrf-token"]').content)
        
        for(let group in context.state.formData) {    
            for (let key in context.state.formData[group]) {
                if (Array.isArray(context.state.formData[group][key])) {
                    for (let item in context.state.formData[group][key]) {
                        formData.append(key, context.state.formData[group][key][item])
                    }
                } else {
                    if(key === 'upload_file' && !context.state.formData[group][key]) continue
                    formData.append(key, context.state.formData[group][key])
                }
            }
        }

        axios({
            method: "POST",
            url: context.state.urlHandler,
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