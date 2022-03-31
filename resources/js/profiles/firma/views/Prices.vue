<template>
    <div>
        <h4 class="d-block d-lg-none mb-3">Preise</h4>
        <ul v-if="servicesPrices" class="profile-service">
            <li class="profile-service__item">
                Malerarbeiten: <span>{{ servicesPrices.maler }} Chf</span>
            </li>
            <li class="profile-service__item">
                Umzug + Reinigung: <span>{{ servicesPrices.umzug_und_reinigung }} Chf</span>
            </li>
            <li class="profile-service__item">
                Umzug: <span>{{ servicesPrices.umzug }} Chf</span>
            </li>
            <li class="profile-service__item">
                Reinigung: <span>{{ servicesPrices.reinigung }} Chf</span>
            </li>
            <li class="profile-service__item">
                Bodenleger: <span>{{ servicesPrices.bodenleger }} Chf</span>
            </li>
            <li class="profile-service__item">
                Heizungsanbieter: <span>{{ servicesPrices.heizung }} Chf</span>
            </li>
            <li class="profile-service__item">
                Elektriker: <span>{{ servicesPrices.elektriker }} Chf</span>
            </li>
            <li class="profile-service__item">
                Gärtner: <span>{{ servicesPrices.gartner }} Chf</span>
            </li>
            <li class="profile-service__item">
                Schreiner: <span>{{ servicesPrices.schreiner }} Chf</span>
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