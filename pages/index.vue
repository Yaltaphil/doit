<template>
    <div>
        <section>triangles</section>

        <SliderBlock>
            <template #header> <h1>Games</h1></template>
            <template #selector>
                <div class="tabs">
                    <div v-for="tab in tabs" :key="tab.name" class="tabs__item">
                        {{ tab.name }}
                    </div>
                </div>
            </template>
            <template #slider>
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="(item, i) in games" :key="i">
                        <GamesCard>
                            <div class="game-card">
                                <img
                                    class="pic"
                                    alt="game image"
                                    :src="item.src"
                                />
                                <h2 class="caption white-text"></h2>
                            </div> </GamesCard
                    ></swiper-slide>
                </swiper>
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

            swiperOptions: {
                slidesPerView: 1,
                spaceBetween: 28,
                // loop: true,
                autoplay: {
                    delay: 15000,
                },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },
                centeredSlides: true,
                centeredSlidesBounds: true,
                breakpoints: {
                    // when window width is >= 640px
                    320: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 640px
                    768: {
                        slidesPerView: 4,
                    },
                },
            },
        }
    },

    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        },
    },
}
</script>


<style lang="scss" scoped>
.swiper-slide {
    max-width: 300px;
}

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