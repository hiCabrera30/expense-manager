<template>
    <div class="inline-block">
        <modal ref="modal" v-model="showModal" title="Change Password" @hidden="onHide">
            <form @submit.prevent="" class="row text-left">
                <div class="col-lg-12">
                    <form-input
                        v-if="isCurrentUser"
                        placeholder="Current password"
                        label="Current password"
                        v-model="form.current_password"
                        type="password"
                        ref="current_password"
                    ></form-input>
                </div>
                <div class="col-lg-12">
                    <form-input
                        placeholder="New password"
                        label="New password"
                        v-model="form.password"
                        type="password"
                        ref="password"
                    ></form-input>
                </div>
                <div class="col-lg-12">
                    <form-input
                        placeholder="Confirm password"
                        label="Confirm password"
                        v-model="form.password_confirmation"
                        type="password"
                        ref="password_confirmation"
                    ></form-input>
                </div>
                <div class="col-lg-12">
                    <button v-if="!form.isRequesting" @click="save" type="submit" class="btn btn-primary btn-rounded long float-right">
                        <i class="fa fa-save mr-1"></i> Save
                    </button>
                    <button v-else disabled class="disabled btn btn-primary btn-rounded long float-right">
                        <i class="fa fa-spinner fa-spin mr-2"></i> Please wait
                    </button>
                </div>
            </form>
        </modal>
    </div>
</template>
<script>
import { bus }  from 'src/utils/bus';
import Form from 'models/components/Form';
import { confirm, promptSuccess, promptFormErrors } from "utils/prompts";

export default {
    name: 'ChangePasswordForm',

    computed: {
        isCurrentUser() {
            return this.currentUserId == this.form.id;
        },
    },

    data: () => ({
        showModal: false,
        clearModal: true,
        form: new Form({
            id: 0,
            current_password: "",
            password: "",
            password_confirmation: "",
        })
    }),
    methods: {

        initialize(userId) {
            this.form.reset();
            this.form.id = userId;
            this.$refs.modal.open();
        },

        clearErrors() {
            this.$refs.current_password ? this.$refs.current_password.clearError() : "";
            this.$refs.password.clearError();
            this.$refs.password_confirmation.clearError();
        },

        onHide() {
            this.$refs.modal.close();
            this.form.reset();
            this.clearErrors();
        },

        async save() {
            const isConfirmed = (await confirm("Are you sure you want to change this user's password?")).value;
            if (!isConfirmed) return;

            const url = route('api.users.update-password', this.form.id);
            this.form.send("patch", url)
                .then(response => this.saved(response))
                .catch(error => this.saveFailed(error));
        },

        saved(response) {
            promptSuccess(response.data.message);
            this.onHide();
        },

        saveFailed(error) {
            const userId = this.form.id;
            this.form.reset();
            this.form.id = userId;
            promptFormErrors(this.$refs, error);
        },
    },

    props: {
        currentUserId: Number,
    },

    mounted() {
        bus.$on("users.show-change-password", this.initialize);

    }
}
</script>