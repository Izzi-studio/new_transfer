<template>
    <form
        :class="{'opacity-50 pe-none': isUpdate}" 
        @submit.prevent="formHandler"
        @input="isSended = false"
    >
        <h4 class="d-block d-lg-none mb-3">Passwort ändern</h4>
        <div class="row">
            <div class="col-lg-5">
                <form-field
                    label="Altes Password*"
                    type="password"
                    minlength="8"
                    required
                    placeholder="Altes Password*"
                    v-model="fields.currentPassword"
                />
                <form-field
                    class="mt-4"
                    label="Neues Password*"
                    type="password"
                    minlength="8"
                    required
                    placeholder="Neues Password*"
                    v-model="fields.newPassword"
                />
                <form-field
                    class="mt-4"
                    label="Passwort bestätigen*"
                    type="password"
                    minlength="8"
                    required
                    placeholder="Passwort bestätigen*"
                    v-model="fields.repeatPassword"
                />
                <p v-show="!isMatchPasswords && isSended" class="text-danger mt-3">Das Passwort ist zu kurz</p>
            </div>
        </div>
        <input class="mt-4" type="submit" value="Speichern">
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
                url: '/api/front/partner/password/update',
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(() => {
                    this.isUpdate = false
                    toastr.success("Informationen aktualisiert");
                })
                .catch(({ response }) => {
                    this.isUpdate = false
                    toastr.error(response.data.old_password_err || 'Etwas ist schief gelaufen');
                })
        }
    },
}
</script>
