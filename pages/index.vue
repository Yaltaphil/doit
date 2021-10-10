<template>
    <div>
        <section>triangles</section>
        <SliderBlock>
            <template #header> <h1>Tournaments</h1></template>
            <template #selector>
                <div class="tabs">
                    <div class="tabs__item" v-for="tab in tabs" :key="tab.name">
                        {{ tab.name }}
                    </div>
                </div>
            </template>
            <template #slider>
                <GamesCard v-for="(item, i) in games" :key="i">
                    <div class="game-card">
                        <img class="pic" :src="item.src" alt="game image" />
                        <h2 class="caption white-text">{{ item.title }}</h2>
                    </div>
                </GamesCard>
            </template>
        </SliderBlock>

        <section>
            <h3>News</h3>
        </section>
        <section>
            <h3>Streams</h3>
        </section>
        <section>
            <h3>Parters</h3>
        </section>
        <section>
            <h3>Games</h3>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Home',

    layout: 'default',

    async asyncData({ $db }) {
        const games = await $db.read('/games')
        return { games }
    },

    data() {
        return {
            isBusy: false,
            tabs: [
                { name: 'All', pattern: '' },
                { name: 'Starcraft', pattern: 'Starcraft' },
                { name: 'Dota 2', pattern: 'Dota 2' },
                { name: 'LOL', pattern: 'LOL' },
                { name: 'Fortnite', pattern: 'Fortnite' },
            ],
        }
    },

    methods: {},
}
</script>


<style lang="scss" scoped>
.tabs {
    display: none;
}

.game-card {
    width: 100%;
    height: 128px;
    width: 300px;
    height: 400px;
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
        text-align: center;
        width: 100%;
        z-index: 1;
        bottom: 3rem;
    }
}

@media only screen and (min-width: 769px) {
    .tabs {
        height: 56px;
        text-decoration: none;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 3px;
        .tabs__item {
            color: #a0a5ad;
            background: #14191f;
            padding: 1rem 2rem;
            font-size: 18px;
            line-height: 24px;
            font-weight: bold;
            &:hover {
                background: #d8dfeb;
                color: #20252b;
            }
        }
    }
}
</style>