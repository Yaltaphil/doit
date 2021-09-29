<template>
    <div ref="progressBar" class="progress-bar">
        <p>
            <slot>game</slot> <span>{{ value }}</span>
        </p>
        <div class="game-bar">
            <div class="scale"></div>
            <div ref="gameRate" class="rate"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            default: 0,
        },
        color: {
            type: String,
            default: 'white',
        },
    },

    computed: {
        rate() {
            return (this.value / 20) * 100
        },
    },

    mounted() {
        this.showGameRating()
    },

    methods: {
        showGameRating() {
            this.$refs.gameRate.style.background = this.color
            this.$refs.progressBar.style.color = this.color
            setTimeout(() => {
                this.$refs.gameRate.style.width = `${this.rate}%`
            }, 0)
        },
    },
}
</script>

<style lang="scss" scoped>
.progress-bar {
    width: 100%;
    position: relative;
    height: 30px;
    margin-top: 2rem;
    & p {
        & span {
            float: right;
        }
    }
    & .game-bar {
        & .scale {
            position: absolute;
            bottom: 1px;
            left: 0;
            height: 2px;
            width: 100%;
            background: #2b353f;
        }
        & .rate {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 4px;
            width: 0;
            background: white;
            border-radius: 2px;
            z-index: 1;
            transition: width 1.5s ease-out 1s;
            box-shadow: 1px 1px 8px;
        }
    }
}
</style>