<template>
    <div class="profile">
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
    name: 'Profile',

    transition: {
        name: 'slide',
    },

    data() {
        return {
            user: User,
        }
    },
}
</script>

<style lang="scss" scoped>
.profile {
    display: flex;
    flex-flow: row wrap;
    gap: 80px;
    justify-content: center;
}

.profile-table {
    tr {
        height: 32px;
        td {
            width: 160px;
        }
    }
}
.user-awards {
    width: 100%;
    min-width: 320px;
}

// .slide-enter-active,
// .slide-leave-active {
//     transition: opacity 1.75s;
// }
// .slide-enter,
// .slide-leave-active {
//     opacity: 0;
//     transform: translateX(-20px);
// }
</style>