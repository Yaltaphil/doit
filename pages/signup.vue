,<template>
    <section>
        <BaseLogo class="logo" />
        <h1>Sign up 1/2</h1>
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
            :disabled="$v.$invalid"
            @click="nextStep"
            >Next step</BaseButton
        >
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
        nextStep() {
            this.$router.push('/signupNextStep')
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
    & .logo {
        width: 88px;
        height: 80px;
    }
}
</style>