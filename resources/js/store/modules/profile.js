const state = {
    allProposals: 0,
    newProposals: 0
}

const getters = {

}

const mutations = {
    
}

const actions = {
    getProposalsCounts(context) {
        axios.get('/api/front/partner/proposals-counts')
            .then(({ data }) => {
                context.state.allProposals = data.data.all_proposals
                context.state.newProposals = data.data.new_proposals
            })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}