,<template>
    <section>
        <BaseLogo class="logo" />
        <p class="white-text">
            You registered on
            <nuxt-link to="/"> doit.gg </nuxt-link>

            to continue verify your email
        </p>
        <BaseButton class="white block" :disabled="isBusy" @click="submit"
            >Verify email</BaseButton
        >
        <p class="base-text">
            This is an automated email. <br />
            If you recieved it in error, no action is required
        </p>
    </section>
</template>

<script>
export default {
    layout: 'empty',

    data() {
        return {}
    },
    methods: {
        submit() {
            this.$router.push('/login')
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
    text-align: center;
    & .logo {
        width: 88px;
        height: 80px;
    }
}
</style>