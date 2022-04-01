<template>
    <form @submit.prevent="$emit('search', fields)" class="profile-search">
        <input type="text" v-model="fields.search" :placeholder="trans('search')">
        <div class="row">
            <div class="col-md-4 mt-4">
                <select v-model="fields.year">
                    <option value="" selected>{{trans('choose-year')}}</option>
                    <option :value="new Date().getFullYear()">{{ new Date().getFullYear() }}</option>
                    <option :value="new Date().getFullYear() + 1">{{ new Date().getFullYear() + 1 }}</option>
                    <option :value="new Date().getFullYear() + 2">{{ new Date().getFullYear() + 2 }}</option>
                </select>
            </div>
            <div class="col-md-4 mt-4">
                <select v-model="fields.month">
                    <option value="" selected>{{trans('choose-month')}}</option>
                    <option value="1">{{trans('january')}}</option>
                    <option value="2">{{trans('february')}}</option>
                    <option value="3">{{trans('march')}}</option>
                    <option value="4">{{trans('april')}}</option>
                    <option value="5">{{trans('may')}}</option>
                    <option value="6">{{trans('june')}}</option>
                    <option value="7">{{trans('july')}}</option>
                    <option value="8">{{trans('august')}}</option>
                    <option value="9">{{trans('september')}}</option>
                    <option value="10">{{trans('october')}}</option>
                    <option value="11">{{trans('november')}}</option>
                    <option value="12">{{trans('december')}}</option>
                </select>
            </div>
            <div class="col-md-4 mt-4 d-flex justify-content-end">
                <input type="submit" :value="trans('search')">
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            fields: {
                year: '',
                month: '',
                search: ''
            }
        }
    },
}
</script>