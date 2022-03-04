<template>
    <form @submit.prevent="formHandler" class="steps-form__form">
        <div class="row mt-5 mt-lg-0">
            <div class="col-xl-8">
                <button 
                    class="btn btn_theme_gray"
                    type="button"
                    @click="$store.commit('stepsForms/prevStep')"
                >
                    Zurück
                </button> 
                <div class="row">
                    <div class="col-md-6 mt-4">
                        <div class="form-field">
                            <p class="form-field__label">Region*</p>
                            <select v-model="fields['proposal[region_id]']" required>
                                <option
                                    v-for="region in regions"
                                    :key="region.id"
                                    :value="region.id"
                                >
                                    {{ region.name }}
                                </option>
                            </select>
                        </div>
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
                            label="Nr"
                            type="text"
                            placeholder="Nr"
                            v-model="fields['additional_info[from][number]']"
                        />
                    </div>
                </div>
                <h5 class="mt-5">Haustyp</h5>
                <div class="row">
                    <div class="col-md-6 mt-4">
                        <form-radio
                            v-model="fields['additional_info[from][house_type]']"
                            val="Mehrfamilienhaus"
                            label="Mehrfamilienhaus"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-radio
                            v-model="fields['additional_info[from][house_type]']"
                            val="Einfamilienhaus"
                            label="Einfamilienhaus"
                        />
                    </div>
                </div>
                <h5 class="mt-5">Lift</h5>
                <div class="row">
                    <div class="col-md-6 mt-4">
                        <form-radio
                            v-model="fields['additional_info[from][lift]']"
                            val="Kein Lift"
                            label="Kein Lift"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-radio
                            v-model="fields['additional_info[from][lift]']"
                            val="Mit Lift"
                            label="Mit Lift"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Stock*"
                            type="text"
                            required
                            placeholder="Stock*"
                            v-model="fields['additional_info[from][floor]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Fläche in m2*"
                            type="text"
                            required
                            placeholder="Fläche in m2*"
                            v-model="fields['additional_info[from][square]']"
                        />
                    </div>
                </div>
                <button class="btn mt-5">Weiter</button>
            </div>
        </div>
    </form>
</template>
<script>
export default {
    data: () => ({
        fields: {
            'proposal[region_id]': '',
            'additional_info[from][number]': '',
            'additional_info[from][house_type]': 'Mehrfamilienhaus',
            'additional_info[from][lift]': 'Kein Lift',
            'additional_info[from][floor]': '',
            'additional_info[from][square]': '',
            postcode: '',
            city: '',
            street: '',
        },
        fieldsGroupName: 'to'
    }),
    computed: {
        regions() {
            return this.$store.state.stepsForms.regions
        },
        isAuth() {
            return document.querySelector('body').dataset.isAuth == 'true'
        },
    },
    methods: {
        formHandler() {
            if(this.isAuth) {
                this.$store.commit('stepsForms/setData', {
                    key: this.fieldsGroupName,
                    data: this.fields
                })

                this.$store.dispatch('stepsForms/sendData')
            } else {
                this.$store.commit('stepsForms/setData', {
                    key: this.fieldsGroupName,
                    data: this.fields
                })
                this.$store.commit('stepsForms/nextStep')
            }
        }
    }
}
</script>