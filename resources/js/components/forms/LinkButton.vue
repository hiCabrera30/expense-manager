<template>
    <a :id="id"
        :href="link"
        ref="button" 
        @click.prevent="click">
        <slot></slot>
    </a>
</template>
<script>
import { bus }  from 'src/utils/bus';

export default {
    name: 'LinkButton',
    computed: {
        id() {
            return `link-button-${ this._uid }`;
        },

        isLink() {
            return this.route;
        },

        link() {
            return this.isLink ? route(this.route, this.params) : "#"
        },
    },
    methods: {
        click() {
            this.isLink
                ? window.location = this.link
                : bus.$emit(this.emit, this.params);
        },
    },
    props: {
        emit: String,
        route: String,
        params: [String, Object, Number, Array],
    },
}
</script>