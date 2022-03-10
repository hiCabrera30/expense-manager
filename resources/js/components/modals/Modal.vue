<template>
    <div :id="id" tabindex="-1" aria-labelledby="modal-form" :class="styleClass.modal"
        :data-backdrop="closable || 'static'" :data-keyboard="closable">
        <div :class="styleClass.modalDialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 v-if="title" v-text="title"></h3>
                    <slot v-else name="header"></slot>
                    <button v-if="closable" type="button" class="close" @click="close">
                        <span>×</span>
                    </button>
                </div>
                <div class="modal-body pt-0 pb-0">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Modal",
    computed: {

        id() {
            return `modal-component-${ this._uid }`
        },
        
        selector() {
            return `#${ this.id }`
        },

        styleClass() {
            return {
                modal: {
                    'modal': true,
                    'fade': true,
                    // 'modal-lg': !this.small,
                },
                modalDialog: {
                    'modal-dialog': true,
                    'modal-dialog-centered': true,
                    'modal-lg': !this.small,
                }
            }
        }

    },

    data() {
        return {
            closable: this.initialClosable,
            fullscreen: false,
            icon: false,
            show: this.value,
        }
    },

    methods: {

        emitShownValue() {
            this.$emit('input', this.show);
        },

        initializeModal() {
            $(this.selector).on('show.bs.modal', e => {
                this.$emit('shown', e);
                this.show = true;
                this.emitShownValue();
            })
            $(this.selector).on('hidden.bs.modal', e => {
                this.$emit('hidden', e);
                if (!e.target.id != this.id) {
                    e.preventDefault();                    
                    return
                }
                this.show = false;
                this.emitShownValue();
            })
            $(this.selector).modal('hide');
        },

        toggleVisibility() {
            $(this.selector).modal(this.show ? 'show' : 'hide');
        },

        enableClose(enable) {
            this.closable = enable;
        },

        open() {
            $(this.selector).modal("show");
            this.show = true;
            this.emitShownValue();
        },

        close() {
            $(this.selector).modal("hide");
            this.show = false;
            this.emitShownValue();
        }
    },

    props: {
        value: {
            type: Boolean,
            default: false,
        },
        subtitle: String,
        title: String,
        initialClosable: {
            type: Boolean,
            default: true,
        },
        small: {
            type: Boolean,
            default: true,
        },
    },

    watch: {
        show() {
            this.toggleVisibility();
        },

        value(newValue) {
            this.show = newValue;
        },
    },

    mounted() {
        this.initializeModal();
    },
}
</script>