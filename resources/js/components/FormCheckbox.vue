<template>
    <label class="form-checkbox">
        <input 
            :value="val"
            v-model="model"
            type="checkbox"
        >
        <div class="form-checkbox__checkbox"></div>
        <p class="form-checkbox__label">{{ label }}</p>
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