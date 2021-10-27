<template>
    <div class="wrapper">
        <SiteNavbar />
        <SiteSidebar />
        <transition name="home">
            <Nuxt class="content" />
        </transition>
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

.home-enter-active,
.home-leave-active {
    transition: opacity 0.75s;
}
.home-enter,
.home-leave-active {
    opacity: 0;
}

@media only screen and (min-width: 769px) {
    .content {
        max-width: 1170px;
        margin: auto;
        margin-left: 112px;
    }
}
</style>