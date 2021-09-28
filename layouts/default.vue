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
@media only screen and (min-width: 769px) {
    .content {
        margin-left: 112px;
    }
}
</style>