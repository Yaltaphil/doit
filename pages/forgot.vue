,<template>
    <section>
        <BaseLogo class="logo" />
        <h1>Forgot password</h1>
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
            :disabled="$v.$invalid"
            @click="reset"
            >Reset password</BaseButton
        >
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
        }
    },

    validations: {
        login: {
            required,
            minLength: minLength(6),
        },
    },

    methods: {
        reset() {},
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