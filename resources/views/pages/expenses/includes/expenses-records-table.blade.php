<paginated-table title="User Expenses list"
    fetch-link="{{ isset($user) ? route('api.expenses.index', ["user_id" => $user->id]) : route('api.expenses.index') }}"
    paginate-path="data.result.expenses">
    <template slot="head">
        @if (!isset($category))
            <th>Category</th>
        @endif
        @if (!isset($user))
            <th>User</th>
        @endif
        <th>Amount</th>
        <th class="text-center">Actions</th>
    </template>
    <template slot="body" slot-scope="props">
        @if (!isset($category))
        <td>
            <link-button
                route="categories.show"
                :params="props.record.category.id"
                class="btn btn-link text-dark">
                <span v-text="props.record.category.name"></span>
            </link-button>
        </td>
        @endif
        @if (!isset($user))
            <td>
                <link-button
                    route="general-users.show"
                    :params="props.record.user.id"
                    class="btn btn-link text-dark">
                    <span v-text="props.record.user.name"></span>
                </link-button>
            </td>
        @endif
        <td v-text="props.record.amount"></td>
        <td class="text-center">
            <link-button
                emit="expenses.show-update"
                :params="props.record"
                class="btn btn-sm btn-dark btn-rounded m-1">
                <i class="fa fa-eye"></i>
            </link-button>
            <request-button
                route-name="api.expenses.destroy"
                :route-parameters="props.record.id"
                :confirmation-function="() => confirm('Are you sure you want to delete this record?')"
                :confirmation-function-async="true"
                method="delete"
                class="btn btn-sm btn-danger btn-rounded m-1"
                @success="props.table.refreshPage"
            >
                <i class="fa fa-trash"></i>
            </request-button>
        </td>
    </template>
    <template slot="table-forms" slot-scope="props">
        <create-expense-form
            :category='@json(isset($category) ? $category : null)'
            :user='@json(isset($user) ? $user : null)'
            @created="props.table.refreshPage"
        ></create-expense-form>
        <expense-form
            :user='@json(isset($user) ? $user : null)'
            @updated="props.table.refreshPage"
        ></expense-form>
        <div class="p-3">
            <link-button
                emit="expenses.show-create"
                class="btn btn-warning btn-rounded m-1">
                Register Expense<i class="fa fa-plus pl-2"></i>
            </link-button>
        </div>
    </template>
</paginated-table>
