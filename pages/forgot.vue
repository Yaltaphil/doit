,<template>
    <section>
        <BasePreloader v-show="isBusy" />
        <BaseLogo class="logo" />
        <h1>Forgot password</h1>
        <form @submit.prevent="submit">
            <BaseInput
                v-model.trim="$v.login.$model"
                type="text"
                :invalid="$v.login.$dirty && $v.login.$error"
                :success="$v.login.$dirty && !$v.login.$error"
                @input="$delayTouch($v.login)"
                >Username or Email</BaseInput
            >
            <BaseButton
                class="white block"
                :disabled="$v.$invalid || isBusy"
                type="submit"
                >Reset password</BaseButton
            >
        </form>
        <p>
            <nuxt-link to="/login">Back to login</nuxt-link>
        </p>
    </section>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    layout: 'empty',

    data() {
        return {
            login: '',
            isBusy: false,
        }
    },

    validations: {
        login: {
            required,
            minLength: minLength(6),
        },
    },

    methods: {
        submit() {
            this.isBusy = true
            setTimeout(() => {
                this.$router.push('/login')
            }, 500)
        },
    },
}
</script>

<style lang="scss" scoped>
section {
    margin: 80px auto;
    display: flex;
    flex-direction: column;
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
}
</style>