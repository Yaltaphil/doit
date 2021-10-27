<template>
    <div class="page-content">
        <div class="info">
            <div class="user-info">
                <ProfileAvatar>
                    <img src="~/assets/img/photo-player.png" alt="photo" />
                </ProfileAvatar>
                <div class="user-data">
                    <p class="gray-text">{{ user.name }}</p>
                    <h3 class="white-text">{{ user.nickName }}</h3>
                    <nuxt-link to="/"
                        ><p>
                            {{ user.team.toUpperCase() }}
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
                        @click="menuHandler(menuItem)"
                    >
                        {{ menuItem }}
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <NuxtChild keep-alive :key="$route.name" />
        </div>
    </div>
</template>

<script>
import User from '~/mocks/user.js'

export default {
    name: 'PlayerProfile',

    asyncData() {
        return {
            // load user details
        }
    },

    data() {
        return {
            user: User,
            menuItems: [
                'Profile',
                'Panel',
                'Settings',
                'About me',
                'Preferences',
                'Awards and medals',
                'Premium',
                'Support',
                'Team',
                'Statistics',
            ],
        }
    },

    methods: {
        menuHandler(item) {
            this.$router.push(`/player/${item.toLowerCase()}`)
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
            &::marker {
                font-size: 1.5rem;
                font-weight: bolder;
            }
            &:hover {
                color: #37b7fa;
                list-style-type: disc;
                cursor: pointer;
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

.slide-enter-active,
.slide-leave-active {
    transition: opacity 1.75s;
}
.slide-enter,
.slide-leave-active {
    opacity: 0;
    transform: translateX(-20px);
}
</style>