<template>
    <form @submit.prevent="formHandler" class="steps-form__form">
        <div class="row">
            <div class="col-xl-7">
                <div class="row">
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Vorname*"
                            type="text"
                            required
                            placeholder="Vorname*"
                            v-model="fields.name"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Nachname*"
                            type="text"
                            required
                            placeholder="Nachname*"
                            v-model="fields.lastname"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="PLZ*"
                            type="number"
                            required
                            placeholder="PLZ*"
                            v-model="fields.postcode"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Ort*"
                            type="text"
                            required
                            placeholder="Ort*"
                            v-model="fields.city"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Strasse*"
                            type="text"
                            required
                            placeholder="Strasse*"
                            v-model="fields.street"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Hausnummer*"
                            type="text"
                            required
                            placeholder="Hausnummer*"
                            v-model="fields.house"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="E-Mail*"
                            type="email"
                            required
                            placeholder="E-Mail*"
                            v-model="fields.email"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Telefon*"
                            type="tel"
                            required
                            placeholder="Telefon*"
                            v-model="fields.phone"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Unternehmen*"
                            type="text"
                            required
                            placeholder="Unternehmen*"
                            v-model="fields.company"
                        />
                    </div>
                    <div class="col-md-6 mt-4 d-flex align-items-end">
                        <label class="form-file">
                            <input 
                                type="file"
                                @change="processFile($event)"
                            >
                            <p class="form-file__label">{{ fileName }}</p>
                        </label>
                    </div>
                    <div class="col-md-6 mt-4">
                        <button class="btn btn_width_max">Starten Sie Ihre Problemitgliedschaft</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
<script>
export default {
    data: () => ({
        fields: {
            name: '',
            lastname: '',
            postcode: '',
            city: '',
            street: '',
            house: '',
            email: '',
            phone: '',
            company: '',
            upload_file: null,
        },
        fieldsGroupName: 'generalData'
    }),
    computed: {
        fileName() {
            return (this.fields.upload_file && this.fields.upload_file.name) || 'UPLOAD FILE'
        }
    },
    methods: {
        processFile(e) {
            this.fields.upload_file = e.target.files[0] 
        },
        formHandler() {
            this.$store.commit('stepsForms/setData', {
                key: this.fieldsGroupName,
                data: this.fields
            })
            this.$store.commit('stepsForms/nextStep')
        }
    }
}
</script>