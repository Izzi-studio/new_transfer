<template>
    <form
        :class="{'opacity-50 pe-none': isUpdate}" 
        @submit.prevent="formHandler"
        @input="isSended = false"
    >
        <h4 class="d-block d-lg-none mb-3">{{trans('change-password')}}</h4>
        <div class="row">
            <div class="col-lg-5">
                <form-field
                    :label="trans('form-labels.old-password') + '*'"
                    type="password"
                    minlength="8"
                    required
                    :placeholder="trans('form-labels.old-password') + '*'"
                    v-model="fields.currentPassword"
                />
                <form-field
                    class="mt-4"
                    :label="trans('form-labels.new-password') + '*'"
                    type="password"
                    minlength="8"
                    required
                    :placeholder="trans('form-labels.new-password') + '*'"
                    v-model="fields.newPassword"
                />
                <form-field
                    class="mt-4"
                    :label="trans('form-labels.password-confirmation') + '*'"
                    type="password"
                    minlength="8"
                    required
                    :placeholder="trans('form-labels.password-confirmation') + '*'"
                    v-model="fields.repeatPassword"
                />
                <p v-show="!isMatchPasswords && isSended" class="text-danger mt-3">{{trans('confirm_password_err')}}</p>
            </div>
        </div>
        <input class="mt-4" type="submit" :value="trans('save')">
    </form>
</template>
<script>
export default {
    data: () => ({
        fields: {
            currentPassword: '',
            newPassword: '',
            repeatPassword: '',
        },
        isSended: false,
        isUpdate: false,
    }),
    computed: {
        isMatchPasswords() {
            return this.fields.newPassword === this.fields.repeatPassword
        },
    },
    methods: {
        formHandler() {
            if(!this.isMatchPasswords) return

            this.isSended = true
            this.isUpdate = true

            const formData = new FormData()

            formData.append('old_password', this.fields.currentPassword)
            formData.append('password', this.fields.newPassword)
            formData.append('password_confirmation', this.fields.repeatPassword)

            formData.append('_method', 'PUT')

            axios({
                method: "POST",
                url: '/api/front/client/password/update',
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(() => {
                    this.isUpdate = false
                })
                .catch(() => {
                    this.isUpdate = false
                })
        }
    },
}
</script>
