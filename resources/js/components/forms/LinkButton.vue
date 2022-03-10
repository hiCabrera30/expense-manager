<template>
    <a :id="id" :href="link" ref="button">
        <div v-if="tooltip">
            <tooltip-badge :label="tooltip" placement="left">
                <slot></slot>
            </tooltip-badge>
        </div>
        <div v-else>
                <slot></slot>
        </div>
    </a>
</template>
<script>

export default {
    name: 'LinkButton',
    computed: {
        id() {
            return `link-button-${ this._uid }`;
        },

        link() {
            return route(this.route, this.params)
        }
    },
    props: {
        route: String,
        params: [String, Object, Number, Array],
        tooltip: String
    },
}
</script>