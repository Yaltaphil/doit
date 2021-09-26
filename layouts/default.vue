<template>
    <div class="wrapper">
        <SiteNavbar>
            <div v-if="loggedIn" class="signIn">
                <BaseButton class="secondary" @click="$router.push('/login')"
                    >Login</BaseButton
                >
                <BaseButton class="primary">Sign up</BaseButton>
            </div>
        </SiteNavbar>

        <SiteSidebar />

        <Nuxt class="content" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            loggedIn: true,
        }
    },
}
</script>

<style lang="scss">
.wrapper {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 0.5rem;
}

.signIn {
    display: flex;
    gap: 10px;
}

@media only screen and (min-width: 769px) {
    .wrapper {
        padding: 0;
    }
    .content {
        margin-left: 112px;
    }
}
</style>