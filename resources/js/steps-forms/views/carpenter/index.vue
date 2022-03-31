<template>
    <div>
        <form-progress
            :progress-text="progressText"
            :current-step="currentStep"
            v-if="progressText.length > 1"
            class="mt-5"
        />
        <desc-work v-show="currentStep === 1" />
        <contact v-show="currentStep === 2" />
    </div>
</template>
<script>
import FormProgress from '../../FormProgress'
import Contact from '../../ContactStep'
import DescWork from './DescWork'

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

            arr.push(this.trans('label-step.description-work'))

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
        Contact,
        DescWork
    }
}
</script>