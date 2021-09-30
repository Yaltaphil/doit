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
//wrapper in globals

@media only screen and (min-width: 769px) {
    .content {
        max-width: 1070px;
        margin: auto;
        margin-left: 112px;
    }
}
</style>