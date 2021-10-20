<template>
    <div class="frame">
        <div class="image">
            <div class="image1" @click="$emit('selected')">
                <img :src="source(streams[0])" alt="" />
            </div>
            <div class="image2" @click="$emit('selected')">
                <img :src="source(streams[1])" alt="" />
            </div>
            <div class="image3" @click="$emit('selected')">
                <img :src="source(streams[2])" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: { streams: { type: Array, default: () => [] } },

    methods: {
        source(x) {
            return x?.src || this.stream[0].src
        },
    },
}
</script>

<style lang="scss" scoped>
.frame {
    width: 370px;
    height: 424px;
    background: #e1e6eb;
    border: 2px solid #e1e6eb;
    border-radius: 2px;
    filter: drop-shadow(0px 16px 44px rgba(0, 0, 0, 0.12));
    border-radius: 2px 2px 0px 0px;
    &:hover {
        cursor: pointer;
    }
    .image {
        width: 100%;
        height: 100%;
        position: relative;
        .image1 {
            position: absolute;
            width: 100%;
            height: 50%;
            top: 0;
            left: 0;
        }
        .image2 {
            position: absolute;
            width: 50%;
            height: 50%;
            top: 50%;
            left: 0;
        }
        .image3 {
            position: absolute;
            width: 50%;
            height: 50%;
            top: 50%;
            right: 0;
        }
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .title {
        font-weight: bold;
        font-size: 22px;
        line-height: 130%;
        height: 70px;
        padding: 1rem;
        font-style: normal;
        color: #0f1215;
    }
}
</style>