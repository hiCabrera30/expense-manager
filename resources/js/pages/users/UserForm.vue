<template>
    <modal v-model="modalShown" :title="title" ref="modal" @hidden="modalShown = false" :small="false">
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
                        label="Email"
                        placeholder="Email"
                        ref="email"
                        v-model="form.email"
                    ></form-input>
                    <form-input
                        label="Name"
                        placeholder="Name"
                        ref="name"
                        v-model="form.name"
                    ></form-input>
                </div>
                <div class="col-sm-12">
                    <button v-if="!form.isRequesting" type="submit" class="btn btn-warning btn-rounded long float-right">
                        <i class="fa fa-save mr-1"></i> Save
                    </button>
                    <button v-else disabled class="disabled btn btn-warning btn-rounded long float-right">
                        <i class="fas fa-spin fa-spinner mr-2"></i> Please wait
                    </button>
                </div>
            </div>
        </form>
        <div v-else class="text-left pt-4 pb-4">
            <labeled-data label="Email" :value="form.email"></labeled-data>
            <labeled-data label="Name" :value="form.name"></labeled-data>
        </div>
    </modal>
</template>

<script>
import { bus }  from 'src/utils/bus';
import Form from 'models/components/Form';
import { confirm, promptSuccess, promptFormErrors } from 'utils/prompts';

export default {
    name: 'UserForm',

    data: () => ({
        modalShown: false,
        editable: false,
        form: new Form({
            id: '',
            email: '',
            name: '',
        }),
    }),

    methods: {
        initialize(user) {
            this.form.id = user.id;
            this.form.email = user.email;
            this.form.name = user.name;
        },

        show(user) {
            this.initialize(user);
            this.modalShown = true;
            this.editable = false;
        },

        toggleEdit() {
            (this.editable = !this.editable)
                ? this.form.commit()
                : this.form.reset();
        },

        async save() {
            const isConfirmed = (await confirm("Are you sure you want to edit this data?", "")).value;
            if (!isConfirmed) return;

            this.form.send("put", route('api.users.update', this.form.id))
                .then(response => this.saved(response))
                .catch(error => this.failedToSave(error))
        },

        saved(response) {
            promptSuccess(response.data.message);
            this.editable = false;
            this.$emit("updated", this.form);
        },

        failedToSave(error) {
            promptFormErrors(this.$refs, error);
        }
    },

    props: {
        title: String,
    },

    mounted() {
        bus.$on("users.show-profile", this.show);
    }
}
</script>