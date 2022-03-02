<template>
    <div>
        <form-progress
            :progress-text="progressText"
            :current-step="currentStep" 
        />
        <general-data v-show="currentStep === 1" />
        <profile v-show="currentStep === 2" />
        <regions v-show="currentStep === 3" />
    </div>
</template>
<script>
import FormProgress from '../../FormProgress'
import GeneralData from './GeneralData'
import Profile from './Profile'
import Regions from './Regions'

export default {
    data: () => ({
        progressText: ['Allgemeine Daten', 'Profil', 'Region'],
    }),
    computed: {
        currentStep() {
            return this.$store.state.stepsForms.currentStep
        }
    },
    mounted() {
        this.$store.dispatch('stepsForms/getTypeJobs')
        this.$store.dispatch('stepsForms/getRegions')
    },
    components: {
        FormProgress,
        GeneralData,
        Profile,
        Regions
    }
}
</script>