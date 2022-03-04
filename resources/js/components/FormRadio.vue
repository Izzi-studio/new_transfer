<template>
    <label class="form-radio">
        <input 
            :value="val"
            v-model="model"
            type="radio"
        >
        <div class="form-radio__radio"></div>
        <p class="form-radio__label">{{ label }}</p>
    </label>
</template>

<script>
export default {
    computed: {
        model: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            },
        },
    },
    props: ['label', 'val', 'value']
}
</script>