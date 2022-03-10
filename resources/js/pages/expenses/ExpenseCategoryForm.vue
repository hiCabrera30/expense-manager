<template>
    <card>
        <template slot="body">
            <div class="mt-1">
                <div v-if="!editable" @click="toggleEdit" class="btn btn-link btn-sm text-blue float-right">
                    <i class="fa fa-edit"></i> Edit
                </div>
                <div v-if="editable && !form.isRequesting" @click="toggleEdit" class="btn btn-link btn-sm text-danger float-right">
                    <i class="fa fa-ban"></i> Cancel
                </div>
            </div>
            <form v-if="editable" @submit.prevent="save" class="text-left pt-4 pb-4 container">
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
            <div v-else class="text-left pt-4 pb-4">
                <labeled-data label="Name" :value="form.name"></labeled-data>
            </div>
        </template>
    </card>
</template>

<script>
import Form from 'models/components/Form';
import { confirm, promptSuccess, promptFormErrors } from 'utils/prompts';

export default {
    name: 'ExpenseCategoryForm',

    data() {
        return {
            editable: false,
            form: new Form({
                id: this.category.id,
                name: this.category.name,
            }),
        }
    },

    methods: {

        toggleEdit() {
            (this.editable = !this.editable)
                ? this.form.commit()
                : this.form.reset();
        },

        async save() {
            const isConfirmed = (await confirm("Are you sure you want to edit this data?", "")).value;
            if (!isConfirmed) return;

            this.form.send("put", route('api.categories.update', this.form.id))
                .then(response => this.saved(response))
                .catch(error => this.failedToSave(error))
        },

        saved(response) {
            promptSuccess(response.data.message);
            this.editable = false;
        },

        failedToSave(error) {
            promptFormErrors(this.$refs, error);
        }
    },
    props: {
        category: [Object],
    }
}
</script>