<template>
    <form @submit.prevent="formHandler" class="steps-form__form">
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
                            v-model="fields['additional_info[from][zip]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Ort*"
                            type="text"
                            required
                            placeholder="Ort*"
                            v-model="fields['additional_info[from][city]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            label="Strasse*"
                            type="text"
                            required
                            placeholder="Strasse*"
                            v-model="fields['additional_info[from][street]']"
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
                <h5 class="mt-5">Ich wünsche Anfragen für folgende Arbeiten:</h5>
                <div class="row">
                    <div class="col-md-6 mt-4">
                        <form-radio
                            v-model="fields['additional_info[from][dayrange]']"
                            val="Nicht Flexibel"
                            label="Nicht Flexibel"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-radio
                            v-model="fields['additional_info[from][dayrange]']"
                            val="+/- 1 Tag"
                            label="+/- 1 Tag"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-radio
                            v-model="fields['additional_info[from][dayrange]']"
                            val="+/- 2 Tagen"
                            label="+/- 2 Tagen"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-radio
                            v-model="fields['additional_info[from][dayrange]']"
                            val="+/- 3 Tagen"
                            label="+/- 3 Tagen"
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
                            label="Anzahl der Zimmer*"
                            type="text"
                            required
                            placeholder="Anzahl der Zimmer*"
                            v-model="fields['additional_info[from][rooms]']"
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
                <h5 class="mt-5">Andere Info</h5>
                <div class="row">
                    <div class="col-md-6 mt-4">
                        <form-checkbox
                            v-model="fields['additional_info[from][other][]']"
                            val="Keller"
                            label="Keller"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-checkbox
                            v-model="fields['additional_info[from][other][]']"
                            val="Klavier"
                            label="Klavier"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-checkbox
                            v-model="fields['additional_info[from][other][]']"
                            val="Estrich"
                            label="Estrich"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-checkbox
                            v-model="fields['additional_info[from][other][]']"
                            val="Garage"
                            label="Garage"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-checkbox
                            v-model="fields['additional_info[from][other][]']"
                            val="Flügel"
                            label="Flügel"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-checkbox
                            v-model="fields['additional_info[from][other][]']"
                            val="Lagerung"
                            label="Lagerung"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-checkbox
                            v-model="fields['additional_info[from][other][]']"
                            val="Demontage / Montage"
                            label="Demontage / Montage"
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
            'additional_info[from][zip]': '',
            'additional_info[from][city]': '',
            'additional_info[from][street]': '',
            'proposal[region_id]': '',
            'additional_info[from][number]': '',
            'proposal[date_start]': '',
            'additional_info[from][dayrange]': 'Nicht Flexibel',
            'additional_info[from][house_type]': 'Mehrfamilienhaus',
            'additional_info[from][lift]': 'Kein Lift',
            'additional_info[from][floor]': '',
            'additional_info[from][rooms]': '',
            'additional_info[from][square]': '',
            'additional_info[from][other][]': [],
            'proposal[description]': '',
            'proposal[type_job_id]': '3',
        },
        fieldsGroupName: 'from',
        date: new Date()
    }),
    computed: {
        regions() {
            return this.$store.state.regions
        },
        initialData() {
            return this.$store.state.stepsForms.initialData
        }
    },
    watch: {
        date() {
            this.updateDate()
        },
        initialData(data) {
            this.fields['additional_info[from][zip]'] = data.additional_info.from.zip
            this.fields['additional_info[from][city]'] = data.additional_info.from.city
            this.fields['additional_info[from][street]'] = data.additional_info.from.street
            this.fields['proposal[region_id]'] = data.region_id
            this.fields['additional_info[from][number]'] = data.additional_info.from.number
            this.date = this.globalGetDate(data.date_start)
            this.fields['additional_info[from][dayrange]'] = data.additional_info.from.dayrange
            this.fields['additional_info[from][house_type]'] = data.additional_info.from.house_type
            this.fields['additional_info[from][lift]'] = data.additional_info.from.lift
            this.fields['additional_info[from][floor]'] = data.additional_info.from.floor
            this.fields['additional_info[from][rooms]'] = data.additional_info.from.rooms
            this.fields['additional_info[from][square]'] = data.additional_info.from.square
            this.fields['additional_info[from][other][]'] = data.additional_info.from.other
            this.fields['proposal[description]'] = data.description
            
            this.fields._method = 'PUT'
        }
    },
    mounted() {
        this.updateDate()
        if(this.$route.query.zip) {
            this.fields['additional_info[from][zip]'] = this.$route.query.zip
        }
    },
    methods: {
        updateDate() {
            setTimeout(() => {
                this.fields['proposal[date_start]'] = this.$refs.datePicker.text
            })
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