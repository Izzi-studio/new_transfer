<template>
    <div>
        <h4 class="d-block d-lg-none mb-3">Anfrage verkaufen</h4>
        <p class="mt-2">Erstellen Sie ein neues zum Verkauf:</p>
        <ul>
            <li class="mt-2">
                <a :href="additionalInfo.umzugUrl">
                    Umzug
                </a>
            </li>
            <li class="mt-2">
                <a :href="additionalInfo.reinigungUrl">
                    Reinigung
                </a>
            </li>
            <li class="mt-2">
                <a :href="additionalInfo.umzugUndReinigungUrl">
                    Umzug + Reinigung
                </a>
            </li>
            <li class="mt-2">
                <a :href="additionalInfo.malarUrl">
                    Maler/Gipser
                </a>
            </li>
            <li class="mt-2">
                <a :href="additionalInfo.bodenlegerUrl">
                    Bodenleger
                </a>
            </li>
            <li class="mt-2">
                <a :href="additionalInfo.heizungUrl">
                    Heizungsanbieter
                </a>
            </li>
            <li class="mt-2">
                <a :href="additionalInfo.elektrikerUrl">
                    Elektriker
                </a>
            </li>
            <li class="mt-2">
                <a :href="additionalInfo.gartnerUrl">
                    Gärtner
                </a>
            </li>
            <li class="mt-2">
                <a :href="additionalInfo.schreinerUrl">
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