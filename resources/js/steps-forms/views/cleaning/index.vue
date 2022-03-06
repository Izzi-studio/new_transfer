<template>
    <div>
        <form-progress
            :progress-text="progressText"
            :current-step="currentStep" 
        />
        <cleaning v-show="currentStep === 1" />
        <number v-show="currentStep === 2" />
        <contact v-show="currentStep === 3" />
    </div>
</template>
<script>
import FormProgress from '../../FormProgress'
import Cleaning from './Cleaning'
import Number from './Number'
import Contact from './Contact'

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
    },
    components: {
        FormProgress,
        Cleaning,
        Number,
        Contact
    }
}
</script>