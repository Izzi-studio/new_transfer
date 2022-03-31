<template>
    <form @submit.prevent="formHandler" @input="isSended = false" class="steps-form__form">
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
                            v-model="fields['additional_info[zip]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.city') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.city') + '*'"
                            v-model="fields['additional_info[city]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.street') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.street') + '*'"
                            v-model="fields['additional_info[street]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.number')"
                            type="text"
                            :placeholder="trans('form-labels.number')"
                            v-model="fields['additional_info[number]']"
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
                <h5 class="mt-5">{{ trans('form-labels.work_should_be_done') }}</h5>
                <div class="row">
                    <div class="col-md-6 mt-4">
                        <form-checkbox
                            v-model="fields['additional_info[work_should_be_done][]']"
                            val="Möbel"
                            label="Möbel"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-checkbox
                            v-model="fields['additional_info[work_should_be_done][]']"
                            val="Haustüre"
                            label="Haustüre"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-checkbox
                            v-model="fields['additional_info[work_should_be_done][]']"
                            val="Decke"
                            label="Decke"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-checkbox
                            v-model="fields['additional_info[work_should_be_done][]']"
                            val="Zimmertüre"
                            label="Zimmertüre"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-checkbox
                            v-model="fields['additional_info[work_should_be_done][]']"
                            val="Küche"
                            label="Küche"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-checkbox
                            v-model="fields['additional_info[work_should_be_done][]']"
                            val="Weitere"
                            label="Weitere"
                        />
                    </div>
                </div>
                <p v-show="!isSelectedCheckboxes && isSended" class="text-danger mt-3">{{ trans('err-empty-list') }}</p>
                <h5 class="mt-5">{{ trans('form-labels.dayrange') }}</h5>
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
            'additional_info[zip]': '',
            'additional_info[city]': '',
            'additional_info[street]': '',
            'proposal[region_id]': '',
            'additional_info[number]': '',
            'additional_info[work_should_be_done][]': [],
            'proposal[date_start]': '',
            'additional_info[dayrange]': 'Nicht Flexibel',
            'proposal[description]': '',
            'proposal[type_job_id]': '9',
        },
        isSended: false,
        fieldsGroupName: 'desc-work',
        date: new Date()
    }),
    computed: {
        regions() {
            return this.$store.state.regions
        },
        isSelectedCheckboxes() {
            return this.fields['additional_info[work_should_be_done][]'].length ? true : false
        },
        isAuth() {
            return document.querySelector('body').dataset.isAuth == 'true'
        },
        initialData() {
            return this.$store.state.stepsForms.initialData
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
            this.fields['additional_info[zip]'] = data.additional_info.zip
            this.fields['additional_info[city]'] = data.additional_info.city
            this.fields['additional_info[street]'] = data.additional_info.street
            this.fields['proposal[region_id]'] = data.region_id
            this.fields['additional_info[number]'] = data.additional_info.number
            this.fields['additional_info[work_should_be_done][]'] = data.additional_info.work_should_be_done
            this.date = this.globalGetDate(data.date_start)
            this.fields['additional_info[dayrange]'] = data.additional_info.dayrange
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