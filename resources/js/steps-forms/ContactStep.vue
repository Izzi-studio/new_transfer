<template>
    <form @submit.prevent="formHandler" @input="isSended = false" class="steps-form__form">
        <div class="row mt-5">
            <div class="col-xl-8">
                <button 
                    class="btn btn_theme_gray"
                    type="button"
                    @click="$store.commit('stepsForms/prevStep')"
                >
                    {{ trans('zuruck') }}
                </button>
                <div class="row">
                    <div class="col-md-6 mt-4">
                        <div class="form-field">
                            <p class="form-field__label">{{ trans('form-labels.gender') }}*</p>
                            <select v-model="fields['client[gender]']" required>
                                <option value="Herr">Herr</option>
                                <option value="Frau">Frau</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.name') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.name') + '*'"
                            v-model="fields['client[name]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.lastname') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.lastname') + '*'"
                            v-model="fields['client[lastname]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.phone') + '*'"
                            type="tel"
                            :placeholder="trans('form-labels.phone') + '*'"
                            v-model="fields['client[phone]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.email') + '*'"
                            type="email"
                            required
                            :placeholder="trans('form-labels.email') + '*'"
                            v-model="fields['client[email]']"
                        />
                        <p v-show="isHasEmail && isSended" class="text-danger mt-3">{{ trans('err-has-email') }}</p>
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.availability') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.availability') + '*'"
                            v-model="fields['client[availability]']"
                        />
                    </div>
                </div>
                <button class="btn mt-5">{{ trans('weiter') }}</button>
            </div>
        </div>
    </form>
</template>
<script>
export default {
    data: () => ({
        fields: {
            'client[gender]': 'Herr',
            'client[name]': '',
            'client[lastname]': '',
            'client[phone]': '',
            'client[email]': '',
            'client[availability]': '',
        },
        isSended: false
    }),
    computed: {
        isHasEmail() {
            return this.$store.state.stepsForms.isHasEmail
        }
    },
    methods: {
        async formHandler() {
            await this.$store.dispatch('stepsForms/checkEmail', {
                email: this.fields['client[email]']
            })
            
            this.isSended = true

            if(this.isHasEmail) return

            this.$store.commit('stepsForms/setData', {
                key: this.$options._componentTag,
                data: {...this.fields}
            })

            this.$store.dispatch('stepsForms/sendData')
        }
    },
}
</script>