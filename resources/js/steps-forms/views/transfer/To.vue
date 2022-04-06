<template>
    <form @submit.prevent="formHandler" class="steps-form__form">
        <div class="row mt-5">
            <div class="col-xl-8">
                <button 
                    class="btn btn_theme_gray"
                    type="button"
                    @click="$store.commit('stepsForms/prevStep')"
                >
                    {{ trans('zurich') }}
                </button> 
                <div class="row">
                    <div class="col-md-6 mt-4">
                        <div class="form-field">
                            <p class="form-field__label">{{ trans('form-labels.region') }}*</p>
                            <select v-model="fields['additional_info[to][region_name]']" required>
                                <option
                                    v-for="region in regions"
                                    :key="region.name_region"
                                    :value="region.name_region"
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
                            v-model="fields['additional_info[to][zip]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.city') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.city') + '*'"
                            v-model="fields['additional_info[to][city]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.street') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.street') + '*'"
                            v-model="fields['additional_info[to][street]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.number')"
                            type="text"
                            :placeholder="trans('form-labels.number')"
                            v-model="fields['additional_info[to][number]']"
                        />
                    </div>
                </div>
                <h5 class="mt-5">{{ trans('form-labels.house_type') }}</h5>
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
                <h5 class="mt-5">{{ trans('form-labels.lift') }}</h5>
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
                            :label="trans('form-labels.floor') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.floor') + '*'"
                            v-model="fields['additional_info[to][floor]']"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.square') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.square') + '*'"
                            v-model="fields['additional_info[to][square]']"
                        />
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
            'additional_info[to][region_name]': '',
            'additional_info[to][zip]': '',
            'additional_info[to][city]': '',
            'additional_info[to][street]': '',
            'additional_info[to][number]': '',
            'additional_info[to][house_type]': 'Mehrfamilienhaus',
            'additional_info[to][lift]': 'Kein Lift',
            'additional_info[to][floor]': '',
            'additional_info[to][square]': '',
        },
    }),
    computed: {
        regions() {
            return this.$store.state.regions
        },
        isAuth() {
            return document.querySelector('body').dataset.isAuth == 'true'
        },
        initialData() {
            return this.$store.state.stepsForms.initialData
        }
    },
    watch: {
        initialData(data) {
            this.fields['additional_info[to][region_name]'] = data.additional_info.to.region_name
            this.fields['additional_info[to][zip]'] = data.additional_info.to.zip
            this.fields['additional_info[to][city]'] = data.additional_info.to.city
            this.fields['additional_info[to][street]'] = data.additional_info.to.street
            this.fields['additional_info[to][number]'] = data.additional_info.to.number
            this.fields['additional_info[to][house_type]'] = data.additional_info.to.house_type
            this.fields['additional_info[to][lift]'] = data.additional_info.to.lift
            this.fields['additional_info[to][floor]'] = data.additional_info.to.floor
            this.fields['additional_info[to][square]'] = data.additional_info.to.square
        }
    },
    methods: {
        formHandler() {
            this.$store.commit('stepsForms/setData', {
                key: this.$options._componentTag,
                data: {...this.fields}
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