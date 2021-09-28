,<template>
    <section>
        <BaseLogo class="logo" />
        <h1>Login</h1>
        <BaseInput v-model="email" type="text">Username or Email</BaseInput>
        <BaseInput v-model="password" type="password">Password</BaseInput>
        <BaseButton class="white block">Login</BaseButton>
        <p>or login with</p>
        <div class="social-links">
            <BaseSocialNetworks />
        </div>
        <nuxt-link to="/forgot">Forgot password?</nuxt-link>
        <p>
            Don't have an account? <nuxt-link to="signup">Sign up!</nuxt-link>
        </p>
    </section>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
}
</script>

<style lang="scss" scoped>
section {
    margin: 16px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0px;
    position: static;
    width: 241px;
    height: 572px;
    & .logo {
        width: 88px;
        height: 80px;
    }
}
</style>