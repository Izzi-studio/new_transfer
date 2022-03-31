<template>
    <form @submit.prevent="formHandler" class="steps-form__form">
        <div class="row">
            <div class="col-xl-7">
                <div class="row">
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.name') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.name') + '*'"
                            v-model="fields.name"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.lastname') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.lastname') + '*'"
                            v-model="fields.lastname"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.postcode') + '*'"
                            type="number"
                            required
                            :placeholder="trans('form-labels.postcode') + '*'"
                            v-model="fields.postcode"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.city') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.city') + '*'"
                            v-model="fields.city"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.street') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.street') + '*'"
                            v-model="fields.street"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.house') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.house') + '*'"
                            v-model="fields.house"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.email') + '*'"
                            type="email"
                            required
                            :placeholder="trans('form-labels.email') + '*'"
                            v-model="fields.email"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.phone') + '*'"
                            type="tel"
                            required
                            :placeholder="trans('form-labels.phone') + '*'"
                            v-model="fields.phone"
                        />
                    </div>
                    <div class="col-md-6 mt-4">
                        <form-field
                            :label="trans('form-labels.company') + '*'"
                            type="text"
                            required
                            :placeholder="trans('form-labels.company') + '*'"
                            v-model="fields.company"
                        />
                    </div>
                    <div class="col-md-6 mt-4 d-flex align-items-end">
                        <label class="form-file">
                            <input 
                                type="file"
                                @change="processFile($event)"
                            >
                            <p class="form-file__label">{{ fileName }}</p>
                        </label>
                    </div>
                    <div class="col-md-6 mt-4">
                        <button class="btn btn_width_max">{{ trans('partner-general-data-btn') }}</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
<script>
export default {
    data: () => ({
        fields: {
            name: '',
            lastname: '',
            postcode: '',
            city: '',
            street: '',
            house: '',
            email: '',
            phone: '',
            company: '',
            upload_file: null,
        },
        fieldsGroupName: 'generalData'
    }),
    computed: {
        fileName() {
            return (this.fields.upload_file && this.fields.upload_file.name) || this.trans('form-labels.upload-file')
        }
    },
    methods: {
        processFile(e) {
            this.fields.upload_file = e.target.files[0] 
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