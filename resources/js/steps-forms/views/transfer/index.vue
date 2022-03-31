<template>
    <div>
        <form-progress
            :progress-text="progressText"
            :current-step="currentStep"
            class="mt-5"
        />
        <from v-show="currentStep === 1" />
        <to v-show="currentStep === 2" />
        <contact v-show="currentStep === 3" />
    </div>
</template>
<script>
import FormProgress from '../../FormProgress'
import Contact from '../../ContactStep'
import From from './From'
import To from './To'

export default {
    props: ['urlHandler', 'localize'],
    data: () => ({

    }),
    computed: {
        currentStep() {
            return this.$store.state.stepsForms.currentStep
        },
        progressText() {
            let arr = []

            arr.push(this.trans('label-step.from'))
            arr.push(this.trans('label-step.to'))

            if(!this.isAuth) {
                arr.push(this.trans('label-step.contact'))
            }

            return arr
        },
        isAuth() {
            return document.querySelector('body').dataset.isAuth == 'true'
        },
    },
    mounted() {
        this.$store.dispatch('getRegions')
        this.$store.commit('stepsForms/setUrlHandler', this.urlHandler)
        this.$store.commit('setLocalize', JSON.parse(this.localize))
        
        const id = this.$route.path.replace(/[^0-9]/g,"")
        if(this.isAuth && id) {
            this.$store.dispatch('stepsForms/getClientValues', id)
        }
    },
    components: {
        FormProgress,
        From,
        To,
        Contact
    }
}
</script>