<template>
    <div>
        <h4 class="d-block d-lg-none mb-3">Abgeschlossene Bewerbungen</h4>
        <div
            v-for="card in cards"
            :key="card.id"
            class="mb-4"
        >
            <card
                :data="card.proposal"
                :type-job-id="card.proposal.type_job_id"
                requests-status="review"
            />
            <div class="review mt-4">
                <img class="review__img" :src="card.avatar" alt="">
                <div class="review__info">
                    <h3 class="review__title">{{ card.publisher_name }}, {{ card.created_at }}</h3>
                    <div 
                        class="rating review__rating"
                        :class="'rating_fullness_' + card.rating"
                    ></div>
                    <p class="rating__txt">{{ card.message }}</p>
                </div>
            </div>
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
    mounted() {
        axios.get('/api/front/partner/reviews')
            .then(({ data }) => {
                this.cards = data.data
            })
    },
    components: {
        Card
    }
}
</script>