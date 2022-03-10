<template>
    <modal v-model="modalShown" :title="title" ref="modal" @hidden="modalShown = false" :small="false">
        <form @submit.prevent="save" class="text-left pt-4 pb-4 container">
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
                    <form-input
                        label="Password"
                        placeholder="Password"
                        ref="password"
                        type="password"
                        v-model="form.password"
                    ></form-input>
                    <form-input
                        label="Password Confirmation"
                        placeholder="Password Confirmation"
                        ref="password_confirmation"
                        type="password"
                        v-model="form.password_confirmation"
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
    </modal>
</template>

<script>
import { bus }  from 'src/utils/bus';
import Form from 'models/components/Form';
import { confirm, promptSuccess, promptFormErrors } from 'utils/prompts';

export default {
    name: 'CreateUserForm',

    data: () => ({
        modalShown: false,
        form: new Form({
            email: '',
            name: '',
            password: '',
            password_confirmation: '',
            type: '',
        }),
    }),

    methods: {
        initialize() {
            this.form.reset();
            this.form.type = this.type;
        },

        close() {
            this.form.reset();
            this.$refs.modal.close();
        },

        show(user) {
            this.initialize(user);
            this.modalShown = true;
        },

        async save() {
            setTimeout(() => document.activeElement.blur(), 200)
            const isConfirmed = (await confirm("Are you sure you want to save this data?", "")).value;
            if (!isConfirmed) return;

            this.form.send("post", route('api.users.store'))
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
            this.form.password = "";
            this.form.password_confirmation = "";
        }
    },

    props: {
        title: String,
        type: String,
    },

    mounted() {
        bus.$on("users.show-create", this.show);
    }
}
</script>