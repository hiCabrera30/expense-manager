<template>
    <modal v-model="modalShown" title="Expense Category" ref="modal" @hidden="modalShown = false" :small="false">
        <form @submit.prevent="save" class="text-left pt-4 pb-4 container">
            <div class="row">
                <div class="col-sm-12">
                    <form-select
                        v-if="categories.length > 0"
                        :options="categories"
                        label="Category"
                        placeholder="Category"
                        ref="category_id"
                        v-model="form.category_id"
                    ></form-select>
                    
                    <form-select
                        v-if="user == null && users.length > 0"
                        :options="users"
                        label="User"
                        placeholder="User"
                        ref="user_id"
                        v-model="form.user_id"
                    ></form-select>
                    <labeled-data v-else-if="user != null" label="User" :value="user.name" class="mb-2"></labeled-data>

                    <form-input
                        label="Amount"
                        placeholder="Amount"
                        type="decimal"
                        ref="amount"
                        v-model="form.amount"
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
import { get } from 'utils/network';
import { bus }  from 'src/utils/bus';
import { confirm, promptSuccess, promptErrors, promptFormErrors } from 'utils/prompts';
import Form from 'models/components/Form';

export default {
    name: 'ExpenseForm',

    data() {
        return {
            modalShown: false,
            users: [],
            categories: [],
            form: new Form({
                id: '',
                category_id: '',
                user_id: this.user ? this.user.id : '',
                amount: '',
            }),
        }
    },

    methods: {
        initialize(data) {
            this.form.reset();

            this.form.id = data.id;
            this.form.category_id = data.category_id;
            this.form.user_id = data.user_id;
            this.form.amount = data.amount;

            this.initializeCategories();
            if (this.user == null) {
                this.initializeUsers();
            }
        },

        initializeUsers() {
            this.users = [];
            get(route("api.users.index", { type: "user", "paginate": false }))
                .then(response => this.users = this.mapDataListToOptions(response.data.result.users))
                .catch(error => promptErrors(error.response.data.message))
        },

        initializeCategories() {
            this.categories = [];
            get(route("api.categories.index", { "paginate": false }))
                .then(response => this.categories = this.mapDataListToOptions(response.data.result.categories))
                .catch(error => promptErrors(error.response.data.message))
        },

        close() {
            this.form.reset();
            this.$refs.modal.close();
        },

        show(data) {
            this.initialize(data);
            this.$refs.modal.open();
        },

        mapDataListToOptions(data) {
            return data.map(user => ({
                    text: user.name,
                    value: user.id,
                }));
        },

        async save() {
            setTimeout(() => document.activeElement.blur(), 200)
            const isConfirmed = (await confirm("Are you sure you want to save this data?", "")).value;
            if (!isConfirmed) return;

            this.form.send("put", route('api.expenses.update', this.form.id))
                .then(response => this.saved(response))
                .catch(error => this.failedToSave(error))
        },

        saved(response) {
            promptSuccess(response.data.message);
            this.close();
            this.$emit("updated");
        },

        failedToSave(error) {
            promptFormErrors(this.$refs, error);
        }
    },
    
    props: {
        user: Object,
    },

    mounted() {
        bus.$on("expenses.show-update", this.show);
    }
}
</script>