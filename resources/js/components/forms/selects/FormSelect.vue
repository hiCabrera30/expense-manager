<template>
    <div :class="styleClass.formGroup">
        <label v-if="label" :for="id" class="form-control-label ucwords" v-text="label"></label>
        <multiselect :id="id"
            ref="multiselect"
            v-model="data"
            :placeholder="placeholder"
            :options="options"
            :searchable="searchable"
            :max-height="150"
            @select="onChange"
            @remove="onRemove"
            :custom-label="displayedValue"
            :allow-empty="allowEmpty"
            :show-labels="showLabels"
            :deselect-label="deselectLabel"
            :select-label="''"
            :multiple="multiple"
            :disabled="disabled"
        >
            <template slot="singleLabel" slot-scope="{ option }">
                <slot name="displayedValue" :option="option">
                    <span class="option__title" v-text="displayedValue(option)"></span>
                </slot>
            </template>
            
        </multiselect>
        <span v-if="hasError" class="text-danger" v-text="errorMessage"></span>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect';
import Error from "models/components/Error.js";

export default {
    name: 'FormSelect',
    components: { Multiselect },

    computed: {

        deselectLabel() {
            return this.allowEmpty ? "Remove" : "";
        },
        id() {
            return `form-select-${ this._uid }`;
        },

        errorMessage() {
            return this.error.getMessage();
        },

        hasError() {
            return !this.error.isEmpty();
        },

        styleClass() {
            return {
                formGroup: {
                    'form-group': true,
                    'has-danger': this.hasError,
                    'form-group-disabled': this.disabled,
                },
            }
        },
    },

    data() {
        return {
            data: "",
            error: new Error,
        }
    },

    methods: {

        clearError() {
            this.error.clear();
        },

        displayedValue(option) {
            return (typeof(option) === 'object' ? option[this.textKey] : option);
        },

        onChange(data) {
            let value = null;
            if (this.multiple) {
                let currentValue = [...this.data];
                const dataValues = currentValue.map(item => item[this.valueKey])
                dataValues.includes(data[this.valueKey])
                    ? currentValue.splice(dataValues.indexOf(data[this.valueKey]), 1)
                    : currentValue.push(data);
                value = currentValue.map(v => v[this.valueKey]);

            } else {
                const index = this.getKey(data);
                value = typeof(data) === 'object' && data[this.valueKey] !== undefined
                    ? data[this.valueKey] : data;
                this.$emit("indexchanged", index);
            }
            this.$emit("input", value);
            this.$emit("change", value);

            this.clearError();
        },

        getKey(data) {
            data = typeof(data) === 'object' && data[this.valueKey] !== undefined
                ? data[this.valueKey] : data;

            for (const key in this.options) {
                const val = typeof(this.options[key]) === 'object' && this.options[key][this.valueKey] !== undefined
                    ? this.options[key][this.valueKey] : this.options[key];
                if (val == data) {
                    return key;
                }
            }

            return -1
        },

        onRemove(data) {
            this.$emit("input", null);
            this.$emit("change", null);

            this.clearError();
        }
    },

    watch: {
        value(newValue) {
            if (newValue == null || newValue == "") {
                this.data = newValue;
            }
        }
    },

    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        label: String,
        multiple: Boolean,
        options: Array,
        placeholder: String,
        searchable: Boolean,
        value: Array|Number|String,
        showLabels: {
            type: Boolean,
            default: false,
        },
        allowEmpty: {
            type: Boolean,
            default: false,
        },
        valueKey: {
            type: String, default: 'value',
        },
        textKey: {
            type: String, default: 'text',
        },
    },

    mounted() {
        const dataList = this.options.filter(item => {
            const data = typeof(item) === 'object' && item[this.valueKey] !== undefined
                ? item[this.valueKey] : item;
                
            return this.multiple
                ? this.value.includes(data)
                : data === this.value;
        });
        if (this.multiple) {
            this.data = dataList;
        } else {
            this.data = dataList.length > 0 ? dataList[0] : null;
        }
    }
}

</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>