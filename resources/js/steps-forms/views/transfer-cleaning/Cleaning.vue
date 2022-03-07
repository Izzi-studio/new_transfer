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
                            <p class="form-field__label">Reinigungstyp*</p>
                            <select v-model="fields['additional_info[cleaning]']" required>
                                <option value="Umzugsreinigung">Umzugsreinigung</option>
                                <option value="Fensterreinigung">Fensterreinigung</option>
                                <option value="Bodenreinigung">Bodenreinigung</option>
                                <option value="Baureinigung">Baureinigung</option>
                                <option value="Büroreinigung">Büroreinigung</option>
                                <option value="Unterhaltsreinigung">Unterhaltsreinigung</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4">
                        <div class="form-field">
                            <p class="form-field__label">Fenster</p>
                            <select v-model="fields['additional_info[windows]']">
                                <option value="">-</option>
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
                            <p class="form-field__label">Dusche /WC </p>
                            <select v-model="fields['additional_info[shower_wc]']">
                                <option value="">-</option>
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
                            <p class="form-field__label">BAD / WC *</p>
                            <select v-model="fields['additional_info[bath_wc]']">
                                <option value="">-</option>
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
                            <p class="form-field__label">WC * </p>
                            <select v-model="fields['additional_info[wc]']">
                                <option value="">-</option>
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
                            <p class="form-field__label">Bodentyp*</p>
                            <select v-model="fields['additional_info[soil_type]']">
                                <option value="">-</option>
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
                            <p class="form-field__label">Fenstergrösse *</p>
                            <select v-model="fields['additional_info[window_size]']">
                                <option value="">-</option>
                                <option value="Höhe 120cm Breite 60cm">Höhe 120cm Breite 60cm</option>
                                <option value="Höhe 120cm Breite 100cm">Höhe 120cm Breite 100cm</option>
                                <option value="Höhe 200cm Breite 60cm">Höhe 200cm Breite 60cm</option>
                                <option value="Höhe 200cm Breite 100cm">Höhe 200cm Breite 100cm</option>
                                <option value="Höhe 200cm Breite 180cm">Höhe 200cm Breite 180cm</option>
                            </select>
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
            'additional_info[cleaning]': '',
            'additional_info[windows]': '',
            'additional_info[shower_wc]': '',
            'additional_info[bath_wc]': '',
            'additional_info[wc]': '',
            'additional_info[soil_type]': '',
            'additional_info[window_size]': '',
        },
        fieldsGroupName: 'cleaning'
    }),
    computed: {
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