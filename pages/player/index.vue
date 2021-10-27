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

        <div class="profile-table">
            <p class="section-header">Profile</p>
            <table>
                <tbody>
                    <tr>
                        <td class="gray-text">ID</td>
                        <td class="white-text">{{ user.id }}</td>
                    </tr>
                    <tr>
                        <td class="gray-text">Name</td>
                        <td class="white-text">{{ user.name }}</td>
                    </tr>
                    <tr>
                        <td class="gray-text">Nickname</td>
                        <td class="white-text">{{ user.nickName }}</td>
                    </tr>
                    <tr>
                        <td class="gray-text">With us from</td>
                        <td class="white-text">{{ user.withUsFrom }}</td>
                    </tr>
                    <tr>
                        <td class="gray-text">Sex / Age</td>
                        <td class="white-text">
                            {{ user.sex + ' / ' + user.age }}
                        </td>
                    </tr>
                    <tr>
                        <td class="gray-text">Nationality</td>
                        <td class="white-text">{{ user.nationality }}</td>
                    </tr>
                    <tr>
                        <td class="gray-text">Country</td>
                        <td class="white-text">{{ user.country }}</td>
                    </tr>
                    <tr>
                        <td class="gray-text">Web-site</td>
                        <td class="white-text">
                            <a
                                target="_blank"
                                class="white-text"
                                :href="user.webSite"
                                >{{ user.webSite }}</a
                            >
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="user-awards">
            <p class="section-header">Level and awards</p>
            <ProfileGameProgress
                v-for="item in user.games"
                :key="item.title"
                :value="item.value"
                :color="item.color"
                >{{ item.title }}</ProfileGameProgress
            >
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
                'Number two',
                'About me',
                'Number four',
                'Awards and medals',
                'Premium',
                'Number seven',
                'Number eight',
                'Number nine',
            ],
        }
    },

    methods: {
        menuHandler(item) {
            console.log(item)
            this.$router.push(`/${item}`)
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

    .profile-table {
        flex: 3;
        tr {
            height: 32px;
            td {
                width: 160px;
            }
        }
    }
    .user-awards {
        flex: 4;
        width: 100%;
        // min-width: 200px;
    }
}

@media only screen and (min-width: 769px) {
    .page-content {
        flex-direction: row;
        align-items: flex-start;
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
</style>