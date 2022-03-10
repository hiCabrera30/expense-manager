<script>
import Form from 'models/components/Form';
import { promptFormErrors } from 'utils/prompts';

export default {
    name: 'LoginForm',

    data: () => ({
        form: new Form({
            email: '',
            password: '',
            remember: false,
        }),
    }),

    methods: {

        clearPassword() {
            return this.form.password = '';
        },

        signIn(event) {
            event.preventDefault();
            this.form.send("post", route('api.auth.login'))
                .then(response => this.signInSucceeded(response))
                .catch(error => this.signInFailed(error))
        },

        signInSucceeded(response) {
            location.reload();
        },

        signInFailed(error) {
            promptFormErrors(this.$refs, error);
            this.clearPassword();
        }
    },
}
</script>