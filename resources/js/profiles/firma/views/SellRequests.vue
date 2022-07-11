<template>
    <div>
        <h4 class="d-block d-lg-none mb-3">{{ requestsText }}</h4>
        <div>
            <card
                class="mb-4"
                v-for="card in cards"
                :key="card.id"
                :data="card"
                :type-job-id="card.type_job_id"
                :is-show-btn-cancel="isShowBtnCancel"
                :is-show-btn-download="isShowBtnDownload"
                @acceptCompany="acceptCompany"
                @deleteOffer="deleteOffer"
            />
        </div>
    </div>
</template>
<script>
import Card from '../../../components/Card.vue'

export default {
    data() {
        return {
            cards: [],
        }
    },
    computed: {
        requestsText() {
            switch(this.$route.params.requests) {
                case 'verkaufe': return this.trans('requests-selling')
                case 'kaufe': return this.trans('requests-bought')
            }
        },
        requestsStatus() {
            switch(this.$route.params.requests) {
                case 'verkaufe': return 'resell'
                case 'kaufe': return 'resell-accepted'
            }
        },
        isShowBtnCancel() {
            return this.requestsStatus === 'resell'
        },
        isShowBtnDownload() {
            return this.requestsStatus === 'resell-accepted'
        },
    },
    methods: {
        acceptCompany(data) {
            axios.put(`/api/front/partner/proposals/choose-performer/${data.proposalId}`, {
                user_id: data.userId
            })
                .then((dataStatus) => {
                    if(dataStatus.data.status) {
                        this.cards.filter(i => i.id === data.proposalId)[0].performed = true
                    }
                })
        },  
        deleteOffer(id) {
            const isConfirm = confirm('Sind Sie sicher, dass Sie den Auftrag löschen wollen?')

            if(isConfirm) {
                axios.delete(`/api/front/partner/proposals/delete/${id}`)
                    .then(() => {
                        this.cards = this.cards.filter(i => i.id != id)
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
        Card
    }
}
</script>