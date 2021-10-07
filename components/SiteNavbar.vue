<template>
    <header class="navbar">
        <div class="menu" :class="{ 'burger-menu': showBurgerMenu }">
            <div class="burger" @click="showBurgerMenu = !showBurgerMenu">
                <img
                    v-if="!showBurgerMenu"
                    src="~/assets/img/burger.svg"
                    alt="burger_menu"
                />
                <img v-else src="~/assets/img/mdi_menu.svg" alt="burger_menu" />
            </div>
            <BaseLogo class="logo" />
            <nuxt-link
                v-for="item in items"
                :key="item"
                class="menu__item"
                :to="item.toLowerCase()"
                @click.native="showBurgerMenu = false"
            >
                {{ item }}
            </nuxt-link>
            <div class="menu__extras">
                <BaseButton
                    v-if="!isAuth"
                    class="secondary"
                    :class="{ block: showBurgerMenu }"
                    @click="
                        $router.push('/login')
                        showBurgerMenu = false
                    "
                    >Login</BaseButton
                >
                <BaseButton
                    v-if="!isAuth"
                    class="primary"
                    :class="{ block: showBurgerMenu }"
                    @click="
                        $router.push('/signup')
                        showBurgerMenu = false
                    "
                    >Sign up</BaseButton
                >
                <ProfileBadgeMenu
                    v-if="isAuth && !showBurgerMenu"
                    @logout-call="logout"
                />
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'SiteNavbar',

    data() {
        return {
            items: ['Play', 'News', 'Games', 'Shop', 'Sponsorship'],
            showBurgerMenu: false,
            isAuth: null,
        }
    },

    mounted() {
        this.isAuth = this.$fire.auth.currentUser
    },

    methods: {
        async logout() {
            try {
                await this.$fire.auth.signOut()
                this.isAuth = this.$fire.auth.currentUser
                this.$toast.show('Signed out...')
            } catch (e) {
                this.$toast.show('Problem to sign out!')
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.navbar {
    height: 106px;
    margin-left: 0;
    .burger {
        width: 24px;
        height: 24px;
        z-index: 100;
        cursor: pointer;
        margin-top: 1rem;
        margin-left: 1rem;
        &:hover {
            transform: scale(1.05);
            filter: drop-shadow(2px 5px 10px rgb(247, 243, 3));
        }
    }
    .logo {
        width: 56px;
        height: 48px;
        margin-right: 1rem;
        margin-top: 1rem;
        cursor: pointer;
        &:hover {
            transform: scale(1.05);
            filter: drop-shadow(2px 4px 8px rgb(247, 243, 3));
        }
    }
    .menu {
        z-index: 100;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-right: 0.5rem;
        .menu__item {
            display: none;
        }
        .menu__extras {
            display: none;
        }
    }
    .burger-menu {
        position: absolute;
        overflow: hidden;
        padding-top: 80px;
        margin: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-content: flex-start;
        background: #0f1215;
        .menu__item {
            display: block;
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
        .menu__extras {
            position: relative; // for userbadge
            width: 80%;
            padding-top: 80px;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .logo {
            position: absolute;
            top: 0;
            right: 0;
        }
        .burger {
            position: absolute;
            top: 0;
            left: 0;
        }
    }
}

@media only screen and (min-width: 769px) {
    .navbar {
        margin-left: 112px;
        .logo {
            width: 88px;
            height: 80px;
        }
        .burger {
            display: none;
        }
        .menu {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .menu__item {
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
            .menu__extras {
                display: flex;
                flex-direction: row;
                gap: 10px;
                min-width: 210px;
            }
        }
    }
}
</style>