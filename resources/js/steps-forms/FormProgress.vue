<template>
    <div 
        class="form-progress"
        :class="classObject"
    >
        <p 
            v-for="(text, index) in progressText"
            :key="text"
            class="form-progress__item"
            :class="{'form-progress__item_active': currentStep >= index+1}"
        >
            <span>{{ text }}</span>
        </p>
    </div>
</template>
<script>
export default {
    props: ['progressText', 'currentStep'],
    computed: {
        totalSteps() {
            return this.progressText.length
        },
        classObject() {
            return {
                'form-progress_steps_3': this.totalSteps === 3,
                'form-progress_steps_more-3': this.totalSteps > 3,
            }
        }
    }
}
</script>