<template>
    <form
        v-if="fields" 
        :class="{'opacity-50 pe-none': isUpdate}" 
        @input="isSended = false"
        @submit.prevent="formHandler"
    >   
        <h4 class="d-block d-lg-none mb-3">Info</h4>
        <label class="form-photo">
            <input 
                @change="updateAvatar" 
                type="file" 
                accept="image/*"
            >
            <img class="form-photo__img" :src="avatarUrl" alt="">
            <p class="form-photo__label">FOTO ÄNDERN</p>
        </label>
        <div class="row">
            <div class="col-sm-6 mt-4">
                <form-field
                    label="Firma*"
                    type="text"
                    required
                    placeholder="Firma*"
                    v-model="fields.company"
                />
            </div>
            <div class="col-sm-6 mt-4">
                <form-field
                    label="Telefon*"
                    type="text"
                    required
                    placeholder="Telefon*"
                    v-model="fields.phone"
                />
            </div>
            <div class="col-sm-6 mt-4">
                <form-field
                    label="Vorname*"
                    type="text"
                    required
                    placeholder="Vorname*"
                    v-model="fields.name"
                />
            </div>
            <div class="col-sm-6 mt-4">
                <form-field
                    label="Nachname*"
                    type="text"
                    required
                    placeholder="Nachname*"
                    v-model="fields.lastname"
                />
            </div>
            <div class="col-sm-6 mt-4">
                <form-field
                    :label="trans('form-labels.postcode') + '*'"
                    type="number"
                    required
                    :placeholder="trans('form-labels.postcode') + '*'"
                    v-model="fields.postcode"
                />
            </div>
            <div class="col-sm-6 mt-4">
                <form-field
                    label="Ort*"
                    type="text"
                    required
                    placeholder="Ort*"
                    v-model="fields.city"
                />
            </div>
            <div class="col-sm-6 mt-4">
                <form-field
                    label="Strasse*"
                    type="text"
                    required
                    placeholder="Strasse*"
                    v-model="fields.street"
                />
            </div>
            <div class="col-sm-6 mt-4">
                <form-field
                    label="Hausnummer*"
                    type="text"
                    required
                    placeholder="Hausnummer*"
                    v-model="fields.house"
                />
            </div>
        </div>
        <!--  -->
        <div class="row">
            <div 
                v-for="typesJob in typesJobs"
                :key="typesJob.id"
                class="col-md-4 mt-4"
            >
                <form-checkbox
                    v-model="fields['type_jobs_partners[]']"
                    :val="typesJob.id"
                    :label="typesJob.name"
                />
            </div>
        </div>
        <p v-show="!fields['type_jobs_partners[]'].length && isSended" class="text-danger mt-3">{{ trans('err-empty-list') }}</p>
        <h5 class="mt-5">Wählen Sie Ihre Gebiete</h5>
        <div class="row">
            <div 
                v-for="region in regions"
                :key="region.id"
                class="col-md-4 mt-4"
            >
                <form-checkbox
                    v-model="fields['regions_partners[]']"
                    :val="region.id"
                    :label="region.name"
                />
            </div>
        </div>
        <p v-show="!fields['regions_partners[]'].length && isSended" class="text-danger mt-3">{{ trans('err-empty-list') }}</p>
        <!--  -->
        <input class="mt-4" type="submit" value="Speichern">
    </form>
</template>
<script>
export default {
    data: () => ({
        fields: null,
        avatarUrl: '',
        isUpdate: false,
        isSended: false
    }),
    methods: {
        formHandler() {
            this.isSended = true
            if(!this.isSelectedCheckboxes) return

            this.isUpdate = true

            const formData = new FormData()

            for(let key in this.fields) {
                if(key === 'avatar') {
                    if(!this.fields[key]) continue
                }

                if (Array.isArray(this.fields[key])) {
                    for (let item in this.fields[key]) {
                        formData.append(key, this.fields[key][item])
                    }
                } else {
                    formData.append(key, this.fields[key])
                }
            }

            formData.append('_method', 'PUT')

            axios({
                method: "POST",
                url: '/api/front/partner',
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(() => {
                    this.isUpdate = false
                    toastr.success("Informationen aktualisiert");
                })
        },
        updateAvatar(e) {
            this.fields.avatar = e.target.files[0];
            this.avatarUrl = URL.createObjectURL(e.target.files[0]);
        }
    },
    computed: {
        typesJobs() {
            return this.$store.state.typesJobs
        },
        regions() {
            return this.$store.state.regions
        },
        isSelectedCheckboxes() {
            return Boolean(this.fields['type_jobs_partners[]'].length && this.fields['regions_partners[]'].length)
        }
    },
    mounted() {
        this.$store.dispatch('getTypeJobs')
        this.$store.dispatch('getRegions')

        axios.get('/api/front/partner')
            .then(({ data }) => {
                data.data['regions_partners[]'] = data.data.regions_partners.map(i => {
                    return i.region_id
                })
                delete data.data.regions_partners

                data.data['type_jobs_partners[]'] = data.data.type_jobs_partners.map(i => {
                    return i.type_job_id
                })
                delete data.data.type_jobs_partners

                this.fields = data.data

                if(this.fields.avatar) {
                    this.avatarUrl = this.fields.avatar
                } else {
                    this.avatarUrl = '/images/default-avatar.png'
                }
                this.fields.avatar = ""

                toastr.success("Informationen geladen");
            })
    }
}
</script>
