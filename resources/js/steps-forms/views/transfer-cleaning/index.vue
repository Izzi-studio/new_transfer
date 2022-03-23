<template>
    <div>
        <form-progress
            :progress-text="progressText"
            :current-step="currentStep"
            class="mt-5"
        />
        <from v-show="currentStep === 1" />
        <to v-show="currentStep === 2" />
        <cleaning v-show="currentStep === 3" />
        <contact v-show="currentStep === 4" />
    </div>
</template>
<script>
import FormProgress from '../../FormProgress'
import Contact from '../../ContactStep'
import From from './From'
import To from './To'
import Cleaning from './Cleaning'

export default {
    props: ['urlHandler'],
    data: () => ({

    }),
    computed: {
        currentStep() {
            return this.$store.state.stepsForms.currentStep
        },
        progressText() {
            return this.isAuth ? ['Von', 'Nach', 'Reinigung'] : ['Von', 'Nach', 'Reinigung', 'Kontakt']          
        },
        isAuth() {
            return document.querySelector('body').dataset.isAuth == 'true'
        },
    },
    mounted() {
        this.$store.dispatch('getRegions')
        this.$store.commit('stepsForms/setUrlHandler', this.urlHandler)

        const id = this.$route.path.replace(/[^0-9]/g,"")
        if(this.isAuth && id) {
            this.$store.dispatch('stepsForms/getClientValues', id)
        }
    },
    components: {
        FormProgress,
        From,
        To,
        Contact,
        Cleaning
    }
}
</script>