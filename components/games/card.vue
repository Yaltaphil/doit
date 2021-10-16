<template>
    <div class="game-card" @click="$emit('selected', game)">
        <img class="pic" :src="game.src" alt="game-image" />
        <h2 class="caption white-text">{{ game.title }}</h2>
    </div>
</template>

<script>
export default {
    props: { game: { type: Object, required: true, default: () => {} } },
}
</script>

<style lang="scss" scoped>
.game-card {
    width: 100%;
    height: 128px;
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
        bottom: 2rem;
        text-align: center;
        width: 100%;
        z-index: 1;
    }
}
@media only screen and (min-width: 769px) {
    .game-card {
        width: 300px;
        height: 400px;
        .caption {
            bottom: 3rem;
        }
    }
}
</style>