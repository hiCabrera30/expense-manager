<template>
    <modal v-model="modalShown" title="Create Expense Category" ref="modal" @hidden="modalShown = false" :small="false">
        <form @submit.prevent="save" class="text-left pt-4 pb-4 container">
            <div class="row">
                <div class="col-sm-12">
                    <form-select
                        v-if="category == null"
                        :options="categories"
                        label="Category"
                        placeholder="Category"
                        ref="category_id"
                        v-model="form.category_id"
                    ></form-select>
                    <labeled-data v-else label="Category" :value="category.name" class="mb-2"></labeled-data>

                    <form-select
                        v-if="user == null"
                        :options="users"
                        label="User"
                        placeholder="User"
                        ref="user_id"
                        v-model="form.user_id"
                    ></form-select>
                    <labeled-data v-else label="User" :value="user.name" class="mb-2"></labeled-data>

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
    name: 'CreateExpenseForm',

    data() {
        return {
            modalShown: false,
            users: [],
            categories: [],
            form: new Form({
                category_id: this.category ? this.category.id : "",
                user_id: this.user ? this.user.id : "",
                amount: '',
            }),
        }
    },

    methods: {
        initialize() {
            this.form.reset();
            if (this.category == null) {
                this.initializeCategories();
            }
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

        show() {
            this.initialize();
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

            this.form.send("post", route('api.expenses.store'))
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
    
    props: {
        category: Object,
        user: Object,
    },

    mounted() {
        bus.$on("expenses.show-create", this.show);
    }
}
</script>