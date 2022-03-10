<template>
    <div :class="styleClass.formGroup">
        <label v-if="label"
            :for="id" class="form-control-label" v-text="label"></label>

        <label v-if="showOptionalLabel"
            :for="id" class="form-control-label text-muted" v-text="optionalLabel"></label>

        <input v-if="type != 'textarea'"
            :id="id"
            :type="type"
            :class="styleClass.input"
            :readonly="disabled"
            :value="value"
            :placeholder="placeholder"
            autocomplete="off"
            ref="input"
            @input="input"
            @blur="blur"
            @focus="focus"/>
        <textarea v-else
            :rows="rows"
            :id="id"
            :type="type"
            :class="styleClass.input"
            :readonly="disabled"
            :value="value"
            :placeholder="placeholder"
            autocomplete="off"
            ref="input"
            @input="input"
            @blur="blur"
            @focus="focus"></textarea>

        <span v-if="hasError" class="text-danger" v-text="errorMessage"></span>
    </div>
</template>
<script>
import Error from "models/components/Error.js";

export default {
    name: "FormInput",
    props: {
        capitalize: Boolean,
        disabled: Boolean,
        label: String,
        optionalLabel: String,
        placeholder: String,
        type: {
            default: 'text',
            type: String,
        },
        value: [String, Number, Object, Array],
        alternative: Boolean,
        rows: {
            type: Number,
            default: 5,
        },
        hideOptionalLabelOnDisable: Boolean,
    },
    computed: {
        id() {
            return `form-input-${ this._uid }`;
        },

        errorMessage() {
            return this.error.getMessage();
        },

        showOptionalLabel() {
            if (!this.optionalLabel) {
                return false;
            }
            if (this.disabled && this.hideOptionalLabelOnDisable) {
                return false;
            }
            
            return true;
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
                input: {
                    'form-control': true,
                    'form-control-alternative': this.alternative,
                    'is-invalid': this.hasError,
                    'text-capitalize': this.capitalize,
                },
            }
        },
    },
    data() {
        return {
            data: this.value,
            error: new Error,
        }
    },
    methods: {

        clearError() {
            this.error.clear();
        },

        input(event) {
            if (this.hasError) this.error.clear();

            if (this.type.toLowerCase() === "integer") {
                const value = parseInt(event.target.value);
                return this.emmitInput(isNaN(value) ? 0 : value);

            } else if (this.type.toLowerCase() === "decimal" && event.target.value.split(".").length > 2) {
                return this.emmitInput(parseFloat(event.target.value));

            }

            return this.emmitInput(event.target.value);
        },

        emmitInput(value) {
            this.$emit("input", this.$refs.input.value = this.data = value);
        },

        blur(event) {
            this.$emit("blur", event)
        },

        focus(event) {
            this.$emit("focus", event)
        },
        
        isArrayAnEmptyString() {
            return typeof this.error === "string" && !this.error.trim().length;
        },
        
        isArrayAnEmptyArray() {
            return Array.isArray(this.error) && !this.error.length;
        },

    }
}
</script>