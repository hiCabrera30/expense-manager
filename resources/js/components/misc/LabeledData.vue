<template>
    <div>
        <div class="text-xs cursor-default" v-text="label"></div>
        <h3 v-if="value" :class="styleClass.value" v-text="value"></h3>
        <h3 v-else :class="styleClass.emptyValue" v-text="emptyValue"></h3>
    </div>
</template>
<script>
export default {
    name: "LabeledData",
    computed: {
        styleClass() {
            return {
                value: {
                    "font-weight-bold": true,
                    "text-default": true,
                    "text-sm": false,
                    "cursor-default": true,
                    "text-capitalize": this.capitalize,
                },
                emptyValue: {
                    "font-weight-bold": true,
                    "text-muted": true,
                    "text-sm": false,
                    "cursor-default": true,
                    "text-capitalize": this.capitalize,
                }
            }
        }
    },
    props: {
        label: String,
        value: [String, Number, Boolean],
        emptyValue: String,
        capitalize: Boolean,
    }
}
</script>