<template>
    <div class="panel">
        <h1>Edit Team</h1>
        <form class="form" @submit.prevent="submit">
            <div class="form__group">
                <h3>Basic Info</h3>
                <BaseInput
                    v-model.trim="$v.team.title.$model"
                    placeholder="team name"
                    type="text"
                    :invalid="$v.team.title.$error"
                    :success="!$v.team.title.$error && $v.team.title.$dirty"
                    >Team name</BaseInput
                >
                <BaseInput
                    v-model.trim="$v.team.id.$model"
                    disabled="true"
                    placeholder="ID"
                    type="text"
                    >ID</BaseInput
                >
                <BaseSelect
                    v-model="$v.team.mainGame.$model"
                    label="title"
                    :options="games"
                    :reduce="(game) => game.title"
                    placeholder="select your game"
                    :invalid="$v.team.mainGame.$error"
                    :success="
                        !$v.team.mainGame.$error && $v.team.mainGame.$dirty
                    "
                    >Main Game</BaseSelect
                >

                <BaseInput
                    v-model.trim="$v.team.leader.$model"
                    placeholder="team leader"
                    :invalid="$v.team.leader.$error"
                    :success="!$v.team.leader.$error && $v.team.leader.$dirty"
                    >Team Leader</BaseInput
                >
                <BaseInput
                    v-model="$v.team.password.$model"
                    placeholder="type password here"
                    :invalid="$v.team.password.$error"
                    :success="
                        !$v.team.password.$error && $v.team.password.$dirty
                    "
                    >Join password</BaseInput
                >
                <BaseSelect
                    v-model="$v.team.country.$model"
                    label="name"
                    :options="countries"
                    :reduce="(country) => country.code"
                    placeholder="choose your country"
                    :invalid="$v.team.country.$error"
                    :success="!$v.team.country.$error && $v.team.country.$dirty"
                    >Country</BaseSelect
                >

                <BaseInput
                    v-model.trim="$v.team.webSite.$model"
                    :invalid="$v.team.webSite.$error"
                    :success="!$v.team.webSite.$error && $v.team.webSite.$dirty"
                    >Web-site</BaseInput
                >

                <BaseInput v-model.trim="$v.team.url.$model" disabled="true"
                    >URL</BaseInput
                >
            </div>

            <div class="form__group">
                <h3>Players</h3>
                <div class="form__buttons">
                    <BaseButton
                        class="secondary"
                        @click.prevent="showPlayers = !showPlayers"
                        >Show players</BaseButton
                    >
                </div>
                <div v-show="showPlayers" class="players">
                    <div v-for="user in team.players" :key="user">
                        {{ getPlayerById(user).nickName }}
                    </div>
                </div>
            </div>

            <div class="form__group">
                <h3>Advanced</h3>
                <BaseFileInput
                    v-if="team.logoUrl"
                    :url="team.logoUrl"
                    @logo-choosen="selectedLogo = $event"
                    >Logo 128 x 128</BaseFileInput
                >
            </div>

            <div class="form__buttons">
                <BaseButton
                    class="form__button secondary white"
                    @click.prevent="deleteTeam"
                    >Delete team</BaseButton
                >

                <BaseButton
                    type="submit"
                    class="form__button secondary white"
                    :disabled="$v.team.$invalid || isBusy"
                    >Save team</BaseButton
                >
            </div>
        </form>
    </div>
</template>

<script>
import { required, minLength, url } from 'vuelidate/lib/validators'
import * as _ from 'lodash'

export default {
    name: 'EditTeam',

    transition: {
        name: 'slide',
    },

    async asyncData({ $db }) {
        const [countries, games, teams, users] = await Promise.all([
            $db.read('/countries'),
            $db.read('/games'),
            $db.read('/teams'),
            $db.read('/users'),
        ])
        return { countries, games, teams, users }
    },

    data() {
        return {
            team: {},
            selectedLogo: null,
            showPlayers: false,
            isBusy: false,
        }
    },

    validations: {
        team: {
            id: {
                required,
            },
            title: {
                required,
                minLength: minLength(3),
            },
            mainGame: {
                required,
            },
            country: {
                required,
            },
            leader: {
                required,
                minLength: minLength(3),
            },
            password: {
                required,
                minLength: minLength(3),
            },
            webSite: {
                required,
                url,
            },
            url: {
                required,
                url,
            },
        },
    },

    computed: {
        teamIndex() {
            return _.findIndex(this.teams, { id: this.$route.params.id })
        },
    },

    mounted() {
        this.team = this.teams[this.teamIndex]
        this.team.url = `http://doit.gg/${this.$route.params.id}`
    },

    updated() {
        this.team.url = `http://doit.gg/${this.team.id}`
    },

    methods: {
        async submit() {
            this.isBusy = true
            await this.upload()
            await this.$db.write(`/teams/${this.teamIndex}`, this.team)
            this.$toast.success('Changes commited!')
            this.$router.push('/player/team')
            this.isBusy = false
        },

        async upload() {
            if (this.selectedLogo) {
                this.team.logoUrl = await this.$db.uploadFile(
                    'logos/',
                    this.selectedLogo
                )
            }
        },

        async remove() {
            if (this.team.logoUrl) await this.$db.removeFile(this.team.logoUrl)
        },

        async deleteTeam() {
            if (confirm('Delete?')) {
                await this.remove()
                this.teams = this.teams.filter(
                    (item) => item.id !== this.$route.params.id
                )
                await this.$db.write('/teams', this.teams)
                this.$toast.success('Team fully destroyed!')
                this.$router.push('/player/team')
            }
        },

        teamIndexById(id) {
            return this.teams.findIndex((element) => element.id === id)
        },

        getPlayerById(playerId) {
            return _.find(this.users, { id: playerId })
        },

        removePlayer(playerId) {
            this.team.players = this.team.players.filter(
                (item) => item !== playerId
            )
        },
    },
}
</script>

<style lang="scss" scoped>
.panel {
    width: 100%;
    h1 {
        text-align: center;
    }
    .form {
        margin: auto;
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: 2rem;

        .form__group {
            width: 100%;
            padding: 3rem 1.5rem;
            background: #0f1215;
            border: 1px solid #20252b;
            box-sizing: border-box;
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: center;
            gap: 30px;
            h3 {
                align-self: start;
            }
        }
        .form__buttons {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin-bottom: 5rem;
        }
    }

    .players {
        display: flex;
        flex-flow: row wrap;
        gap: 2rem;
        div {
            padding: 1rem 2rem;
            background: rgb(44, 82, 250);
            border: 2px solid black;
            border-radius: 2rem;
        }
    }
}
</style>