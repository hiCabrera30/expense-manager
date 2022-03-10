<template>
    <modal v-model="modalShown" title="Create Expense Category" ref="modal" @hidden="modalShown = false" :small="false">
        <form @submit.prevent="save" class="text-left pt-4 pb-4 container">
            <div class="row">
                <div class="col-sm-12">
                    <form-input
                        label="Name"
                        placeholder="Name"
                        ref="name"
                        v-model="form.name"
                    ></form-input>
                </div>
                <div class="col-sm-12">
                    <button v-if="!form.isRequesting" type="submit" class="btn btn-primary btn-rounded long float-right">
                        <i class="fa fa-save mr-1"></i> Save
                    </button>
                    <button v-else disabled class="disabled btn btn-primary btn-rounded long float-right">
                        <i class="fas fa-spin fa-spinner mr-2"></i> Please wait
                    </button>
                </div>
            </div>
        </form>
    </modal>
</template>

<script>
import { bus }  from 'src/utils/bus';
import Form from 'models/components/Form';
import { confirm, promptSuccess, promptFormErrors } from 'utils/prompts';

export default {
    name: 'CreateExpenseCategoryForm',

    data: () => ({
        modalShown: false,
        form: new Form({
            name: '',
        }),
    }),

    methods: {
        initialize() {
            this.form.reset();
        },

        close() {
            this.form.reset();
            this.$refs.modal.close();
        },

        show(user) {
            this.initialize();
            this.$refs.modal.open();
        },

        async save() {
            setTimeout(() => document.activeElement.blur(), 200)
            const isConfirmed = (await confirm("Are you sure you want to save this data?", "")).value;
            if (!isConfirmed) return;

            this.form.send("post", route('api.categories.store'))
                .then(response => this.saved(response))
                .catch(error => this.failedToSave(error))
        },

        saved(response) {
            promptSuccess(response.data.message);
            this.close();
            this.$emit("created");
        },

        failedToSave(error) {
            promptFormErrors(this.$refs, error);
        }
    },

    mounted() {
        bus.$on("expense-categories.show-create", this.show);
    }
}
</script>