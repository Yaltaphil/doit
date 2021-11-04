<template>
    <div class="panel">
        <h1>Edit Team</h1>
        <form ref="form" class="form" @submit.prevent="submit">
            <div class="form__group">
                <h3>Basic Info</h3>
                <BaseInput
                    v-model.trim="$v.form.title.$model"
                    placeholder="team name"
                    type="text"
                    :invalid="$v.form.title.$error"
                    :success="!$v.form.title.$error"
                    >Team name</BaseInput
                >
                <BaseInput
                    v-model.trim="$v.form.id.$model"
                    placeholder="ID"
                    type="text"
                    :invalid="$v.form.id.$error"
                    :success="!$v.form.id.$error"
                    >ID</BaseInput
                >
                <BaseSelect
                    v-model="$v.form.mainGame.$model"
                    label="title"
                    :options="games"
                    :reduce="(game) => game.title"
                    placeholder="select your game"
                    :invalid="$v.form.mainGame.$error"
                    :success="!$v.form.mainGame.$error"
                    >Main Game</BaseSelect
                >

                <BaseInput
                    v-model.trim="$v.form.leader.$model"
                    placeholder="team leader"
                    :invalid="$v.form.leader.$error"
                    :success="!$v.form.leader.$error"
                    >Team Leader</BaseInput
                >
                <BaseInput
                    v-model="$v.form.password.$model"
                    placeholder="type password here"
                    :invalid="$v.form.password.$error"
                    :success="!$v.form.password.$error"
                    >Join password</BaseInput
                >
                <BaseSelect
                    v-model="$v.form.country.$model"
                    label="name"
                    :options="countries"
                    :reduce="(country) => country.code"
                    placeholder="choose your country"
                    :invalid="$v.form.country.$error"
                    :success="!$v.form.country.$error"
                    >Country</BaseSelect
                >

                <BaseInput
                    v-model.trim="$v.form.webSite.$model"
                    :invalid="$v.form.webSite.$error"
                    :success="!$v.form.webSite.$error"
                    >Web-site</BaseInput
                >

                <BaseInput
                    v-model.trim="$v.form.url.$model"
                    disabled="true"
                    :invalid="$v.form.url.$error"
                    :success="!$v.form.url.$error"
                    >URL</BaseInput
                >
            </div>

            <div class="form__group">
                <h3>Players</h3>
                <div class="form__buttons">
                    <BaseButton class="secondary">List of players</BaseButton>
                    <BaseButton class="secondary"
                        >Edit list of players</BaseButton
                    >
                </div>
            </div>

            <div class="form__group">
                <h3>Advanced</h3>
                <BaseFileInput
                    v-if="form.logoUrl"
                    :url="form.logoUrl"
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
                    :disabled="$v.form.$invalid || isBusy"
                    >Save team</BaseButton
                >
            </div>
        </form>
    </div>
</template>

<script>
import { required, minLength, url } from 'vuelidate/lib/validators'

export default {
    name: 'EditTeam',

    transition: {
        name: 'slide',
    },

    async asyncData({ $db }) {
        const countries = await $db.read('/countries')
        const games = await $db.read('/games')
        const teams = (await $db.read('/teams')) || []
        return { countries, games, teams }
    },

    data() {
        return {
            teamIndex: null,
            id: null,
            form: {
                id: null,
                title: '',
                mainGame: '',
                leader: '',
                password: '',
                country: '',
                webSite: '',
                url: '',
                logoUrl: '',
            },
            selectedLogo: null,
            isBusy: false,
        }
    },

    validations: {
        form: {
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

    mounted() {
        this.id = this.$route.params.id
        this.teamIndex = this.teamIndexById(this.id)
        this.form = this.teams[this.teamIndex]
        this.form.url = `http://doit.gg/${this.id}`
    },

    updated() {
        this.form.url = `http://doit.gg/${this.form.id}`
    },

    methods: {
        async submit() {
            this.isBusy = true
            await this.upload()
            const path = `/teams/${this.teamIndex}`
            await this.$db.write(path, this.form)
            this.$toast.success('Changes commited!')
            this.$router.push('/player/team')
            this.isBusy = false
        },

        async upload() {
            if (this.selectedLogo) {
                this.form.logoUrl = await this.$db.uploadFile(
                    'logos/',
                    this.selectedLogo
                )
            }
        },

        async remove() {
            if (this.form.logoUrl) await this.$db.removeFile(this.form.logoUrl)
        },

        async deleteTeam() {
            if (confirm('Delete?')) {
                await this.remove()
                this.teams = this.teams.filter((item) => item.id !== this.id)
                await this.$db.write('/teams', this.teams)
                this.$toast.success('Team fully destroyed!')
                this.$router.push('/player/team')
            }
        },

        teamIndexById(id) {
            return this.teams.findIndex((element) => element.id === id)
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
            padding: 3rem 2rem;
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
}
</style>