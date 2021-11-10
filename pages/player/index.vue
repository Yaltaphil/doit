<template>
    <div class="profile">
        <div v-if="user" class="profile-table">
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

        <div v-if="games" class="user-awards">
            <p class="section-header">Level and awards</p>
            <ProfileGameProgress
                v-for="item in user.results"
                :key="item.gameId"
                :value="item.value"
                :color="getRandomColor()"
                >{{ getGameTitle(item.gameId) }}</ProfileGameProgress
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',

    transition: {
        name: 'slide',
    },

    data() {
        return {
            user: null,
            games: null,
        }
    },

    async fetch() {
        this.user = await this.$db.read('/users/' + this.$auth.user.localId)
        this.games = await this.$db.read('/games')
    },

    methods: {
        getRandomColor() {
            return `hsl(${Math.floor(255 * Math.random())},100%,70%)`
        },

        getGameTitle(id) {
            return this.games.filter((item) => item.id === id)[0].title
        },
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