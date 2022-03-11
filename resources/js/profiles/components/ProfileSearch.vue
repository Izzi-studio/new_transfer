<template>
    <form @submit.prevent="$emit('search', fields)" class="profile-search">
        <input type="text" v-model="fields.search" placeholder="Suchen">
        <div class="row">
            <div class="col-md-4 mt-4">
                <select v-model="fields.year">
                    <option value="" selected>Jahr wählen</option>
                    <option :value="new Date().getFullYear()">{{ new Date().getFullYear() }}</option>
                    <option :value="new Date().getFullYear() + 1">{{ new Date().getFullYear() + 1 }}</option>
                    <option :value="new Date().getFullYear() + 2">{{ new Date().getFullYear() + 2 }}</option>
                </select>
            </div>
            <div class="col-md-4 mt-4">
                <select v-model="fields.month">
                    <option value="" selected>Monat wählen</option>
                    <option value="1">Januar</option>
                    <option value="2">Februar</option>
                    <option value="3">März</option>
                    <option value="4">April</option>
                    <option value="5">Mai</option>
                    <option value="6">Juni</option>
                    <option value="7">Juli</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">Oktober</option>
                    <option value="11">November</option>
                    <option value="12">Dezember</option>
                </select>
            </div>
            <div class="col-md-4 mt-4 d-flex justify-content-end">
                <input type="submit" value="Suchen">
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