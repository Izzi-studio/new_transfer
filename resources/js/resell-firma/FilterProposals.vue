<template>
    <form @submit.prevent="formHandler" class="profile-sidebar">
        <h4>{{trans('filter')}}</h4>
        <div class="form-field mt-3">
            <date-picker
                ref="datePicker"
                :clearable="false"
                format="YYYY-MM-DD"
                v-model="date"
                placeholder="Datum*"
            />
        </div>
        <multiselect
            v-model="type_job_id"
            :options="typesJobs.map(i => i.id)"
            :custom-label="id => customLabel(id, typesJobs)"
            :multiple="true"
            :searchable="false"
            :close-on-select="false"
            class="multiselect-checkboxes mt-3"
        >
            <template slot="selection" slot-scope="{ values }">
                <span class="multiselect__single">
                    {{trans('type-jobs')}} ({{ values.length }})
                </span>
            </template>
        </multiselect>
        <multiselect
            v-model="region_id"
            :options="regions.map(i => i.id)"
            :custom-label="id => customLabel(id, regions)"
            :multiple="true"
            :searchable="false"
            :close-on-select="false"
            class="multiselect-checkboxes mt-3"
        >
            <template slot="selection" slot-scope="{ values }">
                <span class="multiselect__single">
                    {{trans('regions')}} ({{ values.length }})
                </span>
            </template>
        </multiselect>
        <input class="mt-4" type="submit" :value="trans('search')">
    </form>
</template>
<script>
import Multiselect from 'vue-multiselect'

export default {
    data() {
        return {
            date: new Date(),
            type_job_id: [],
            region_id: []
        }
    },
    methods: {
        formHandler() {
            this.$emit('search', { 
                type_job_id: [...this.type_job_id],
                region_id: [...this.region_id],
                date: this.$refs.datePicker.text
            })
        },
        customLabel(id, arr) {
            return arr.filter(i => i.id === id)[0].name
        }
    },
    computed: {
        typesJobs() {
            return this.$store.state.typesJobs
        },
        regions() {
            return this.$store.state.regions
        },
    },
    mounted() {
        this.$store.dispatch('getTypeJobs')
        this.$store.dispatch('getRegions')
    },
    components: {
        Multiselect
    }
}
</script>