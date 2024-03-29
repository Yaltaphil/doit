<template>
    <div class="page-content">
        <div class="info">
            <div class="user-info">
                <ProfileAvatar :src="user.avatarUrl" />
                <div class="user-data">
                    <p class="gray-text">{{ user.name }}</p>
                    <h3 class="white-text">{{ user.nickName }}</h3>
                    <nuxt-link to="/"
                        ><p>
                            {{ user.team }}
                        </p>
                    </nuxt-link>
                    <p>
                        <nuxt-link to="/">
                            <img src="~/assets/img/plus-circle.svg" alt="" />
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="~/assets/img/mail.svg" alt="" />
                        </nuxt-link>
                    </p>
                </div>
            </div>

            <div class="profile-menu">
                <ul>
                    <li
                        v-for="(menuItem, i) in menuItems"
                        :key="i"
                        class="white-text"
                        :class="{ activeBullet: isRouteActive(menuItem) }"
                        @click="menuHandler(i)"
                    >
                        {{ menuItem.title }}
                    </li>
                </ul>
            </div>
        </div>

        <div class="child">
            <NuxtChild :key="$route.name" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlayerProfile',

    async asyncData({ app, $db }) {
        const user = (await $db.read('/users/' + app.$auth.user.localId)) || {}
        return { user }
    },

    data() {
        return {
            menuItems: [
                { title: 'Profile', to: '' },
                { title: 'Panel', to: 'panel' },
                { title: 'Deposit', to: 'deposit' },
                { title: 'Withdraw', to: 'withdraw' },
                { title: 'Settings', to: 'settings' },
                { title: 'Teams', to: 'team' },
                { title: 'Premium', to: 'premium' },
                { title: 'Support', to: 'support' },
                { title: 'Statistics', to: 'statistics' },
            ],
        }
    },

    methods: {
        menuHandler(index) {
            this.$router.push(`/player/${this.menuItems[index].to}`)
        },

        isRouteActive(route) {
            return this.$route.path === `/player/${route.to}`
        },
    },
}
</script>

<style lang="scss" scoped>
.page-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-size: 16px;
    gap: 2rem;
    .user-info {
        flex: 2 1 200px;
        display: flex;
        flex-direction: row;
        .user-data {
            padding: 0 1rem;
            img {
                width: 40px;
                height: 40px;
            }
        }
    }
    .profile-menu {
        flex: 2 1 200px;
        display: none;
        li {
            list-style-type: circle;
            line-height: 150%;
            transition: all 50ms;
            &::marker {
                font-size: 1.5rem;
                font-weight: bolder;
            }
            &:hover {
                color: #37b7fa;
                list-style-type: disc;
                cursor: pointer;
            }
            &.activeBullet {
                &::marker {
                    font-size: 1.75rem;
                }
                list-style-type: disc;
                color: #37acfa;
                font-size: 1.35rem;
            }
        }
    }
}

@media only screen and (min-width: 769px) {
    .page-content {
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        .info {
            min-width: 200px;
            border-right: 1px solid #1a1f24;
        }
        .user-info {
            flex-direction: column;
        }
        .profile-menu {
            display: block;
        }
    }
}

.child {
    width: 100%;
}

.slide-enter-active,
.slide-leave-active {
    transition: all 200ms;
}
.slide-enter,
.slide-leave-active {
    opacity: 0;
    transform: translateY(-0.5rem);
}
</style>