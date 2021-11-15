<template>
    <div class="sheet">
        <h2>Add players</h2>

        <h3>{{ teams[teamIndex].title }} team:</h3>
        <div class="team">
            <span v-for="player in teams[teamIndex].players" :key="player">
                {{ getPlayerById(player).name }}</span
            >
        </div>

        <BaseSelect
            v-model="candidate"
            label="name"
            :options="players"
            :reduce="(user) => user.id"
            placeholder="choose player"
            >Select new team member</BaseSelect
        >

        <div class="controls">
            <BaseButton @click="add">Add selected player</BaseButton>
            <BaseButton @click="save">Save and exit</BaseButton>
        </div>
    </div>
</template>

<script>
import { find, findIndex } from 'lodash'

export default {
    name: 'AddPlayer',

    async asyncData({ $db }) {
        const [teams, users] = await Promise.all([
            $db.read('/teams'),
            $db.read('/users'),
        ])
        return { teams, users }
    },

    data() {
        return {
            candidate: null,
        }
    },

    computed: {
        teamIndex() {
            return findIndex(this.teams, { id: this.$route.params.id })
        },

        players() {
            return Object.values(this.users)
        },
    },

    methods: {
        getPlayerById(playerId) {
            return find(this.users, { id: playerId })
        },

        add() {
            if (!this.candidate) return

            if (this.teams[this.teamIndex].players.includes(this.candidate)) {
                this.$toast.error('Player is in your team already!')
                this.candidate = null
                return
            }

            this.teams[this.teamIndex].players.push(this.candidate)
            this.$toast.success(
                this.getPlayerById(this.candidate) + '  with us now!!!'
            )
        },

        async save() {
            await this.$db.write(
                `/teams/${this.teamIndex}`,
                this.teams[this.teamIndex]
            )
            this.$toast.success('Changes commited!')
            this.$router.go(-1)
        },
    },
}
</script>

<style lang="scss" scoped>
.sheet {
    display: grid;
    gap: 3rem;
    .team {
        display: flex;
        flex-flow: row wrap;
        gap: 3rem;
        span {
            background: rgb(66, 157, 180);
            border-radius: 2rem;
            padding: 1rem 2rem;
        }
    }
    .controls {
        display: flex;
        gap: 6rem;
    }
}
</style>