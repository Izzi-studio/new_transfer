<template>
    <div>
        <h4 class="d-block d-lg-none mb-3">{{trans('price')}}</h4>
        <ul v-if="servicesPrices" class="profile-service">
            <li class="profile-service__item">
                {{this.trans('maler')}}: <span>{{ servicesPrices.maler }} Chf</span>
            </li>
            <li class="profile-service__item">
                {{this.trans('umzug_und_reinigung')}}: <span>{{ servicesPrices.umzug_und_reinigung }} Chf</span>
            </li>
            <li class="profile-service__item">
                {{this.trans('umzug')}}: <span>{{ servicesPrices.umzug }} Chf</span>
            </li>
            <li class="profile-service__item">
                {{this.trans('reinigung')}}: <span>{{ servicesPrices.reinigung }} Chf</span>
            </li>
            <li class="profile-service__item">
                {{this.trans('bodenleger')}}: <span>{{ servicesPrices.bodenleger }} Chf</span>
            </li>
            <li class="profile-service__item">
                {{this.trans('heizung')}}: <span>{{ servicesPrices.heizung }} Chf</span>
            </li>
            <li class="profile-service__item">
                {{this.trans('elektriker')}}: <span>{{ servicesPrices.elektriker }} Chf</span>
            </li>
            <li class="profile-service__item">
                {{this.trans('gartner')}}: <span>{{ servicesPrices.gartner }} Chf</span>
            </li>
            <li class="profile-service__item">
                {{this.trans('schreiner')}}: <span>{{ servicesPrices.schreiner }} Chf</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            servicesPrices: null,
        }
    },
    mounted() {
        axios.get('/api/front/partner/proposals/prices')
            .then(({ data }) => {
                this.servicesPrices = data.data.prices
            })
    }
}
</script>