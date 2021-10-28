,<template>
    <section>
        <BaseLogo class="logo" />
        <h1>Sign up 2/2</h1>
        <form @submit.prevent="submit">
            <BaseInput
                v-model.trim="$v.username.$model"
                type="text"
                :invalid="$v.username.$dirty && $v.username.$error"
                :success="$v.username.$dirty && !$v.username.$error"
                @input="$delayTouch($v.username)"
                >Username</BaseInput
            >
            <BaseSelect
                v-model="$v.country.$model"
                label="name"
                :options="countries"
                >Country</BaseSelect
            >
            <span></span>
            <BaseDatepicker v-model="$v.date.$model">
                Date of birth
            </BaseDatepicker>
            <BaseCheckbox v-model="$v.isAged.$model">
                <span class="label"
                    >I have at least 13 years of age and agree to the
                    <nuxt-link to="/termsofuse">terms of service</nuxt-link>
                </span>
            </BaseCheckbox>

            <BaseButton
                class="white block"
                :disabled="$v.$invalid || isBusy"
                type="submit"
                >Create an account</BaseButton
            >
        </form>

        <p>
            <nuxt-link to="/signup">Back to first step</nuxt-link>
        </p>
    </section>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

const ageVerified = (value) => value === true

export default {
    layout: 'empty',

    async asyncData({ $db }) {
        const countries = await $db.read('/countries')
        const games = await $db.read('/countriegames')
        return { countries, games }
    },

    data() {
        return {
            username: '',
            country: '',
            date: null,
            isAged: false,
            isBusy: false,
        }
    },

    validations: {
        username: {
            required,
            minLength: minLength(3),
        },
        country: {
            required,
        },
        date: {
            required,
        },
        isAged: {
            required,
            ageVerified,
        },
    },

    methods: {
        submit() {
            this.isBusy = true
            this.$router.push('/verifyEmail')
        },
    },
}
</script>

<style lang="scss" scoped>
section {
    margin: 80px auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 2rem;
    width: 241px;
    min-height: 572px;
    form {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        gap: 1.5rem;
    }
    .logo {
        width: 88px;
        height: 80px;
    }
    .label {
        font-size: 12px;
        line-height: 16px;
        color: #627ca3;
    }
}
</style>