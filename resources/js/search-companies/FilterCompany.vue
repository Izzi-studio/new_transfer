<template>
    <div class="filter-companies">
        <h4 class="filter-companies__title">Filtern</h4>
        <form @submit.prevent="formHandler" class="filter-companies__form">
            <div class="row">
                <div class="col-md-4">
                    <multiselect
                        v-model="type_job_id"
                        :options="typesJobs.map(i => i.id)"
                        :custom-label="id => customLabel(id, typesJobs)"
                        :multiple="true"
                        :searchable="false"
                        :close-on-select="false"
                        class="multiselect-checkboxes"
                    >
                        <template slot="selection" slot-scope="{ values }">
                            <span class="multiselect__single">
                                Art von Arbeit ({{ values.length }})
                            </span>
                        </template>
                    </multiselect>
                </div>
                <div class="col-md-4 mt-3 mt-md-0">
                    <multiselect
                        v-model="region_id"
                        :options="regions.map(i => i.id)"
                        :custom-label="id => customLabel(id, regions)"
                        :multiple="true"
                        :searchable="false"
                        :close-on-select="false"
                        class="multiselect-checkboxes"
                    >
                        <template slot="selection" slot-scope="{ values }">
                            <span class="multiselect__single">
                                Kanton ({{ values.length }})
                            </span>
                        </template>
                    </multiselect>
                </div>
                <div class="col-md-4 mt-3 mt-md-0">
                    <input type="submit" value="Senden">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
    data() {
        return {
            type_job_id: [],
            region_id: []
        }
    },
    methods: {
        formHandler() {
            this.$emit('search', { 
                type_job_id: [...this.type_job_id],
                region_id: [...this.region_id]
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