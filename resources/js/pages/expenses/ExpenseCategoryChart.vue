<template>
    <div class="container">
        <bar-chart
            v-if="loaded"
            :chartdata="categorySumData"
            :height="150"
            :options="options">
        </bar-chart>
        <bar-chart
            v-if="loaded"
            :chartdata="categoryCountData"
            :height="150"
            :options="options">
        </bar-chart>
    </div>
</template>

<script>

export default {
  name: 'ExpenseCategoryChart',

    data: () => ({
        loaded: false,
        categorySumData: null,
        categoryCountData: null,
        options: {
            scales: {
                yAxes: [{ ticks: {beginAtZero: true} }]
            }
        },
    }),

    methods: {
        initializeCategorySumData() {
            this.categorySumData = {
                labels: this.categories.map(category => category.name),
                datasets: [{
                    label: 'Expense Records Sum',
                    backgroundColor: this.generateRandomColor(this.categories.length),
                    data: this.categories.map(category => category.expenses_sum),
                }]
            };
        },

        initializeCategoryCountData() {
            this.categoryCountData = {
                labels: this.categories.map(category => category.name),
                datasets: [{
                    label: 'Expense Records Count',
                    backgroundColor: this.generateRandomColor(this.categories.length),
                    data: this.categories.map(category => category.expenses_count),
                }]
            };
        },

        generateRandomColor(amount = 1) {
            const colors = [];
            for (let index = 0; index < amount; index++) {
                colors.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
            }

            return colors;
        }
    },
  

    props: {
        categories: Array,
    },

    mounted() {
        this.loaded = true;
        this.initializeCategorySumData();
        this.initializeCategoryCountData();
    }
}
</script>