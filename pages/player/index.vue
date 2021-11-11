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
                        <td class="white-text">
                            {{ Date($auth.user.createdAt) }}
                        </td>
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

    async asyncData({ app, $db }) {
        const games = await $db.read('/games')
        const user = await $db.read('/users/' + app.$auth.user.localId)
        return { games, user }
    },

    methods: {
        getRandomColor() {
            return `hsl(${Math.floor(359 * Math.random())},99%, ${Math.floor(
                30 + 40 * Math.random()
            )}%)`
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