<template>
    <div>
        <section>triangles</section>
        <SliderBlock>
            <template #header> <h1>Tournaments</h1></template>
            <template #selector>
                <MainTabs
                    :tabs="tabs"
                    @selected="tournamentsPattern = $event"
                />
            </template>
            <template #slider>
                <swiper ref="tournamentsSwiper" :options="swiperOptions">
                    <swiper-slide
                        v-for="(item, i) in filteredTournaments"
                        :key="i"
                    >
                        <GamesCard>
                            <div class="game-card">
                                <img
                                    class="pic"
                                    alt="game-image"
                                    :src="item.src"
                                />
                                <h2 class="caption white-text"></h2>
                            </div> </GamesCard
                    ></swiper-slide>
                </swiper>
            </template>
        </SliderBlock>

        <SliderBlock>
            <template #header> <h1>News</h1></template>
            <template #selector>
                <MainTabs :tabs="tabs" @selected="newsPattern = $event" />
            </template>
            <template #slider>
                <swiper ref="newsSwiper" :options="swiperOptions">
                    <swiper-slide v-for="(item, i) in filteredNews" :key="i">
                        <GamesCard>
                            <div class="game-card">
                                <img
                                    class="pic"
                                    alt="game-image"
                                    :src="item.src"
                                />
                                <h2 class="caption white-text"></h2>
                            </div> </GamesCard
                    ></swiper-slide>
                </swiper>
            </template>
        </SliderBlock>

        <SliderBlock>
            <template #header> <h1>Streams</h1></template>
            <template #selector>
                <MainTabs :tabs="tabs" @selected="streamsPattern = $event" />
            </template>
            <template #slider>
                <swiper ref="streamsSwiper" :options="swiperOptions">
                    <swiper-slide v-for="(item, i) in filteredStreams" :key="i">
                        <GamesCard>
                            <div class="game-card">
                                <img
                                    class="pic"
                                    alt="game-image"
                                    :src="item.src"
                                />
                                <h2 class="caption white-text"></h2>
                            </div> </GamesCard
                    ></swiper-slide>
                </swiper>
            </template>
        </SliderBlock>

        <section>
            <h1>Partners</h1>
            <div class="partners">
                <div
                    v-for="partner in partners"
                    :key="partner.name"
                    class="partner__logo"
                >
                    <img :src="partner.src" :alt="partner.name" />
                </div>
            </div>
        </section>

        <SliderBlock>
            <template #header> <h1>Games</h1></template>
            <template #selector>
                <MainTabs :tabs="tabs" @selected="gamesPattern = $event" />
            </template>
            <template #slider>
                <swiper ref="gamesSwiper" :options="swiperOptions">
                    <swiper-slide v-for="(item, i) in filteredGames" :key="i">
                        <GamesCard>
                            <div class="game-card">
                                <img
                                    class="pic"
                                    alt="game-image"
                                    :src="item.src"
                                />
                                <h2 class="caption white-text"></h2>
                            </div> </GamesCard
                    ></swiper-slide>
                </swiper>
            </template>
        </SliderBlock>
    </div>
</template>

<script>
export default {
    name: 'Home',

    layout: 'default',

    async asyncData({ $db }) {
        const tournaments = (await $db.read('/tournaments')) || []
        const games = (await $db.read('/games')) || []
        const partners = (await $db.read('/partners')) || []
        return { games, partners, tournaments }
    },

    data() {
        return {
            isBusy: true,
            gamesPattern: '',
            tournamentsPattern: '',
            newsPattern: '',
            streamsPattern: '',
            tabs: [
                { name: 'All', pattern: '' },
                { name: 'Starcraft', pattern: 'Starcraft' },
                { name: 'Dota 2', pattern: 'Dota 2' },
                { name: 'FIFA', pattern: 'Fifa' },
                { name: 'Fortnite', pattern: 'Fortnite' },
            ],

            swiperOptions: {
                slidesPerView: 1,
                spaceBetween: 14,
                autoplay: {
                    delay: 1000,
                },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },
                centeredSlides: true,
                centeredSlidesBounds: true,
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                },
            },
        }
    },

    computed: {
        tournamentsSwiper() {
            return this.$refs.tournamentsSwiper.$swiper
        },
        newsSwiper() {
            return this.$refs.newsSwiper.$swiper
        },
        streamsSwiper() {
            return this.$refs.streamsSwiper.$swiper
        },
        gamesSwiper() {
            return this.$refs.gamesSwiper.$swiper
        },

        filteredTournaments() {
            return this.filterArray(this.tournaments, this.tournamentsPattern)
        },
        filteredNews() {
            return this.filterArray(this.news, this.newsPattern)
        },
        filteredStreams() {
            return this.filterArray(this.streams, this.streamsPattern)
        },
        filteredGames() {
            return this.filterArray(this.games, this.gamesPattern)
        },
    },

    mounted() {
        this.isBusy = false
    },

    methods: {
        filterArray(arr, pattern) {
            if (!Array.isArray(arr)) return arr
            return arr.filter((item) =>
                item.title?.toLowerCase().includes(pattern.toLowerCase())
            )
        },
    },
}
</script>


<style lang="scss" scoped>
.swiper-slide {
    max-width: 300px;
}

.partners {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    margin: 3rem 0.5rem;
    .partners__logo {
        height: 70px;
        padding: 0.5rem 0;
        &:hover {
            cursor: pointer;
        }
    }
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
}
</style>