<template>
    <div class="main">
        <h1 class="header">Premium</h1>
        <div class="slider">
            <swiper ref="premiumSwiper" :options="swiperOptions" class="swiper">
                <swiper-slide>
                    <div class="card free">
                        <div class="card__title">FREE</div>
                        <div class="card__price">$0 per month</div>
                        <div class="card__info">
                            A night to remember for Brazil. Drama is never too
                            far away at Copa America and this final had it by
                            the bucketlad. Thanks for your company. A night to
                            remember for Brazil. Drama is never too far away at
                            Copa America and this final had it by the bucketlad.
                            Thanks for your company.
                        </div>
                        <div class="card__button">
                            <BaseButton class="primary block">
                                Sign up</BaseButton
                            >
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card pro">
                        <div class="card__title">PRO</div>
                        <div class="card__price">$10 per month</div>
                        <div class="card__info">
                            A night to remember for Brazil. Drama is never too
                            far away at Copa America and this final had it by
                            the bucketlad. Thanks for your company. A night to
                            remember for Brazil. Drama is never too far away at
                            Copa America and this final had it by the bucketlad.
                            Thanks for your company.
                        </div>
                        <div class="card__button">
                            <BaseButton class="primary block"
                                >Sign up</BaseButton
                            >
                        </div>
                    </div></swiper-slide
                >
                <swiper-slide>
                    <div class="card organizer">
                        <div class="card__title">Organizer</div>
                        <div class="card__price">$150 per month</div>
                        <div class="card__info">
                            A night to remember for Brazil. Drama is never too
                            far away at Copa America and this final had it by
                            the bucketlad. Thanks for your company. A night to
                            remember for Brazil. Drama is never too far away at
                            Copa America and this final had it by the bucketlad.
                            Thanks for your company.
                        </div>
                        <div class="card__button">
                            <BaseButton class="primary block">
                                Sign up</BaseButton
                            >
                        </div>
                    </div></swiper-slide
                >

                <div slot="pagination" class="swiper-pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Premium',

    data() {
        return {
            swiperOptions: {
                watchOverflow: false,
                slidesPerView: 1,
                centeredSlides: true,
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: '.swiper-pagination',
                },
                breakpoints: {
                    768: {
                        centeredSlides: false,
                        centeredSlidesBounds: false,
                        spaceBetween: 14,
                        slidesPerView: 3,
                        watchOverflow: true,
                    },
                },
            },
        }
    },

    computed: {
        premiumSwiper() {
            return this.$refs.premiumSwiper.$swiper
        },
    },
}
</script>

<style lang="scss" scoped>
.header {
    display: none;
}

.swiper-slide {
    height: 550px;
}

.main {
    padding: 2rem;
}

.card {
    width: calc(100% - 4rem);

    height: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 2.5rem;
    padding: 1.75rem;

    .card__title {
        font-style: normal;
        font-weight: bold;
        font-size: 42px;
        line-height: 100%;
    }
    .card__price {
        font-weight: bold;
        font-size: 22px;
        line-height: 100%;
        color: #f5f5f5;
        opacity: 0.88;
    }
    .card__info {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 150%;
        color: #67707a;
    }
    .card__button {
        align-self: center;
        width: 100%;
    }
}

.free {
    background: radial-gradient(
            250.9% 252.09% at -142.43% -152.09%,
            rgba(20, 114, 255, 0.808) 35%,
            rgba(20, 114, 255, 0) 95.84%
        ),
        #181b1f;
    .card__title {
        color: #095fe0;
    }
}

.pro {
    background: radial-gradient(
            250.9% 252.09% at -142.43% -152.09%,
            rgba(245, 200, 31, 0.8) 35%,
            rgba(245, 200, 31, 0) 95.84%
        ),
        #181b1f;
    .card__title {
        color: #ffd321;
    }
}

.organizer {
    background: radial-gradient(
            242.43% 252.09% at -142.43% -152.09%,
            rgba(66, 232, 128, 0.8) 35%,
            rgba(66, 232, 128, 0) 95%
        ),
        #181b1f;
    .card__title {
        color: #46f48c;
    }
}

@media only screen and (min-width: 769px) {
    .header {
        display: block;
        margin: 3rem 0;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 56px;
        color: #ffffff;
    }
    .main {
        padding: 0;
    }

    .card {
        margin: 0 1rem;
        min-width: calc(100% / 3);
        max-width: 400px;
        height: 540px;
        .card__button {
            align-self: center;
            width: 50%;
        }
    }
}
</style>