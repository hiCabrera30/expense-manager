<template>
    <th @click="click" class="sortable-header">
        <slot></slot>
        <i v-if="state == 1" class="fa fa-angle-down ml-1"></i>
        <i v-else-if="state == 2" class="fa fa-angle-up ml-1"></i>
    </th>
</template>

<script>
export default {
    name: "DataTableHeader",

    computed: {
        id() {
            return `data-table-header-${ this._uid}`
        },
        sortType() {
            switch (this.state) {
                case 1: return "asc";
                case 2: return "desc";
                default: return null;
            }
        }
    },

    data: () => ({
        state: 0,
    }),

    methods: {
        click() {
            this.state = (this.state + 1) % 3;
            this.$parent.$emit("sort-changed", this.id);
            this.$parent.reorderSort({
                name: this.name,
                type: this.sortType,
            })
        },

        sortChanged(componentId) {
            if (componentId === this.id) return;

            this.state = 0;
        }
    },

    props: {
        name: String,
    },

    mounted() {
        this.$parent.$on("sort-changed", this.sortChanged);
    }
}
</script>