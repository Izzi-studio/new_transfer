<template>
    <form @submit.prevent="formHandler" @input="isSended = false" class="steps-form__form">
        <div class="row mt-5">
            <div class="col-xl-8">
                <button 
                    class="btn btn_theme_gray"
                    type="button"
                    @click="$store.commit('stepsForms/prevStep')"
                >
                    Zurück
                </button>            
                <h5 class="mt-5">Wählen Sie Ihre Gebiete*:</h5>
                <div class="row">
                    <div 
                        v-for="region in regions"
                        :key="region.id"
                        class="col-md-4 mt-4"
                    >
                        <form-checkbox
                            v-model="fields['regions_ids[]']"
                            :val="region.id"
                            :label="region.name"
                        />
                    </div>
                </div>
                <p v-show="!isSelectedCheckboxes && isSended" class="text-danger mt-3">Bitte wählen Sie etwas aus der Liste aus!</p>
                
                <div class="d-flex mt-4">
                    <button 
                        class="btn" 
                        type="button" 
                        @click="selectAll"
                    >
                        Alle wählen!
                    </button>
                    <button class="btn mx-4">Bereit!</button>
                </div>
            </div>
        </div>
    </form>
</template>
<script>
export default {
    data: () => ({
        fields: {
            'regions_ids[]': [],
        },
        fieldsGroupName: 'regions',
        isSended: false
    }),
    computed: {
        isSelectedCheckboxes() {
            return this.fields['regions_ids[]'].length ? true : false
        },
        regions() {
            return this.$store.state.regions
        }
    },
    methods: {
        selectAll() {
            this.fields['regions_ids[]'] = []
            this.fields['regions_ids[]'] = this.regions.map(i => i.id)
        },
        formHandler() {
            this.isSended = true
            if(this.isSelectedCheckboxes) {
                this.$store.commit('stepsForms/setData', {
                    key: this.fieldsGroupName,
                    data: this.fields
                })
                
                this.$store.dispatch('stepsForms/sendData')
            }
        }
    }
}
</script>