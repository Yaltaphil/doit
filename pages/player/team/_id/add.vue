<template>
    <div class="sheet">
        <h2>
            Add players to
            {{ teams[teamIndex].title }}
            team:
        </h2>

        <div class="team">
            <span v-for="player in teams[teamIndex].players" :key="player">
                {{ getPlayerById(player).nickName }}</span
            >
        </div>

        <BaseSelect
            v-model="candidate"
            label="nickName"
            :options="players"
            :reduce="(user) => user.id"
            placeholder="choose player"
            >Select new team member</BaseSelect
        >
        <div class="controls">
            <BaseButton class="secondary white block" @click="add"
                >Add selected player</BaseButton
            >
        </div>
        <div class="controls">
            <BaseButton class="primary white block" @click="save"
                >Save and exit</BaseButton
            >
        </div>
    </div>
</template>

<script>
import { find } from 'lodash/find'
import { findIndex } from 'lodash/findIndex'

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
            changed: false,
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

            if (!this.teams[this.teamIndex].players)
                this.$set(this.teams[this.teamIndex], 'players', []) // adding reactive array

            if (this.teams[this.teamIndex].players.includes(this.candidate)) {
                this.$toast.error('Player is already in your team!')
                this.candidate = null
                return
            }

            this.teams[this.teamIndex].players.push(this.candidate)
            this.$toast.success('New member added!')
            this.changed = true
        },

        async save() {
            if (this.changed) {
                await this.$db.write(
                    `/teams/${this.teamIndex}`,
                    this.teams[this.teamIndex]
                )
                this.$toast.success('Changes committed!')
            }

            this.$router.go(-1)
        },
    },
}
</script>

<style lang="scss" scoped>
.sheet {
    display: grid;
    gap: 5rem;

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
        min-width: 80%;
        margin: auto;
    }
}
</style>