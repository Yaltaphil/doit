<template>
    <div class="main">
        <section class="offer">
            <img src="~/assets/img/offer.png" alt="offer" />
            <div class="offer__extras">
                <BaseButton
                    v-if="!isAuth"
                    class="secondary white"
                    @click="$router.push('/login')"
                    >Login</BaseButton
                >
                <BaseButton
                    v-if="!isAuth"
                    class="primary"
                    @click="$router.push('/signup')"
                    >Sign up</BaseButton
                >
            </div>
        </section>
        <SliderBlock>
            <template #header> <h1>Tournaments</h1></template>
            <template #selector>
                <MainTabs
                    :tabs="tabs"
                    @selected="tournamentsPattern = $event"
                />
            </template>
            <template #slider>
                <swiper
                    ref="tournamentsSwiper"
                    :options="swiperOptions"
                    :gap="10"
                >
                    <swiper-slide
                        v-for="(item, i) in filteredTournaments"
                        :key="i"
                    >
                        <TournamentCard :tournament="item" />
                    </swiper-slide>
                    <div slot="pagination" class="swiper-pagination"></div>
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
                        <NewsCard :news="item"
                    /></swiper-slide>
                    <div slot="pagination" class="swiper-pagination"></div>
                </swiper>
            </template>
        </SliderBlock>

        <SliderBlock>
            <template #header> <h1>Streams</h1></template>
            <template #selector>
                <MainTabs :tabs="tabs" @selected="streamsPattern = $event" />
            </template>
            <template #slider>
                <swiper
                    ref="streamsSwiper"
                    :options="swiperOptions"
                    class="swiper"
                >
                    <swiper-slide v-for="(item, i) in filteredStreams" :key="i">
                        <GamesCard :game="item" />
                    </swiper-slide>
                    <div slot="pagination" class="swiper-pagination"></div>
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
                <swiper
                    ref="gamesSwiper"
                    :options="swiperOptions"
                    class="swiper"
                >
                    <swiper-slide v-for="(item, i) in filteredGames" :key="i">
                        <GamesCard :game="item" />
                    </swiper-slide>
                    <div slot="pagination" class="swiper-pagination"></div>
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
        const news = (await $db.read('/news')) || []
        return { games, partners, tournaments, news }
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
                slidesPerGroup: 1,

                loop: false,
                autoplay: {
                    delay: 7500,
                },
                freeMode: {
                    enabled: true,
                    sticky: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },
                // centeredSlides: true,
                // centeredSlidesBounds: true,
                breakpoints: {
                    768: {
                        spaceBetween: 14,
                        slidesPerView: 3,
                        slidesPerGroup: 3,
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
.offer {
    position: relative;
    img {
        padding: 1rem;
        width: 100%;
        object-fit: contain;
    }
    .offer__extras {
        display: none;
    }
}

.swiper,
.swiper-wrapper {
    min-width: 100%;
}
.swiper-slide {
    max-width: 370px;
}
.swiper-pagination {
    margin-top: 5rem;
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

@media only screen and (min-width: 769px) {
    .offer {
        .offer__extras {
            display: flex;
            position: absolute;
            justify-content: space-between;
            width: 180px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
</style>