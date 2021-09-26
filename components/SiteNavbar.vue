<template>
    <header class="navbar">
        <ul class="menu">
            <div class="burger" @click="showBurgerMenu = !showBurgerMenu">
                <img src="~/assets/img/burger.svg" alt="burger_menu" />
            </div>
            <BaseLogo class="logo" />
            <nuxt-link
                v-for="item in items"
                :key="item"
                class="menu__item"
                :to="item.toLowerCase()"
            >
                {{ item }}
            </nuxt-link>
            <slot v-if="!showBurgerMenu && true" class="menu__extras"></slot>
        </ul>

        <ul v-if="showBurgerMenu" class="burger-menu">
            <nuxt-link
                v-for="item in items"
                :key="item"
                class="burger-menu__item"
                :to="item.toLowerCase()"
                @click.native="showBurgerMenu = false"
            >
                {{ item }}
            </nuxt-link>

            <slot class="burger-menu__extras"> </slot>
        </ul>
    </header>
</template>

<script>
// TODO if no user logged in
export default {
    name: 'SiteNavbar',

    data() {
        return {
            items: ['Play', 'News', 'Games', 'Shop', 'Sponsorship'],
            showBurgerMenu: false,
        }
    },

    methods: {},
}
</script>

<style lang="scss" scoped>
.burger-menu {
    position: absolute;
    padding: 0;
    margin: 0;
    top: 80px;
    height: 80%;
    width: 98%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: flex-start;
    align-items: center;
    z-index: 2;
    background: #0f1215;

    & .burger-menu__item {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 100%;
        text-align: center;
        color: #f5f5f5;
        text-decoration: none;
        &:hover {
            transform: scale(1.02);
            filter: drop-shadow(2px 2px 5px rgb(247, 243, 3));
        }
    }
    & .burger-menu__extras {
        padding-top: 84px;
    }
}

.navbar {
    height: 106px;
    margin-left: 0;
    overflow: hidden;
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

@media only screen and (min-width: 769px) {
    .burger-menu {
        display: none;
    }
    .navbar {
        margin-left: 112px;
        & .logo {
            width: 88px;
            height: 80px;
        }
        & .burger {
            display: none;
        }
        & .menu {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            & .menu__item {
                font-family: 'Rubik';
                font-style: normal;
                font-weight: bold;
                font-size: 20px;
                line-height: 24px;
                color: #e6e6e6;
                text-decoration: none;
                display: block;
                &:hover {
                    transform: scale(1.05);
                    filter: drop-shadow(2px 5px 10px rgb(247, 243, 3));
                }
            }
            & .menu__extras {
                display: block;
            }
        }
    }
}
</style>