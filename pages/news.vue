<template>
    <div class="main">
        <section class="block">
            <div class="header">
                <div class="header__title">
                    <h1>News</h1>
                </div>
                <div class="header__selector">
                    <NewsTabs :tabs="tabs" @selected="newsPattern = $event" />
                </div>
            </div>
            <div class="spacer"></div>
            <div class="feed">
                <NewsCard
                    v-for="(item, i) in showItems()"
                    :key="i"
                    :news="item"
                    :big="i < 2 || i % 6 === 0 || i % 6 === 1"
                    @selected="$toast.success($event.title)"
                />
                <Observer @intersect="intersected" />
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'News',

    async asyncData({ $db }) {
        const news = (await $db.read('/news')) || []
        return { news }
    },

    data() {
        return {
            newsPattern: '',
            pageSize: 4,
            quantityToShow: 9,
            tabs: [
                { name: 'All', pattern: '' },
                { name: 'Starcraft', pattern: 'Starcraft' },
                { name: 'Dota 2', pattern: 'Dota 2' },
                { name: 'FIFA', pattern: 'Fifa' },
                { name: 'Fortnite', pattern: 'Fortnite' },
                { name: 'Latest', pattern: 'last' },
                { name: 'Top', pattern: 'top' },
            ],
        }
    },

    computed: {
        filteredNews() {
            return this.filterArray(this.news, this.newsPattern)
        },
    },

    methods: {
        filterArray(arr, pattern) {
            if (!Array.isArray(arr)) return arr
            return arr.filter((item) =>
                item.title?.toLowerCase().includes(pattern.toLowerCase())
            )
        },

        intersected() {
            this.quantityToShow += this.pageSize
        },

        showItems() {
            return this.filteredNews.slice(0, this.quantityToShow)
        },
    },
}
</script>


<style lang="scss" scoped>
.spacer {
    height: 3rem;
}
.block {
    width: 100%;
    padding: 0 2rem;
    .header {
        margin-bottom: 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .feed {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
}

@media only screen and (min-width: 769px) {
    .block {
        width: 100%;
        height: 500px;
        margin: 3rem 0;
        padding: 0;
        .header {
            height: 90px;
            width: 100%;
            flex-direction: row;
        }
        .feed {
            flex-flow: row wrap;
            justify-content: flex-start;
            gap: 24px;
        }
    }
}
</style>