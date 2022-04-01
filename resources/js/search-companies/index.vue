<template>
    <div>
        <div class="row">
            <div class="col-lg-10 col-xxl-8">
                <filter-company @search="currentPage = 1; params = $event" class="mt-5" />
            </div>
        </div>
        <div v-if="cards.length">
            <div class="row mt-3">
                <div 
                    class="col-lg-6 col-xxl-4 mt-4"
                    v-for="(card, index) in cards"
                    :key="card.index"
                >
                    <card-company :data="card" />
                </div>
            </div>
        </div>
        <paginate
            v-if="cards.length < total"
            v-model="currentPage"
            :click-handler="loadCompanies"
            :pageCount="pageCount"
            prevText=""
            nextText=""
            containerClass="pagination mt-5"
            page-class="pagination__item"
            prev-class="pagination__arrow pagination__arrow_prev"
            next-class="pagination__arrow pagination__arrow_next"
        />
    </div>
</template>

<script>
import CardCompany from './CardCompany'
import FilterCompany from './FilterCompany'
import Paginate from 'vuejs-paginate'

export default {
    props: ['localize'],
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
                this.loadCompanies()
            }
        }
    },
    methods: {
        loadCompanies(page = 1) {
            this.cards = []
            this.total = 0
            axios.get('/api/front/companies', {
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
    mounted() {
        this.loadCompanies()
        this.$store.commit('setLocalize', JSON.parse(this.localize))
    },
    components: {
        CardCompany,
        FilterCompany,
        Paginate
    }
}
</script>