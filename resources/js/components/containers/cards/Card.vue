<template>
    <div :class="styleClass.card">
        <div :class="styleClass.cardHeader" v-if="hasHeader">
            <slot name="header"></slot>
        </div>
        <div :class="styleClass.cardBody">
            <slot name="body"></slot>
        </div>
        <div class="card-footer py-4" v-if="hasFooter">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Card',
    components: {},
    computed: {
        
        hasFooter() {
            return !!this.$slots.footer
        },
        
        hasHeader() {
            return !!this.$slots.header
        },

        styleClass() {
            return {
                card: {
                    'card': true,
                    'bg-secondary': this.gray,
                    'bg-white': !this.gray,
                    'shadow': true,
                },
                cardHeader: {
                    'card-header': true,
                    'bg-white': true,
                    'border-0': true,
                    'pb-0': true,
                },
                cardBody: {
                    'card-body': true,
                },
            }
        },
    },
    props: {
        gray: Boolean,
    }
}
</script>