<template>
    <nav>
        <nuxt-link
            v-for="(item, i) in items"
            :key="i"
            class="link"
            :to="item.to"
        >
            <img class="link__icon" :src="item.src" :alt="item.title" />
        </nuxt-link>
    </nav>
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
nav {
    position: fixed;
    bottom: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: #0f1215;
    height: 55px;
    width: 100%;
    border-top: 1px solid #20252b;
    & .link {
        & :hover {
            transform: scale(1.2);
            filter: drop-shadow(2px 2px 12px rgb(247, 243, 3));
        }
        & .link__icon {
            width: 22px;
            height: 22px;
            flex-grow: 0;
        }
    }
}

@media only screen and (min-width: 769px) {
    nav {
        top: 0;
        flex-direction: column;
        align-items: center;
        padding: 184px 40px;
        width: 112px;
        height: 960px;
        gap: 80px;
        border-right: 1px solid #20252b;
        & .link {
            & .link__icon {
                width: 32px;
                height: 32px;
                flex-grow: 0;
            }
        }
    }
}
</style>