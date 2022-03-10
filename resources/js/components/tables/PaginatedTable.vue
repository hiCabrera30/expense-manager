<template>
    <div>
        <data-table ref="table"
            :searchable="false"
            :title="title"
            :fetch-link="fetchLink"
            :paginate-path="paginatePath"
            @pageloaded="pageLoaded"
            :selectable="false">
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

        dataTable() {
            return this.$refs.table;
        },
    },

    data: () => ({
        self: {},
    }),

    methods: {

        pageLoaded(...params) {
            this.$emit("pageloaded", params);
        },
    },

    props: {
        fetchLink: String,
        title: String,
        paginatePath: String,
    },

    mounted() {
        this.self = this;
    }

}
</script>