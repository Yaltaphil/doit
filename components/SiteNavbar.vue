<template>
    <div>
        <menu class="navbar">
            <BaseLogo />
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
            <slot name="menu-extras"></slot>
        </menu>
    </div>
</template>

<script>
export default {
    name: 'SiteNavbar',

    data() {
        return {
            items: ['Play', 'News', 'Games', 'Shop', 'Sponsorship'],
            showMenu: true,
        }
    },
}
</script>

<style lang="scss" scoped>
.navbar {
    top: 0;
    height: 106px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
}

.menu {
    display: flex;
    gap: 56px;
    & .menu__item {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        color: #e6e6e6;
    }
}
</style>