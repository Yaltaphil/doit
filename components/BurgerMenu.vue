<template>
    <header class="overlay">
        <ul class="menu">
            <nuxt-link
                v-for="item in items"
                :key="item"
                class="menu__item"
                :to="item.toLowerCase()"
            >
                {{ item }}
            </nuxt-link>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'BurgerMenu',

    data() {
        return {
            items: ['Play', 'News', 'Games', 'Shop', 'Sponsorship'],
        }
    },
}
</script>

<style lang="scss" scoped>
.overlay {
    height: 500px;
    margin-left: 0;
    & .burger {
        width: 24px;
        height: 24px;
        z-index: 1;
        cursor: pointer;
        &:hover {
            transform: scale(1.05);
            filter: drop-shadow(2px 5px 10px rgb(247, 243, 3));
        }
    }
    & .logo {
        width: 56px;
        height: 48px;
        padding-right: 1rem;
        cursor: pointer;
        &:hover {
            transform: scale(1.05);
            filter: drop-shadow(2px 5px 10px rgb(247, 243, 3));
        }
    }
    & .menu {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        & .menu__item {
            display: none;
        }
        & .menu__extras {
            display: none;
        }
    }
}
</style>