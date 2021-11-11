<template>
    <div class="panel">
        <h1>Edit account details</h1>

        <form class="form" @submit.prevent="submit">
            <div class="form__group">
                <BaseInput
                    v-model.trim="$v.user.nickName.$model"
                    placeholder="nickName"
                    type="text"
                    :invalid="$v.user.nickName.$error"
                    :success="
                        !$v.user.nickName.$error && $v.user.nickName.$dirty
                    "
                    >Nickname</BaseInput
                >

                <BaseInput
                    v-model.trim="$v.user.name.$model"
                    placeholder="name"
                    type="text"
                    :invalid="$v.user.name.$error"
                    :success="!$v.user.name.$error && $v.user.name.$dirty"
                    >Name</BaseInput
                >

                <BaseSelect
                    v-model="$v.user.country.$model"
                    label="name"
                    :options="countries"
                    :reduce="(country) => country.code"
                    placeholder="choose your country"
                    :invalid="$v.user.country.$error"
                    :success="!$v.user.country.$error && $v.user.country.$dirty"
                    >Country</BaseSelect
                >

                <BaseSelect
                    v-model="$v.user.mainGame.$model"
                    label="title"
                    :options="games"
                    :reduce="(game) => game.title"
                    placeholder="select your main game"
                    :invalid="$v.user.mainGame.$error"
                    :success="
                        !$v.user.mainGame.$error && $v.user.mainGame.$dirty
                    "
                    >Main Game</BaseSelect
                >

                <BaseDatepicker
                    v-model="birthday"
                    mode="date"
                    style="width: 100%"
                >
                    Date of birth
                </BaseDatepicker>
            </div>

            <div class="form__buttons">
                <BaseButton type="submit" class="form__button primary white"
                    >Change details</BaseButton
                >
            </div>
        </form>
    </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'EditProfile',

    transition: {
        name: 'slide',
    },

    async asyncData({ app, $db }) {
        const countries = await $db.read('/countries')
        const games = await $db.read('/games')
        const user = await $db.read('/users/' + app.$auth.user.localId)
        return { countries, games, user }
    },

    data() {
        return {
            isBusy: false,
            birthday: null,
        }
    },

    validations: {
        user: {
            name: {
                required,
                minLength: minLength(3),
            },
            nickName: {
                required,
                minLength: minLength(3),
            },
            mainGame: {
                required,
            },
            country: {
                required,
            },
        },
    },

    mounted() {
        this.birthday = new Date(this.user.birthday)
    },

    methods: {
        async submit() {
            this.isBusy = true
            this.user.birthday = this.birthday.getTime()
            const path = `/users/${this.$auth.user.localId}`
            await this.$db.write(path, this.user)
            this.$toast.success('Changes commited!')
            this.$router.push('/player/panel')
            this.isBusy = false
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
}
</style>