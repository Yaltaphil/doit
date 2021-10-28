<template>
    <div class="panel">
        <h1>Create Team</h1>
        <form ref="form" class="form" @submit.prevent="submit">
            <div class="form__group">
                <h3>Basic Info</h3>
                <BaseInput
                    v-model.trim="$v.form.title.$model"
                    class="input"
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
                <BaseInput v-model="form.logoUrl" type="file">Team Logo</BaseInput>
            </div>

            <BaseButton
                type="submit"
                class="form__button primary white block"
                :disabled="$v.form.$invalid"
                >Save</BaseButton
            >
        </form>
    </div>
</template>

<script>
import { required, minLength, url } from 'vuelidate/lib/validators'

export default {
    transition: {
        name: 'slide',
    },

    async asyncData({ $db }) {
        const countries = await $db.read('/countries')
        const games = await $db.read('/games')
        const teams = await $db.read('/teams') || []
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
                logoUrl: '',
            },
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
        submit() {
            // const index = this.teams.length
            this.team = this.form
            console.log(this.team)
            this.teams.push(this.team)
            this.$db.write('/teams', this.teams)
            this.$toast.success('Team created!')
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
        .input {
            width: 360px;
        }
        .form__group {
            h3 {
                align-self: start;
            }
            padding: 3rem 2rem;
            background: #0f1215;
            border: 1px solid #20252b;
            box-sizing: border-box;
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: center;
            gap: 30px;
        }
        .form__button {
            width: 160px;
            margin-bottom: 5rem;
        }
    }
}
</style>