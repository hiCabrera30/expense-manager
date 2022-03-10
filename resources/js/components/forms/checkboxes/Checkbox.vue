<template>
    <div class="custom-control custom-checkbox">
        <input class="custom-control-input" type="checkbox"
            :id="id"
            :value="val"
            v-model="checked"
            :disabled="disabled"
            ref="input"
            @change="change"
        />
        <label class="custom-control-label" :for="id" v-text="label"></label>
    </div>
</template>
<script>
export default {
    name: 'Checkbox',
    computed: {
        id() {
            return `checkbox-${ this._uid }`;
        },
        checked: {
            get() {
                return this.value
            },
            set(value) {
                this.proxy = value;
            }
        }
    },

    data() {
        return {
            proxy: this.default,
        }
    },

    methods: {
        change(event) {
            this.$emit("change", this.proxy);
            this.$emit("input", this.proxy);
        },
    },
    watch: {
        disabled(newVal) {
            return this.$emit("disable-changed", newVal);
        }
    },

    props: {
        default: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        label: { type: String, },
        val: { type: [String, Number] },
        value: { type: [String, Number, Boolean, Array] },
    }
}
</script>