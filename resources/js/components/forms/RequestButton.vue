<template>
    <button :id="id" type="button"  aria-label="" class="btn" @click="send">
        <slot></slot>
    </button>
</template>
<script>
import { promptSuccess, promptErrors } from "utils/prompts";

export default {
    name: 'RequestButton',
    computed: {
        id() {
            return `request-button-${ this._uid }`;
        },

        type() {
            let type = this.method
                ? this.method.toLowerCase()
                : "get";

            return this.requestTypes.indexOf(type) >= 0 ? type : "get";
        },

        url() {
            return this.action || route(this.routeName, this.routeParameters);
        },
    },
    data: () => ({
        requestTypes: [ 'get', 'post', 'put', 'patch', 'delete' ],
    }),

    methods: {

        async send() {
            if (this.confirmationFunction != null) {
                let confirmed = this.confirmationFunctionAsync
                    ? await this.confirmationFunction()
                    : this.confirmationFunction();
                if (!confirmed) {
                    return;
                }
            } else if (this.confirmation && !this.confirm(this.confirmation)) {
                return;
            }
            axios({ method: this.type, url: this.url, data: this.data })
                .then(response => this.success(response))
                .catch(error => this.error(error))
        },

        success(response) {
            promptSuccess(response.data.message, null, {
                onClose: () => this.$emit('success', response)
            });
        },

        error(error) {
            promptErrors(error.response.data.message);
            this.$emit('error', error);
        }

    },

    props: {
        action: String,
        routeName: String,
        routeParameters: String|Number|Object|Array,
        data: {
            type: Object|Number|String|Array,
            default: () => ({}),
        },
        confirmation: String,
        confirmationFunction: Function,
        confirmationFunctionAsync: {
            type: Boolean,
            default: false,
        },
        method: String,
        tooltip: String,
    },
}
</script>