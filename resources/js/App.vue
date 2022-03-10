<script>
import * as pages from './pages';
import { confirm } from "utils/prompts";

const components = Object.assign({}, pages);

export default {
    name: 'App',
    components,

    data: () => ({}),

    methods: {
        async confirm(message) {
            return (await confirm(message)).value;
        },
    },

    props: {
        userId: Number
    },

    mounted() {}
}
</script>