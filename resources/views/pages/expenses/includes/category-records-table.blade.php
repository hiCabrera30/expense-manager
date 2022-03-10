<paginated-table title="Expense Categories list"
    fetch-link="{{ route('api.categories.index') }}"
    paginate-path="data.result.categories">
    <template slot="head">
        <th>Name</th>
        <th class="text-center">Actions</th>
    </template>
    <template slot="body" slot-scope="props">
        <td v-text="props.record.name"></td>
        <td class="text-center">
            <link-button
                route="categories.show"
                :params="props.record.id"
                class="btn btn-sm btn-dark btn-rounded m-1">
                <i class="fa fa-eye"></i>
            </link-button>
            @if (session("auth_user")->isRole("admin"))
                <request-button
                    route-name="api.categories.destroy"
                    :route-parameters="props.record.id"
                    :confirmation-function="() => confirm('Are you sure you want to delete this record?')"
                    :confirmation-function-async="true"
                    method="delete"
                    class="btn btn-sm btn-danger btn-rounded m-1"
                    @success="props.table.refreshPage"
                >
                    <i class="fa fa-trash"></i>
                </request-button>
            @endif
        </td>
    </template>
    <template slot="table-forms" slot-scope="props">
        @if (session("auth_user")->isRole("admin"))
            <create-expense-category-form @created="props.table.refreshPage"></create-expense-category-form>
            <div class="p-3">
                <link-button
                    emit="expense-categories.show-create"
                    class="btn btn-warning btn-rounded m-1">
                    Register Category<i class="fa fa-plus pl-2"></i>
                </link-button>
            </div>
        @endif
    </template>
</paginated-table>
