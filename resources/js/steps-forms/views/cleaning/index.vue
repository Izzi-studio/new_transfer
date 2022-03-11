<template>
    <div>
        <form-progress
            :progress-text="progressText"
            :current-step="currentStep"
            class="mt-5"
        />
        <cleaning v-show="currentStep === 1" />
        <number v-show="currentStep === 2" />
        <contact v-show="currentStep === 3" />
    </div>
</template>
<script>
import FormProgress from '../../FormProgress'
import Contact from '../../ContactStep'
import Cleaning from './Cleaning'
import Number from './Number'

export default {
    props: ['urlHandler'],
    data: () => ({

    }),
    computed: {
        currentStep() {
            return this.$store.state.stepsForms.currentStep
        },
        progressText() {
            return this.isAuth ? ['Reinigung', 'Anzahl'] : ['Reinigung', 'Anzahl', 'Kontakt']          
        },
        isAuth() {
            return document.querySelector('body').dataset.isAuth == 'true'
        },
    },
    mounted() {
        this.$store.dispatch('stepsForms/getRegions')
        this.$store.commit('stepsForms/setUrlHandler', this.urlHandler)

        const id = this.$route.path.replace(/[^0-9]/g,"")
        if(this.isAuth && id) {
            this.$store.dispatch('stepsForms/getClientValues', id)
        }
    },
    components: {
        FormProgress,
        Cleaning,
        Number,
        Contact
    }
}
</script>