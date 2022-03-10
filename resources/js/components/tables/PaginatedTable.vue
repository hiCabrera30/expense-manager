<template>
    <div>
        <data-table ref="table"
            :searchable="searchable"
            :title="title"
            :fetch-link="fetchLink"
            :paginate-path="paginatePath"
            :initial-filters="initialFilters"
            @pageloaded="pageLoaded"
            :selectable="selectable">
            <template slot="toolbar">
                <button v-if="$refs.table && $refs.table.hasSelected" @click="destroy" type="button" class="btn btn-danger btn-sm btn-rounded">
                    <i class="fa fa-trash mr-1"></i> Delete
                </button>
                <data-table-button v-if="filtered"
                    @click="openFilterModal"
                    icon="fa fa-filter" text="Filters"
                    label="Filter">
                </data-table-button>
                <slot name="search-toolbar" :mixins="self" :table="$refs.table"></slot>
            </template>
            <template slot="thead">
                <slot name="head"></slot>
            </template>
            <template slot="tbody" slot-scope="props">
                <slot name="body" :record="props.record" :table="props.table" :refresh-page="props.refreshPage"></slot>
            </template>
            <template slot="forms" slot-scope="props">
                <slot name="table-forms" :table="props.table"></slot>
            </template>
        </data-table>
        
        <modal v-if="filtered" v-model="filterModalShown" title="Filters" @hidden="hideFilterModal" ref="filterModal" :small="filterModalSmall">
            <div v-if="filterModalShown" class="mt--4 row text-left">
                <slot name="filters" :mixins="self" :refresh-page="$refs.table.refreshPage" :filters="filters"></slot>
            </div>
            <template slot="footer">
                <button button="button" @click="applyFilter" class="btn btn-warning btn-rounded">
                    <i class="fa fa-check pr-1"></i>
                    Apply
                </button>
                <!-- <button button="button" @click="resetFilters" class="btn btn-danger btn-rounded">
                    <i class="fa fa-undo pr-1"></i>
                    Reset
                </button> -->
            </template>
        </modal>
    </div>
</template>
<script>
import DataTable from "./data-table/DataTable";

export default {
    name: "PaginatedTable",

    components: { DataTable },

    computed: {
        hasSelected() {
            return this.$refs.table && this.$refs.table.hasSelected
        },

        fetchParameters() {
            return {
                filters: JSON.stringify(this.filters),
                search: this.$refs.table.search,
            }
        },

        dataTable() {
            return this.$refs.table;
        },
    },

    data: () => ({
        filterModalShown: false,
        appliedFilters: {},
        filters: {},
        self: {},
    }),

    methods: {
        destroy() {
            const params = {
                items: this.$refs.table.selectedData
            };
            axios(this.deleteLink, { method: "delete", params })
                .then(response => console.log("success", response))
                .catch(error => console.log("failed", error))
                .finally(() => this.fetching = false);
        },

        pageLoaded(...params) {
            this.$emit("pageloaded", params);
        },

        openFilterModal() {
            this.filterModalShown = true;
        },

        hideFilterModal(e) {
            if (e.target.id != this.$refs.filterModal.id) {
                return;
            }
            this.filterModalShown = false;
        },

        resetFilters(fresh = false) {
            if (fresh === true) {
                this.appliedFilters = {...this.initialFilters};
            }

            this.filters = {...this.appliedFilters };
            this.$refs.table.filters = {...this.appliedFilters };
        },

        applyFilter() {
            this.appliedFilters = {...this.filters};
            this.$refs.table.filters = {...this.appliedFilters };
            this.filterModalShown = false;
            this.$refs.table.gotToPage(1);
        }
    },

    props: {
        filterModalSmall: {
            type: Boolean,
            default: false,
        },
        fetchLink: String,
        deleteLink: String,
        title: String,
        paginatePath: String,
        selectable: { type: Boolean, default: false },
        filtered: { type: Boolean, default: false },
        searchable: { type: Boolean, default: true },
        initialFilters: { type: Array|Object, default: () => ({}) },
    },

    mounted() {
        this.self = this;
        this.resetFilters(true);
    }

}
</script>