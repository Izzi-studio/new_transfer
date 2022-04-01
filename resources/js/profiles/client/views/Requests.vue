<template>
    <div>
        <h4 class="d-block d-lg-none mb-3">{{ typeJobText }}</h4>
        <profile-search @search="formSearch" />
        <div class="mt-5">
            <card 
                v-for="card in formattedCards"
                :key="card.id"
                :data="card"
                :type-job-id="card.type_job_id"
                :is-show-btn-cancel="true"
                class="mt-4"
                @deleteOffer="deleteOffer"
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
        typeJobText() {
            switch(this.$route.params.typeJob) {
                case 'umzug': return this.trans('umzug')
                case 'reinigung': return this.trans('reinigung')
                case 'umzug-und-reinigung': return this.trans('umzug_und_reinigung')
                case 'maler': return this.trans('maler')
                case 'bodenleger': return this.trans('bodenleger')
                case 'heizung': return this.trans('heizung')
                case 'elektriker': return this.trans('elektriker')
                case 'gartner': return this.trans('gartner')
                case 'schreiner': return this.trans('schreiner')
            }
        },
        typeJobId() {
            switch(this.$route.params.typeJob) {
                case 'umzug': return 1
                case 'reinigung': return 2
                case 'umzug-und-reinigung': return 3
                case 'maler': return 4
                case 'bodenleger': return 5
                case 'heizung': return 6
                case 'elektriker': return 7
                case 'gartner': return 8
                case 'schreiner': return 9
            }
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
        deleteOffer(id) {
            const isConfirm = confirm('Sind Sie sicher, dass Sie den Auftrag löschen wollen?')

            if(isConfirm) {
                axios.delete(`/api/front/client/proposals/delete/${id}`)
                    .then(() => {
                        this.cards = this.cards.filter(i => i.id != id)
                    })
            }
        },
    },
    mounted() {
        axios.get('/api/front/client/proposals', {
            params: {
                type_job_id: this.typeJobId
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