<template>
    <div class="panel">
        <h1>Create Team</h1>
        <form ref="form" class="form" @submit.prevent="submit">
            <div class="form__group">
                <h3>Basic Info</h3>
                <BaseInput
                    v-model.trim="$v.form.title.$model"
                    placeholder="team name"
                    type="text"
                    :invalid="$v.form.title.$dirty && $v.form.title.$error"
                    :success="$v.form.title.$dirty && !$v.form.title.$error"
                    @input="$delayTouch($v.form.title)"
                    >Team name</BaseInput
                >
                <BaseSelect
                    v-model="$v.form.mainGame.$model"
                    label="title"
                    :options="games"
                    :reduce="(game) => game.title"
                    placeholder="select your game"
                    :invalid="
                        $v.form.mainGame.$dirty && $v.form.mainGame.$error
                    "
                    :success="
                        $v.form.mainGame.$dirty && !$v.form.mainGame.$error
                    "
                    >Main Game</BaseSelect
                >

                <BaseInput
                    v-model.trim="$v.form.leader.$model"
                    placeholder="team leader"
                    :invalid="$v.form.leader.$dirty && $v.form.leader.$error"
                    :success="$v.form.leader.$dirty && !$v.form.leader.$error"
                    @input="$delayTouch($v.form.leader)"
                    >Team Leader</BaseInput
                >
                <BaseInput
                    v-model="$v.form.password.$model"
                    placeholder="type password here"
                    :invalid="
                        $v.form.password.$dirty && $v.form.password.$error
                    "
                    :success="
                        $v.form.password.$dirty && !$v.form.password.$error
                    "
                    @input="$delayTouch($v.form.password)"
                    >Join password</BaseInput
                >
                <BaseSelect
                    v-model="$v.form.country.$model"
                    label="name"
                    :options="countries"
                    :reduce="(country) => country.code"
                    placeholder="choose your country"
                    :invalid="$v.form.country.$dirty && $v.form.country.$error"
                    :success="$v.form.country.$dirty && !$v.form.country.$error"
                    >Country</BaseSelect
                >

                <BaseInput
                    v-model.trim="$v.form.webSite.$model"
                    placeholder="http://"
                    :invalid="$v.form.webSite.$dirty && $v.form.webSite.$error"
                    :success="$v.form.webSite.$dirty && !$v.form.webSite.$error"
                    @input="$delayTouch($v.form.webSite)"
                    >Web-site</BaseInput
                >
            </div>

            <div class="form__group">
                <h3>Advanced</h3>
                <BaseFileInput
                    :icon="form.logoUrl"
                    @logo-choosen="logoSelected = $event"
                    >Logo 128 x 128</BaseFileInput
                >
            </div>

            <BaseButton
                type="submit"
                class="form__button primary white block"
                :disabled="$v.form.$invalid || isBusy"
                >Save</BaseButton
            >
        </form>
    </div>
</template>

<script>
import { required, minLength, url } from 'vuelidate/lib/validators'
import { v4 as uuidv4 } from 'uuid'

export default {
    name: 'TeamCreate',

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
            team: {},
            form: {
                title: '',
                mainGame: '',
                leader: '',
                password: '',
                country: '',
                webSite: 'http://mail.ru',
                logoUrl: null,
                players: [
                    'XMAuZmnoUPRoVLSOwjidZo2CuRw2',
                    'cCS3ZmTnMrNbDYvi0RWLcFWJhsB2',
                ],
            },
            logoSelected: null,
            isBusy: false,
        }
    },

    validations: {
        form: {
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
        },
    },

    mounted() {},

    methods: {
        async submit() {
            this.isBusy = true
            await this.upload()
            this.team = this.form
            this.team.id = uuidv4()
            this.team.created = Date.now()
            this.teams.push(this.team)
            await this.$db.write('/teams', this.teams)
            this.$toast.success('Team created!')
            this.$router.push('/player/team')
            this.isBusy = false
        },

        async upload() {
            if (!this.logoSelected) return
            this.form.logoUrl = await this.$db.uploadFile(
                'logos/',
                this.logoSelected
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
        .form__button {
            width: 160px;
            margin-bottom: 5rem;
        }
    }
}
</style>