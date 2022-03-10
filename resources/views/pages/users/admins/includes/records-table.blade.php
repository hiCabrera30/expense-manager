<paginated-table title="Admin list"
    fetch-link="{{ route('api.users.index', ["type" => "admin"]) }}"
    paginate-path="data.result.users">
    <template slot="head">
        <th>Name</th>
        <th>Email</th>
        <th class="text-center">Actions</th>
    </template>
    <template slot="body" slot-scope="props">
        <td v-text="props.record.name"></td>
        <td v-text="props.record.email"></td>
        <td class="text-center">
            <link-button
                route="admins.show"
                :params="props.record.id"
                class="btn btn-sm btn-dark btn-rounded m-1">
                <i class="fa fa-eye"></i>
            </link-button>
            <request-button
                route-name="api.users.destroy"
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
        <create-user-form title="Register Admin" type="admin" @created="props.table.refreshPage"></create-user-form>
        <div class="p-3">
            <link-button
                emit="users.show-create"
                class="btn btn-warning btn-rounded m-1">
                Register Admin<i class="fa fa-plus pl-2"></i>
            </link-button>
        </div>
    </template>
</paginated-table>
