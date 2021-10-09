<template>
    <section>
        <BasePreloader v-show="isBusy" />
        <div class="search">
            <h1>Games</h1>
            <BaseInput
                v-model="searchPattern"
                placeholder="Search the game"
            ></BaseInput>
        </div>

        <div class="sheet">
            <GamesCard v-for="(item, i) in foundItems" :key="i">
                <div class="game-card" @click="alert(i)">
                    <img class="pic" :src="item.src" alt="game image" />
                    <h2 class="caption white-text">{{ item.title }}</h2>
                </div>
            </GamesCard>
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
            isBusy: true,
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
    },

    mounted() {
        this.isBusy = false
    },
}
</script>

<style lang="scss" scoped>
section {
    padding: 1rem;
    .search {
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;
    }
}
.sheet {
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
    .game-card {
        width: 100%;
        height: 128px;
        position: relative;
        &:hover {
            cursor: pointer;
            transform: scale(1.025);
            filter: drop-shadow(0 0 10px rgb(129, 1, 1));
        }
        .pic {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .caption {
            position: absolute;
            bottom: 2rem;
            text-align: center;
            width: 100%;
            z-index: 1;
        }
    }
}
@media only screen and (min-width: 769px) {
    .sheet {
        flex-flow: row wrap;
        .game-card {
            // width: 387px;
            width: 300px;
            // height: 500px;
            height: 400px;
            .caption {
                bottom: 3rem;
            }
        }
    }
}
</style>