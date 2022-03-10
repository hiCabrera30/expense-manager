<template>
    <ul class="data-table-pagination pagination float-none">
        <li v-if="!simplified" class="page-item">
            <a href="#" :class="styleClasses.startButton" @click="goToPage(1)">
                <i class="fas fa-fast-backward"></i>
            </a>
        </li>
        <li v-for="(page, key) in pages" :key=key
            :class="'page-item ' + (isPageActive(page.name) ? 'disabled active' : '')">
            <a href="#" :class="styleClasses.pageButton" @click="goToPage(page.name)" v-text="page.name"></a>
        </li>
        <li v-if="!simplified" class="page-item">
            <a href="#" :class="styleClasses.lastButton" @click="goToPage(totalPages)">
                <i class="fas fa-fast-forward"></i>
            </a>
        </li>
    </ul>
</template>
<script>
export default {
    name: "DataTablePagination",

	props: {
        maxPages: { type: Number, default: 5 },
        totalPages: { type: Number, required: true, default: 5 },
        currentPage: { type: Number, required: true, default: 1 },
        simplified: { type: Boolean, default: false },
    },

	computed: {
        styleClasses() {
            return {
                startButton: {
                    "p-2": true,
                    "page-link": true,
                    "disabled": this.currentPage === 1,
                },
                pageButton: "p-2 page-link",
                lastButton: {
                    "p-2": true,
                    "page-link": true,
                    "disabled": this.currentPage === this.totalPages,
                },
                
            }
        },

        startPage() {
            if (this.totalPages < this.maxPages) {
                return 1;

            } else if (this.currentPage > Math.floor(this.maxPages / 2)) {
               if ((this.totalPages - Math.floor(this.maxPages / 2)) < this.currentPage) {
                  return this.totalPages - this.maxPages + 1;
               }
               return this.currentPage - Math.floor(this.maxPages / 2);

            } else {
               return 1;
            }
        },

        pages() {
            const range = [];
            const lastPage = Math.min(this.startPage + this.maxPages - 1, this.totalPages);
            for (let i=this.startPage; i <= lastPage; i++) {
                range.push({
                    name: i,
                    isDisabled: i === this.currentPage
                });
            }

            return range;
        },
    },

	methods: {
        goToPage(page) {
            this.$emit('page-changed', page);
        },

        isPageActive(page) {
            return this.currentPage === page;
        },
    },
};
</script>
