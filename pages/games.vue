<template>
    <section>
        <div class="search">
            <h1>Games</h1>
            <BaseInput
                v-model="searchPattern"
                placeholder="Search the game"
            ></BaseInput>
        </div>

        <div class="sheet">
            <GamesCard
                v-for="(item, i) in showItems"
                :key="i"
                :game="item"
                @selected="selected(item)"
            />
            <Observer @intersect="intersected" />
        </div>
    </section>
</template>

<script>
export default {
    name: 'Games',

    async asyncData({ $db }) {
        const games = await $db.read('/games')
        return { games }
    },

    data() {
        return {
            searchPattern: '',
            pageSize: 6,
            numberOfGamesToShow: 12,
        }
    },

    computed: {
        foundItems() {
            return this.games.filter((item) =>
                item.title
                    .toString()
                    .toLowerCase()
                    .includes(this.searchPattern.toLowerCase())
            )
        },

        showItems() {
            return this.foundItems.slice(0, this.numberOfGamesToShow)
        },
    },

    mounted() {
        this.isBusy = false
    },

    methods: {
        intersected() {
            this.numberOfGamesToShow += this.pageSize
        },

        selected(target) {
            this.$toast.success(`Game ${target.title}`)
        },
    },
}
</script>

<style lang="scss" scoped>
section {
    padding: 1rem 0;
    .search {
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;
    }
}
.sheet {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: 7px 3px;
}
@media only screen and (min-width: 769px) {
    .sheet {
        flex-flow: row wrap;
    }
}
</style>