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
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
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
                            <a class="white-text" :href="user.webSite">{{
                                user.webSite
                            }}</a>
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
    data() {
        return {
            user: User,
        }
    },
}
</script>

<style lang="scss" scoped>
.page-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    gap: 2.5rem;
    & .user-info {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        & .user-data {
            padding: 0 1rem;
            & img {
                width: 40px;
                height: 40px;
            }
        }
    }
    & .profile-menu {
        display: none;
    }

    & .profile-table {
        & tr {
            width: 100%;
            height: 32px;
            & td {
                width: 172px;
            }
        }
    }
    & .user-awards {
        width: 100%;
        min-width: 160px;
    }
}

@media only screen and (min-width: 769px) {
    .page-content {
        flex-direction: row;
        align-items: flex-start;
        & .info {
            min-width: 250px;
            border-right: 1px solid #1a1f24;
        }
        & .user-info {
            max-width: 400px;
            flex-direction: column;
        }
        & .profile-menu {
            background: tomato;
            display: block;
            width: 100%;
        }
        & .profile-table {
            // max-width: 365px;
        }
        & .user-awards {
            // max-width: 408px;
        }
    }
}
</style>