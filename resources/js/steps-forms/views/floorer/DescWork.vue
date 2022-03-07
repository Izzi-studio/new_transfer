<template>
    <form @submit.prevent="formHandler" @input="isSended = false" class="steps-form__form">
        <div class="row">
            <div class="col-xl-8">
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
                            v-model="fields['additional_info[zip]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Ort*"
                            type="text"
                            required
                            placeholder="Ort*"
                            v-model="fields['additional_info[city]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Strasse*"
                            type="text"
                            required
                            placeholder="Strasse*"
                            v-model="fields['additional_info[street]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Nr"
                            type="text"
                            placeholder="Nr"
                            v-model="fields['additional_info[number]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <div class="form-field">
                            <p class="form-field__label">Auftragsdatum*</p>
                            <date-picker
                                ref="datePicker"
                                :clearable="false"
                                format="DD.MM.YYYY"
                                v-model="date"
                            />
                        </div>
                    </div>
                </div>
                <h5 class="mt-5">Was soll verlegt werden?</h5>
                <div class="row">
                    <div class="col-md-6 mt-4">
                        <form-checkbox
                            v-model="fields['additional_info[work_should_be_done]']"
                            val="Laminat"
                            label="Laminat"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-checkbox
                            v-model="fields['additional_info[work_should_be_done]']"
                            val="Vinyl"
                            label="Vinyl"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-checkbox
                            v-model="fields['additional_info[work_should_be_done]']"
                            val="Parkett"
                            label="Parkett"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-checkbox
                            v-model="fields['additional_info[work_should_be_done]']"
                            val="Kork"
                            label="Kork"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-checkbox
                            v-model="fields['additional_info[work_should_be_done]']"
                            val="Teppich"
                            label="Teppich"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-checkbox
                            v-model="fields['additional_info[work_should_be_done]']"
                            val="Weitere"
                            label="Weitere"
                        />
                    </div>
                </div>
                <p v-show="!isSelectedCheckboxes && isSended" class="text-danger mt-3">Bitte wählen Sie etwas aus der Liste aus!</p>
                <div class="row">
                    <div class="col-md-6 mt-4">
                        <div class="form-field">
                            <p class="form-field__label">Wieviel Fläche soll verlegt werden?*</p>
                            <select v-model="fields['additional_info[square]']" required>
                                <option value="&lt;30m&sup2;"> &lt;30m&sup2; </option>
                                <option value="30-50m&sup2;"> 30-50m&sup2; </option>
                                <option value="50-80m&sup2;"> 50-80m&sup2; </option>
                                <option value="80-120m&sup2;"> 80-120m&sup2; </option>
                                <option value="120-160m&sup2;"> 120-160m&sup2; </option>
                                <option value="160-200m&sup2;"> 160-200m&sup2; </option>
                                <option value="&gt;200m&sup2;"> &gt;200m&sup2; </option>
                            </select>
                        </div>
                    </div>
                </div>
                <h5 class="mt-5">Flexibilität</h5>
                <div class="row">
                    <div class="col-md-6 mt-4">
                        <form-radio
                            v-model="fields['additional_info[dayrange]']"
                            val="Nicht Flexibel"
                            label="Nicht Flexibel"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-radio
                            v-model="fields['additional_info[dayrange]']"
                            val="+/- 1 Tag"
                            label="+/- 1 Tag"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-radio
                            v-model="fields['additional_info[dayrange]']"
                            val="+/- 2 Tagen"
                            label="+/- 2 Tagen"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-radio
                            v-model="fields['additional_info[dayrange]']"
                            val="+/- 3 Tagen"
                            label="+/- 3 Tagen"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 mt-4">
                        <div class="form-field">
                            <p class="form-field__label">Bemerkungen</p>
                            <textarea v-model="fields['proposal[description]']" placeholder="Bemerkungen"></textarea>
                        </div>
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
            'additional_info[zip]': '',
            'additional_info[city]': '',
            'additional_info[street]': '',
            'proposal[region_id]': '',
            'additional_info[number]': '',
            'additional_info[work_should_be_done]': [],
            'proposal[date_start]': '',
            'additional_info[dayrange]': 'Nicht Flexibel',
            'proposal[description]': '',
            'proposal[type_job_id]': '5',
            'additional_info[square]': '',
            _token: '',
        },
        isSended: false,
        fieldsGroupName: 'from',
        date: new Date()
    }),
    computed: {
        regions() {
            return this.$store.state.stepsForms.regions
        },
        csrfToken() {
            return document.querySelector('meta[name="csrf-token"]').content
        },
        isSelectedCheckboxes() {
            return this.fields['additional_info[work_should_be_done]'].length ? true : false
        },
    },
    watch: {
        date() {
            this.updateDate()
        }
    },
    mounted() {
        this.updateDate()
    },
    methods: {
        updateDate() {
            setTimeout(() => {
                this.fields['proposal[date_start]'] = this.$refs.datePicker.text
            })
        },
        formHandler() {
            this.isSended = true

            if(!this.isSelectedCheckboxes) return

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