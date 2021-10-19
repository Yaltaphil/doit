<template>
    <div class="frame" @click="$emit('selected', stream)">
        <div class="image">
            <img :src="stream.src" atl="" />
        </div>
        <div class="title">{{ stream.title }}</div>

    </div>
</template>

<script>
export default {
    props: { stream: { type: Object, default: () => {} } },
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
    &:hover {
        cursor: pointer;
    }
    .image {
        width: 370px;
        height: 200px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 2px 2px 0px 0px;
        }
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