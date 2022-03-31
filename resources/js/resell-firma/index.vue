<template>
    <div>
        <div class="profile__header">
            <h1 class="section-title">Mein Konto</h1>
            <p class="profile__bill">CHF: 00.00</p>
        </div>
        <div class="row mt-4">
            <div class="col-lg-4 mt-2 mt-lg-4">
                <filter-proposals @search="currentPage = 1; params = $event" />
            </div>
            <div class="col-lg-8 mt-2 mt-lg-4">
                <div>
                    <card 
                        class="mb-4"
                        v-for="card in cards"
                        :key="card.id"
                        :data="card"
                        :type-job-id="card.type_job_id"
                        :is-show-btn-add="true"
                        @addOffer="addOffer"
                    />
                    <paginate
                        v-if="cards.length < total"
                        v-model="currentPage"
                        :click-handler="loadCards"
                        :pageCount="pageCount"
                        prevText=""
                        nextText=""
                        containerClass="pagination mt-5"
                        page-class="pagination__item"
                        prev-class="pagination__arrow pagination__arrow_prev"
                        next-class="pagination__arrow pagination__arrow_next"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FilterProposals from './FilterProposals'
import Card from '../components/Card'
import Paginate from 'vuejs-paginate'

export default {
    components: {
        FilterProposals,
        Card,
        Paginate
    },
    data() {
        return {
            cards: [],
            params: {},
            currentPage: 1,
            pageCount: 0,
            total: 0,
        }
    },
    watch: {
        params: {
            deep: true,
            handler() {
                this.loadCards()
            }
        }
    },
    mounted() {
        this.loadCards()
    },
    methods: {
        addOffer(id) {
            axios.post(`/api/front/partner/proposals/process/${id}`, {
                _method: 'PUT'
            })
                .then(({ data }) => {
                    if(data.data.result) {
                        this.loadCards()
                    }
                })
        },
        loadCards(page = 1) {
            this.cards = []
            this.total = 0
            axios.get('/api/front/partner/proposals-resell', {
                params: {
                    ...this.params,
                    page,
                }
            })
                .then(({ data }) => {
                    this.cards = data.data
                    this.pageCount = data.meta.last_page
                    this.total = data.meta.total
                })
        }
    },
}
</script>