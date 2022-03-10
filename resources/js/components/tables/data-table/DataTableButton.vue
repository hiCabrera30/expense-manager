<template>
    <a v-if="this.href || this.route" :href="link" class="table-toolbar-item">
        <i :class="icon"></i><span v-if="text" class="pl-1" v-text="text"></span>
    </a>
    <a v-else href="#" @click.prevent="click" class="table-toolbar-item">
        <i :class="icon"></i><span v-if="text" class="pl-1" v-text="text"></span>
    </a>
</template>
<script>
export default {
    name: 'DataTableButton',
    computed: {
        link() {
            if (this.href || this.route) {
                return this.href || route(this.route, this.params);
            }

            return '#';
        }
    },

    methods: {
        click() {
            if (this.href || this.route) {
                return window.href = this.href || route(this.route, this.params);
            } 
            
            this.$emit('click', { data: this.payload });
        }
    },

    props: {
        href: String,
        route: String,
        params: {
            type: Array|Object|String|Number,
            default: () => ({})
        },
        icon: String,
        label: String,
        text: String,
        payload: Object | Array | String | Number | Boolean,
    },
}
</script>