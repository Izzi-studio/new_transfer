<template>
    <div>
        <h4 class="d-block d-lg-none mb-3">{{trans('request-sell')}}</h4>
        <ul>
            <li class="mt-2">
                <a :href="additionalInfo.umzugUrl + '#section-steps'">
                    Umzug
                </a>
            </li>
            <li class="mt-2">
                <a :href="additionalInfo.reinigungUrl + '#section-steps'">
                    Reinigung
                </a>
            </li>
            <li class="mt-2">
                <a :href="additionalInfo.umzugUndReinigungUrl + '#section-steps'">
                    Umzug + Reinigung
                </a>
            </li>
            <li class="mt-2">
                <a :href="additionalInfo.malarUrl + '#section-steps'">
                    Maler/Gipser
                </a>
            </li>
            <li class="mt-2">
                <a :href="additionalInfo.bodenlegerUrl + '#section-steps'">
                    Bodenleger
                </a>
            </li>
            <li class="mt-2">
                <a :href="additionalInfo.heizungUrl + '#section-steps'">
                    Heizungsanbieter
                </a>
            </li>
            <li class="mt-2">
                <a :href="additionalInfo.elektrikerUrl + '#section-steps'">
                    Elektriker
                </a>
            </li>
            <li class="mt-2">
                <a :href="additionalInfo.gartnerUrl + '#section-steps'">
                    Gärtner
                </a>
            </li>
            <li class="mt-2">
                <a :href="additionalInfo.schreinerUrl + '#section-steps'">
                    Schreiner
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        additionalInfo() {
            return this.$store.state.additionalInfo
        }
    }
}
</script>