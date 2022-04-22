<template>
    <form @submit.prevent="formHandler" @input="isSended = false" class="steps-form__form">
        <div class="row mt-5">
            <div class="col-xl-7">
                <button 
                    class="btn btn_theme_gray"
                    type="button"
                    @click="$store.commit('stepsForms/prevStep')"
                >
                    {{ trans('zuruck') }}
                </button>
                <div class="row mt-2">
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Passwort*"
                            type="password"
                            minlength="8"
                            required
                            placeholder="Passwort*"
                            v-model="fields.password"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Passwort bestätigen*"
                            type="password"
                            minlength="8"
                            required
                            placeholder="Passwort bestätigen*"
                            v-model="fields.password_confirmation"
                        />
                    </div>
                </div>
                <p v-show="!isMatchPasswords && isSended" class="text-danger mt-3">{{ trans('confirm_password_err') }}</p>
                
                <h5 class="mt-5">{{ trans('form-labels.jobs') }}*:</h5>
                <div class="row">
                    <div 
                        v-for="typesJob in typesJobs"
                        :key="typesJob.id"
                        class="col-md-4 mt-4"
                    >
                        <form-checkbox
                            v-model="fields['types_of_jobs[]']"
                            :val="typesJob.id"
                            :label="typesJob.name"
                        />
                    </div>
                </div>
                <p v-show="!isSelectedCheckboxes && isSended" class="text-danger mt-3">{{ trans('err-empty-list') }}</p>
                
                <button class="btn mt-4">{{ trans('partner-profile-btn') }}</button>
            </div>
        </div>
    </form>
</template>
<script>
export default {
    data: () => ({
        fields: {
            password: '',
            password_confirmation: '',
            'types_of_jobs[]': [],
        },
        isSended: false
    }),
    computed: {
        isSelectedCheckboxes() {
            return this.fields['types_of_jobs[]'].length ? true : false
        },
        isMatchPasswords() {
            return this.fields.password === this.fields.password_confirmation
        },
        typesJobs() {
            return this.$store.state.typesJobs
        }
    },
    methods: {
        formHandler() {
            this.isSended = true
            if(this.isMatchPasswords && this.isSelectedCheckboxes) {
                this.$store.commit('stepsForms/setData', {
                    key: this.$options._componentTag,
                    data: {...this.fields}
                })
                this.$store.commit('stepsForms/nextStep')
            }
        }
    }
}
</script>