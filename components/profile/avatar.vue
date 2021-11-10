<template>
    <div class="frame">
        <img :src="src" alt="" />
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            default: '',
        },
    },
}
</script>

<style lang="scss" scoped>
.frame {
    width: 123px;
    height: 120px;
    border: 1px solid black;
    background: #000;
    border-radius: 4px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
</style>