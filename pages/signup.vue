,<template>
    <section>
        <BasePreloader v-show="isBusy" />
        <BaseLogo class="logo" />
        <h1>Sign up 1/2</h1>
        <form @submit.prevent="submit">
            <BaseInput
                v-model.trim="$v.email.$model"
                type="email"
                :invalid="$v.email.$dirty && $v.email.$error"
                :success="$v.email.$dirty && !$v.email.$error"
                @input="$delayTouch($v.email)"
                >Email</BaseInput
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
                >Next step</BaseButton
            >
        </form>
        <p class="base-text">or signup with</p>
        <div class="social-links">
            <BaseSocialNetworks />
        </div>

        <p>
            <nuxt-link to="/login">Already have an account?</nuxt-link>
        </p>
    </section>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
    layout: 'empty',

    data() {
        return {
            email: '',
            password: '',
            isBusy: false,
        }
    },

    validations: {
        email: {
            required,
            email,
        },
        password: {
            required,
            minLength: minLength(6),
        },
    },

    methods: {
        submit() {
            this.isBusy = true
            setTimeout(() => {
                this.$router.push('/signupNextStep')
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