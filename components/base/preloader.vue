<template>
    <div class="dimmer">
        <div class="loader"></div>
    </div>
</template>

<style lang="scss" scoped>
.dimmer {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 499;
    width: 100%;
    height: 100%;
    background: radial-gradient(#000000, #052a61ee);
}
.loader {
    width: 80px;
    height: 80px;
    background-image: url('~/assets/img/doit_triangle.svg');
    animation: spin 1.25s ease-in-out infinite;
    z-index: 500;
    position: absolute;
    top: 45%;
    left: 47%;
    transform: translate(-50%, -50%);
}
@keyframes spin {
    0% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(360deg);
    }
}
</style>