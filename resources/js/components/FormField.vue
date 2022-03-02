<template>
    <div class="form-field">
        <p class="form-field__label">{{ label }}</p>
        <input 
            :type="type" 
            :placeholder="placeholder" 
            :value="value"
            :required="required"
            :minlength="minlength"
            @input="$emit('input', $event.target.value)"
        >
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        type: String,
        placeholder: String,
        value: String,
        minlength: [String, Number],
        required: {
            type: Boolean,
            default: false
        }
    }
}
</script>