,<template>
    <section>
        <BasePreloader v-show="isBusy" />
        <BaseLogo class="logo" />
        <h1>Login</h1>
        <form autocomplete="off" @submit.prevent="submit">
            <BaseInput
                v-model.trim="$v.login.$model"
                type="text"
                :invalid="$v.login.$dirty && $v.login.$error"
                :success="$v.login.$dirty && !$v.login.$error"
                @input="$delayTouch($v.login)"
                >Username or Email</BaseInput
            >
            <BaseInput
                v-model="$v.password.$model"
                type="password"
                :invalid="$v.password.$dirty && $v.password.$error"
                :success="$v.password.$dirty && !$v.password.$error"
                @input="$delayTouch($v.password)"
                >Password</BaseInput
            >
            <BaseButton
                class="white block"
                :disabled="$v.$invalid || isBusy"
                type="submit"
                >Login</BaseButton
            >
        </form>

        <p class="base-text">or login with</p>
        <div class="social-links">
            <BaseSocialNetworks />
        </div>
        <nuxt-link to="/forgot">Forgot password?</nuxt-link>
        <p class="base-text">
            Don't have an account? <nuxt-link to="signup">Sign up!</nuxt-link>
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
            password: '',
            isBusy: false,
        }
    },

    validations: {
        login: {
            required,
            minLength: minLength(3),
        },
        password: {
            required,
            minLength: minLength(6),
        },
    },

    methods: {
        async submit() {
            this.isBusy = true
            try {
                await this.$fire.auth.signInWithEmailAndPassword(
                    this.login,
                    this.password
                )
                this.$toast.show('Successfully logged in')
                setTimeout(() => {
                    this.$router.push('/player')
                }, 2000)
            } catch (e) {
                this.$toast.error(`Opps... Login error!    ${e.message}`)
            }
            this.isBusy = false
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
}
</style>