<template>
    <div>
        <form-progress
            :progress-text="progressText"
            :current-step="currentStep"
            class="mt-5"
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
    props: ['localize'],
    computed: {
        progressText() {
            let arr = []

            arr.push(this.trans('label-step.general-data'))
            arr.push(this.trans('label-step.profile'))
            arr.push(this.trans('label-step.regions'))

            return arr
        },
        currentStep() {
            return this.$store.state.stepsForms.currentStep
        }
    },
    mounted() {
        this.$store.dispatch('getTypeJobs')
        this.$store.dispatch('getRegions')
        this.$store.commit('stepsForms/setUrlHandler', '/partner-werden')
        this.$store.commit('setLocalize', JSON.parse(this.localize))
    },
    components: {
        FormProgress,
        GeneralData,
        Profile,
        Regions
    }
}
</script>