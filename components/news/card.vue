<template>
    <div
        class="frame"
        :class="{ bigCard: big }"
        @click="$emit('selected', news)"
    >
        <div class="image">
            <img :src="news.src" alt="" />
        </div>
        <div class="title">{{ news.title }}</div>
        <div class="info">
            {{ news.description }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        news: { type: Object, default: () => {} },
        big: { type: Boolean },
    },
}
</script>

<style lang="scss" scoped>
.frame {
    width: 100%;
    height: 358px;
    overflow: hidden;
    background: #10171f;
    &:hover {
        cursor: pointer;
    }
    .image {
        width: 100%;
        height: 160px;
        img {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            object-fit: cover;
        }
    }
    .title {
        height: 70px;
        padding: 1rem;
        font-weight: bold;
        font-style: normal;
        font-size: 18px;
        line-height: 27px;
        color: #f5f5f5;
        opacity: 0.88;
    }
    .info {
        height: 154px;
        margin-top: 1rem;
        padding: 1rem;
        font-size: 16px;
        line-height: 150%;
        color: #67707a;
    }
}

@media only screen and (min-width: 769px) {
    .frame {
        width: min(288px, 22%);
        height: 490px;
        .image {
            width: 100%;
            height: 240px;
        }
    }

    .bigCard {
        width: min(600px, 46%);
        height: 328px;
        .image {
            width: 208px;
            height: 100%;
            float: left;
            margin-right: 1rem;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .title {
            font-weight: bold;
            font-size: 22px;
            line-height: 130%;
            height: 70px;
            padding: 1rem;
            font-style: normal;
        }
        .info {
            height: 154px;
            padding: 1rem;
            font-size: 16px;
            line-height: 150%;
            color: #5e656b;
        }
    }
}
</style>