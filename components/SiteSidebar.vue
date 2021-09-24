<template>
    <menu>
        <nuxt-link
            v-for="(item, i) in items"
            :key="i"
            class="link"
            :to="item.to"
        >
            <img class="link__icon" :src="item.src" :alt="item.title" />
        </nuxt-link>
    </menu>
</template>

<script>
export default {
    name: 'SiteSidebar',

    data() {
        return {
            items: [
                {
                    title: 'knight',
                    src: require('@/assets/img/001-knight.svg'),
                    to: '/',
                },
                {
                    title: 'trophy',
                    src: require('@/assets/img/002-trophy.svg'),
                    to: '/',
                },
                {
                    title: 'network',
                    src: require('@/assets/img/003-network.svg'),
                    to: '/',
                },
                {
                    title: 'growth',
                    src: require('@/assets/img/004-growth.svg'),
                    to: '/',
                },
                {
                    title: 'megaphone',
                    src: require('@/assets/img/005-megaphone.svg'),
                    to: '/',
                },
                {
                    title: 'target',
                    src: require('@/assets/img/006-target.svg'),
                    to: '/',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    align-items: center;
    padding: 184px 40px;
    width: 112px;
    height: 960px;
    margin: 0px 0px;
    gap: 80px;
}

.link:hover {
    transform: scale(1.2);
    filter: drop-shadow(2px 2px 16px rgb(247, 243, 3));
}

.link__icon {
    width: 32px;
    height: 32px;
    flex-grow: 0;
}
</style>