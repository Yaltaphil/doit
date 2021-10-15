<template>
    <div class="frame" @click="$emit('selected', tournament)">
        <div class="image">
            <img :src="tournament.src" alt="" />
        </div>
        <div class="title">{{ tournament.title }}</div>
        <div class="info">
            <div class="info__item">
                <div class="info__item__up">Start</div>
                <div class="info__item__down">{{ tournament.start }}</div>
            </div>
            <div class="info__item">
                <div class="info__item__up">Mode</div>
                <div class="info__item__down">{{ tournament.mode }}</div>
            </div>
            <div class="info__item">
                <div class="info__item__up">Slot</div>
                <div class="info__item__down">{{ tournament.slot }}</div>
            </div>
            <div class="info__item">
                <div class="info__item__up">Pool</div>
                <div class="info__item__down">{{ tournament.pool }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: { tournament: { type: Object, default: () => {} } },
}
</script>

<style lang="scss" scoped>
.frame {
    width: 370px;
    height: 388px;
    background: #151a1f;
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
        }
    }
    .title {
        font-weight: bold;
        font-size: 22px;
        line-height: 130%;
        color: #e6e8eb;
        height: 70px;
        padding: 1rem;
    }
    .info {
        height: 100px;
        padding: 1rem;
        display: flex;
        justify-content: space-around;
        &__item {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: flex-start;
            &__up {
                font-size: 16px;
                line-height: 100%;
                color: #8996a3;
            }
            &__down {
                padding-top: 0.5rem;
                font-weight: bold;
                font-size: 16px;
                line-height: 100%;
                text-align: right;
                color: #e6e8eb;
            }
        }
    }
}
</style>