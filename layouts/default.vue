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
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 0.5rem;
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