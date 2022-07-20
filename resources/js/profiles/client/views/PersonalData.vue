<template>
    <form
        v-if="fields" 
        :class="{'opacity-50 pe-none': isUpdate}" 
        @submit.prevent="formHandler"
    >   
        <h4 class="d-block d-lg-none mb-3">{{trans('info')}}</h4>
        <label class="form-photo">
            <input 
                @change="updateAvatar" 
                type="file" 
                accept="image/*"
            >
            <img class="form-photo__img" :src="avatarUrl" alt="">
            <p class="form-photo__label">{{trans('change-photo')}}</p>
        </label>
        <div class="row">
            <div class="col-sm-6 mt-4">
                <form-field
                    :label="trans('form-labels.name') + '*'"
                    type="text"
                    required
                    :placeholder="trans('form-labels.name') + '*'"
                    v-model="fields.name"
                />
            </div>
            <div class="col-sm-6 mt-4">
                <form-field
                    :label="trans('form-labels.lastname') + '*'"
                    type="text"
                    required
                    :placeholder="trans('form-labels.lastname') + '*'"
                    v-model="fields.lastname"
                />
            </div>
            <div class="col-sm-6 mt-4">
                <form-field
                    :label="trans('form-labels.phone') + '*'"
                    type="text"
                    required
                    :placeholder="trans('form-labels.phone') + '*'"
                    v-model="fields.phone"
                />
            </div>
            <div class="col-sm-6 mt-4">
                <form-field
                    :label="trans('form-labels.availability') + '*'"
                    type="text"
                    required
                    :placeholder="trans('form-labels.availability') + '*'"
                    v-model="fields.availability"
                />
            </div>
        </div>
        <input class="mt-4" type="submit" :value="trans('save')">
    </form>
</template>
<script>
export default {
    data: () => ({
        fields: null,
        avatarUrl: '',
        isUpdate: false,
    }),
    methods: {
        formHandler() {
            this.isUpdate = true

            const formData = new FormData()

            for(let key in this.fields) {
                if(key === 'avatar') {
                    if(!this.fields[key]) continue
                }

                formData.append(key, this.fields[key])
            }

            formData.append('_method', 'PUT')

            axios({
                method: "POST",
                url: '/api/front/client',
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(() => {
                    this.isUpdate = false
                })
        },
        updateAvatar(e) {
            this.fields.avatar = e.target.files[0];
            this.avatarUrl = URL.createObjectURL(e.target.files[0]);
        }
    },
    mounted() {
        axios.get('/api/front/client')
            .then(({ data }) => {
                this.fields = data.data

                if(this.fields.avatar) {
                    this.avatarUrl = this.fields.avatar
                } else {
                    this.avatarUrl = '/images/default-avatar.webp'
                }
                this.fields.avatar = ""
            })
    }
}
</script>
