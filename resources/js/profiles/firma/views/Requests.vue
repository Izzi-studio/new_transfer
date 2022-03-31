<template>
    <div>
        <h4 class="d-block d-lg-none mb-3">{{ requestsText }}</h4>
        <profile-search @search="formSearch" />
        <div class="mt-5">
            <card 
                class="mt-4"
                v-for="card in formattedCards"
                :key="card.id"
                :data="card"
                :type-job-id="card.type_job_id"
                :is-show-btn-download="isShowBtnDownload"
                :is-show-btn-cancel="isShowBtnCancel"
                :is-show-btn-add="isShowBtnAdd"
                @deleteOffer="deleteOffer"
                @addOffer="addOffer"
            />
        </div>
    </div>
</template>
<script>
import ProfileSearch from '../../../components/ProfileSearch.vue'
import Card from '../../../components/Card.vue'

export default {
    data() {
        return {
            cards: [],
            searchFields: null
        }
    },
    computed: {
        requestsText() {
            switch(this.$route.params.requests) {
                case 'offene': return 'Offene'
                case 'angenommene': return 'Angenommene'
                case 'abgesagte': return 'Abgesagte'
                case 'verkaufe': return 'Ich verkaufe'
                case 'kaufe': return 'Ich kaufe'
            }
        },
        requestsStatus() {
            switch(this.$route.params.requests) {
                case 'offene': return 'new'
                case 'angenommene': return 'accepted'
                case 'abgesagte': return 'rejected'
                case 'verkaufe': return 'resell'
            }
        },
        isShowBtnDownload() {
            return this.requestsStatus === 'accepted'
        },
        isShowBtnCancel() {
            return this.requestsStatus === 'new'
        },
        isShowBtnAdd() {
            return this.requestsStatus === 'new'
        },
        formattedCards() {
            if(!this.searchFields) return this.cards

            let arr = [...this.cards]

            if(this.searchFields.search.trim().length) {
                const searchFormatted = this.searchFields.search.trim().toLowerCase()
                
                arr = arr.filter(i => {
                    if(i.region_from && i.region_to) {
                        const text = i.region_from.trim().toLowerCase() + ' > ' + i.region_to.trim().toLowerCase()  
                        if(text.includes(searchFormatted)) {
                            return true
                        }
                    }

                    if(i.region_from) {
                        const text = i.region_from.trim().toLowerCase()
                        if(text.includes(searchFormatted)) {
                            return true
                        }
                    }

                    return false
                })
            }

            if(this.searchFields.year) {
                arr = arr.filter(i => {
                    const date = this.globalGetDate(i.date_start)

                    if(date.getFullYear() == this.searchFields.year) {
                        return true
                    }

                    return false
                })
            }

            if(this.searchFields.month) {
                arr = arr.filter(i => {
                    const date = this.globalGetDate(i.date_start)
                    
                    if(date.getMonth()+1 == this.searchFields.month) {
                        return true
                    }

                    return false
                })
            }

            return arr    
        }
    },
    methods: {
        formSearch(fields) {
            this.searchFields = {...fields}
        },
        addOffer(id) {
            axios.post(`/api/front/partner/proposals/process/${id}?action=accepted`, {
                _method: 'PUT'
            })
                .then(({ data }) => {
                    if(data.data.result) {
                        this.cards = this.cards.filter(i => i.id != id)
                        this.$store.dispatch('profile/getProposalsCounts')
                    }
                })
        },
        deleteOffer(id) {
            const isConfirm = confirm('Sind Sie sicher, dass Sie den Auftrag löschen wollen?')

            if(isConfirm) {
                axios.post(`/api/front/partner/proposals/process/${id}?action=rejected`, {
                   _method: 'PUT' 
                })
                    .then(({ data }) => {
                        if(data.data.result) {
                            this.cards = this.cards.filter(i => i.id != id)
                            this.$store.dispatch('profile/getProposalsCounts')
                        }
                    })
            }
        },
    },
    mounted() {
        axios.get('/api/front/partner/proposals', {
            params: {
                status: this.requestsStatus
            }
        })
            .then(({ data }) => {
                this.cards = data.data
            })
    },
    components: {
        ProfileSearch,
        Card
    }
}
</script>