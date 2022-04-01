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
                            <p class="form-field__label">{{ trans('form-labels.windows') }}</p>
                            <select required v-model="fields['additional_info[windows]']">
                                <option value="" disabled hidden>-</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5-7">5-7</option>
                                <option value="8-10">8-10</option>
                                <option value="11-15">11-15</option>
                                <option value="16-20">16-20</option>
                                <option value="21-30">21-30</option>
                                <option value="31-50">31-50</option>
                                <option value="50+">mehr als 50</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4">
                        <div class="form-field">
                            <p class="form-field__label">{{ trans('form-labels.shower_wc') }}</p>
                            <select required v-model="fields['additional_info[shower_wc]']">
                                <option value="" disabled hidden>-</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4">
                        <div class="form-field">
                            <p class="form-field__label">{{ trans('form-labels.bath_wc') }}</p>
                            <select required v-model="fields['additional_info[bath_wc]']">
                                <option value="" disabled hidden>-</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4">
                        <div class="form-field">
                            <p class="form-field__label">{{ trans('form-labels.wc') }}</p>
                            <select required v-model="fields['additional_info[wc]']">
                                <option value="" disabled hidden>-</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4">
                        <div class="form-field">
                            <p class="form-field__label">{{ trans('form-labels.soil_type') }}</p>
                            <select required v-model="fields['additional_info[soil_type]']">
                                <option value="" disabled hidden>-</option>
                                <option value="Parkett">Parkett</option>
                                <option value="Laminat">Laminat</option>
                                <option value="Linoleum">Linoleum</option>
                                <option value="Teppich">Teppich</option>
                                <option value="Plättli">Plättli</option>
                                <option value="Diverse">Diverse</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4">
                        <div class="form-field">
                            <p class="form-field__label">{{ trans('form-labels.window_size') }}</p>
                            <select required v-model="fields['additional_info[window_size]']">
                                <option value="" disabled hidden>-</option>
                                <option value="Höhe 120cm Breite 60cm">Höhe 120cm Breite 60cm</option>
                                <option value="Höhe 120cm Breite 100cm">Höhe 120cm Breite 100cm</option>
                                <option value="Höhe 200cm Breite 60cm">Höhe 200cm Breite 60cm</option>
                                <option value="Höhe 200cm Breite 100cm">Höhe 200cm Breite 100cm</option>
                                <option value="Höhe 200cm Breite 180cm">Höhe 200cm Breite 180cm</option>
                            </select>
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
            'additional_info[windows]': '',
            'additional_info[shower_wc]': '',
            'additional_info[bath_wc]': '',
            'additional_info[wc]': '',
            'additional_info[soil_type]': '',
            'additional_info[window_size]': '',
        },
        fieldsGroupName: 'number'
    }),
    computed: {
        isAuth() {
            return document.querySelector('body').dataset.isAuth == 'true'
        },
        initialData() {
            return this.$store.state.stepsForms.initialData
        }
    },
    watch: {
        initialData(data) {
            this.fields['additional_info[windows]'] = data.additional_info.windows
            this.fields['additional_info[shower_wc]'] = data.additional_info.shower_wc
            this.fields['additional_info[bath_wc]'] = data.additional_info.bath_wc
            this.fields['additional_info[wc]'] = data.additional_info.wc
            this.fields['additional_info[soil_type]'] = data.additional_info.soil_type
            this.fields['additional_info[window_size]'] = data.additional_info.window_size
        }
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