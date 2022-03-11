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
    props: ['urlHandler'],
    data: () => ({

    }),
    computed: {
        currentStep() {
            return this.$store.state.stepsForms.currentStep
        },
        progressText() {
            return this.isAuth ? ['Beschreibung der Arbeit'] : ['Beschreibung der Arbeit', 'Kontakt']          
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
        Contact,
        DescWork
    }
}
</script>