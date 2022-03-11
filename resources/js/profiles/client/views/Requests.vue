<template>
    <div>
        <h4 class="d-block d-lg-none mb-3">{{ typeJobText }}</h4>
        <profile-search @search="formSearch" />
        <div class="mt-5">
            <card 
                v-for="card in formattedCards"
                :key="card.id"
                :data="card"
                :type-job-id="typeJobId"
                class="mt-4"
                @deleteOffer="deleteOffer"
            />
        </div>
    </div>
</template>
<script>
import ProfileSearch from '../../components/ProfileSearch.vue'
import Card from '../../components/Card.vue'

export default {
    data() {
        return {
            cards: [],
            searchFields: null
        }
    },
    computed: {
        typeJobText() {
            if(this.typeJob === 'umzug') {
                return 'Umzug'
            }

            if(this.typeJob === 'reinigung') {
                return 'Reinigung'
            }

            if(this.typeJob === 'umzug-und-reinigung') {
                return 'Umzug und Reinigun'
            }

            if(this.typeJob === 'maler') {
                return 'Maler'
            }

            if(this.typeJob === 'bodenleger') {
                return 'Bodenleger'
            }

            if(this.typeJob === 'heizung') {
                return 'Heizung'
            }

            if(this.typeJob === 'elektriker') {
                return 'Elektriker'
            }

            if(this.typeJob === 'gartner') {
                return 'Gartner'
            }

            if(this.typeJob === 'schreiner') {
                return 'Schreiner'
            }
        },
        typeJobId() {
            if(this.typeJob === 'umzug') {
                return 1
            }

            if(this.typeJob === 'reinigung') {
                return 2
            }

            if(this.typeJob === 'umzug-und-reinigung') {
                return 3
            }

            if(this.typeJob === 'maler') {
                return 4
            }

            if(this.typeJob === 'bodenleger') {
                return 5
            }

            if(this.typeJob === 'heizung') {
                return 6
            }

            if(this.typeJob === 'elektriker') {
                return 7
            }

            if(this.typeJob === 'gartner') {
                return 8
            }

            if(this.typeJob === 'schreiner') {
                return 9
            }
        },
        typeJob() {
            return this.$route.params.typeJob
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
        getDate(dateStr) {
            const dateParts = dateStr.split('-');
            return new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])
        }
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