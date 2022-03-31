<template>
    <form @submit.prevent="formHandler" class="steps-form__form">
        <div class="row">
            <div class="col-xl-8">
                <div class="row">
                    <div class="col-md-6 mt-4">
                        <div class="form-field">
                            <p class="form-field__label">{{ trans('form-labels.region') }}*</p>
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
                            :label="trans('form-labels.postcode') + '*'"
                            type="number"
                            required
                            :placeholder="trans('form-labels.postcode') + '*'"
                            v-model="fields['additional_info[from][zip]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.city') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.city') + '*'"
                            v-model="fields['additional_info[from][city]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.street') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.street') + '*'"
                            v-model="fields['additional_info[from][street]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.number')"
                            type="text"
                            :placeholder="trans('form-labels.number')"
                            v-model="fields['additional_info[from][number]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <div class="form-field">
                            <p class="form-field__label">{{ trans('form-labels.date_start') }}*</p>
                            <date-picker
                                ref="datePicker"
                                :clearable="false"
                                format="YYYY-MM-DD"
                                v-model="date"
                            />
                        </div>
                    </div>
                    <div v-if="isPartner" class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.price') + '*'"
                            type="number"
                            required
                            :placeholder="trans('form-labels.price') + '*'"
                            v-model="fields['proposal[price]']"
                        />
                    </div>
                </div>
                <h5 class="mt-5">{{ trans('form-labels.dayrange') }}:</h5>
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
                <h5 class="mt-5">{{ trans('form-labels.house_type') }}</h5>
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
                <h5 class="mt-5">{{ trans('form-labels.lift') }}</h5>
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
                            :label="trans('form-labels.floor') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.floor') + '*'"
                            v-model="fields['additional_info[from][floor]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.rooms') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.rooms') + '*'"
                            v-model="fields['additional_info[from][rooms]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.square') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.square') + '*'"
                            v-model="fields['additional_info[from][square]']"
                        />
                    </div>
                </div>
                <h5 class="mt-5">{{ trans('form-labels.other') }}</h5>
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
                            <p class="form-field__label">{{ trans('form-labels.description') }}</p>
                            <textarea v-model="fields['proposal[description]']" :placeholder="trans('form-labels.description')"></textarea>
                        </div>
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
            'proposal[type_job_id]': '1',
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
        },
        isAuth() {
            return document.querySelector('body').dataset.isAuth == 'true'
        },
        isPartner() {
            if(this.isAuth) {
                return document.querySelector('body').dataset.userAuth == 'partner'
            } else {
                return false
            }
        },
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

        if(this.isPartner) {
            this.$set(this.fields, 'proposal[price]', '')
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