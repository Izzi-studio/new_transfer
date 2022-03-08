<template>
    <form
        class="profile-info" 
        @submit.prevent="formHandler"
    >
        <div class="row">
            <div class="col-lg-5">
                <form-field
                    label="Altes Password*"
                    type="password"
                    required
                    placeholder="Altes Password*"
                    v-model="fields.currentPassword"
                />
                <form-field
                    class="mt-4"
                    label="Neues Password*"
                    type="password"
                    required
                    placeholder="Neues Password*"
                    v-model="fields.newPassword"
                />
                <form-field
                    class="mt-4"
                    label="Passwort bestätigen*"
                    type="password"
                    required
                    placeholder="Passwort bestätigen*"
                    v-model="fields.repeatPassword"
                />
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
    }),
    computed: {

    },
    methods: {
        formHandler() {
            
        }
    },
}
</script>
