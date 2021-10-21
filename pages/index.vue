<template>
    <div class="main">
        <section class="offer">
            <img src="~/assets/img/offer.png" alt="offer" />
            <div class="offer__extras">
                <BaseButton
                    v-if="!$auth.loggedIn"
                    class="secondary white"
                    @click="$router.push('/login')"
                    >Login</BaseButton
                >
                <BaseButton
                    v-if="!$auth.loggedIn"
                    class="primary"
                    @click="$router.push('/signup')"
                    >Sign up</BaseButton
                >
            </div>
        </section>

        <div class="spacer"></div>

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

        <div class="spacer"></div>

        <SliderBlock>
            <template #header> <h1>News</h1></template>
            <template #selector>
                <MainTabs :tabs="tabs" @selected="newsPattern = $event" />
            </template>
            <template #slider>
                <swiper ref="newsSwiper" :options="swiperOptions">
                    <swiper-slide v-for="(item, i) in filteredNews" :key="i">
                        <NewsSliderCard :news="item"
                    /></swiper-slide>
                    <div slot="pagination" class="swiper-pagination"></div>
                </swiper>
            </template>
        </SliderBlock>

        <div class="spacer"></div>

        <SliderBlock>
            <template #header>
                <h1>
                    Streams
                    <img
                        class="blink"
                        src="~/assets/img/stream-on-air.png"
                        alt=""
                    />
                </h1>
            </template>
            <template #selector>
                <MainTabs :tabs="tabs" @selected="streamsPattern = $event" />
            </template>
            <template #slider>
                <swiper
                    ref="streamsSwiper"
                    :options="swiperOptions"
                    class="swiper"
                >
                    <swiper-slide v-for="i in numberOfStreamsSlides" :key="i">
                        <StreamCard
                            :streams="streamsGroup(i)"
                            @selected="$toast.success($event)"
                        />
                    </swiper-slide>
                    <div slot="pagination" class="swiper-pagination"></div>
                </swiper>
            </template>
        </SliderBlock>

        <div class="spacer"></div>

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

        <div class="spacer"></div>

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
        const streams = (await $db.read('/streams')) || []
        const news = (await $db.read('/news')) || []
        return { games, partners, tournaments, streams, news }
    },

    data() {
        return {
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
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                spaceBetween: 30,
                loop: false,
                centeredSlides: true,
                centeredSlidesBounds: true,
                autoplay: {
                    delay: 10500,
                },
                freeMode: {
                    enabled: true,
                    sticky: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
                breakpoints: {
                    768: {
                        centeredSlides: false,
                        centeredSlidesBounds: false,
                        spaceBetween: 30,
                        slidesPerView: 'auto',
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
        numberOfStreamsSlides() {
            return Math.ceil(this.filteredStreams.length / 3)
        },

        filteredGames() {
            return this.filterArray(this.games, this.gamesPattern)
        },
    },

    methods: {
        filterArray(arr, pattern) {
            if (!Array.isArray(arr)) return arr
            return arr.filter((item) =>
                item.title?.toLowerCase().includes(pattern.toLowerCase())
            )
        },

        streamsGroup(groupIndex) {
            const first = (groupIndex - 1) * 3
            const last = (groupIndex - 1) * 3 + 3
            return this.filteredStreams.slice(first, last) || []
        },
    },
}
</script>


<style lang="scss" scoped>
.main {
    background: linear-gradient(
            180deg,
            #0f1215 0%,
            rgba(15, 18, 21, 0) 32.81%,
            rgba(15, 18, 21, 0) 79.69%,
            #0f1215 100%
        ),
        url('@/assets/img/main_bg.png'), #0f1215;
}

.spacer {
    height: 3rem;
}

.blink {
    animation: blink-animation 1s steps(5, start) infinite;
}
@keyframes blink-animation {
    to {
        opacity: 0.6;
    }
}

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
    z-index: 2;
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