<template>
    <form @submit.prevent="formHandler" class="steps-form__form">
        <div class="row mt-5">
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
                            v-model="fields['additional_info[to][zip]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Ort*"
                            type="text"
                            required
                            placeholder="Ort*"
                            v-model="fields['additional_info[to][city]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Strasse*"
                            type="text"
                            required
                            placeholder="Strasse*"
                            v-model="fields['additional_info[to][street]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Nr"
                            type="text"
                            placeholder="Nr"
                            v-model="fields['additional_info[to][number]']"
                        />
                    </div>
                </div>
                <h5 class="mt-5">Haustyp</h5>
                <div class="row">
                    <div class="col-md-6 mt-4">
                        <form-radio
                            v-model="fields['additional_info[to][house_type]']"
                            val="Mehrfamilienhaus"
                            label="Mehrfamilienhaus"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-radio
                            v-model="fields['additional_info[to][house_type]']"
                            val="Einfamilienhaus"
                            label="Einfamilienhaus"
                        />
                    </div>
                </div>
                <h5 class="mt-5">Lift</h5>
                <div class="row">
                    <div class="col-md-6 mt-4">
                        <form-radio
                            v-model="fields['additional_info[to][lift]']"
                            val="Kein Lift"
                            label="Kein Lift"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-radio
                            v-model="fields['additional_info[to][lift]']"
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
                            v-model="fields['additional_info[to][floor]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Fläche in m2*"
                            type="text"
                            required
                            placeholder="Fläche in m2*"
                            v-model="fields['additional_info[to][square]']"
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
            'additional_info[to][zip]': '',
            'additional_info[to][city]': '',
            'additional_info[to][street]': '',
            'additional_info[to][number]': '',
            'additional_info[to][house_type]': 'Mehrfamilienhaus',
            'additional_info[to][lift]': 'Kein Lift',
            'additional_info[to][floor]': '',
            'additional_info[to][square]': '',
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
            this.$store.commit('stepsForms/setData', {
                key: this.fieldsGroupName,
                data: this.fields
            })

            if(this.isAuth) {
                this.$store.dispatch('stepsForms/sendData')
            } else {
                this.$store.commit('stepsForms/nextStep')
            }
        }
    }
}
</script>