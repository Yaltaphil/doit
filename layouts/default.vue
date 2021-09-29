<template>
    <div class="wrapper">
        <SiteNavbar />
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
    min-width: auto;
    height: 100vh;
}
@media only screen and (min-width: 769px) {
    .content {
        max-width: 1070px;
        margin: 0 auto;
        margin-left: 112px;
    }
}
</style>