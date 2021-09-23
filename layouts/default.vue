<template>
    <div class="wrapper">
        <div class="header">
            <SiteNavbar />
        </div>
        <div class="sidebar">
            <SiteSidebar />
        </div>
        <div class="main">
            <Nuxt />
        </div>
        <div class="footer"></div>
    </div>
</template>

<style lang="scss">
.wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.main {
    min-height: 100%;
    flex: 1 1 auto;
    margin-left: 112px;
}
.footer {
    margin-top: auto;
}
</style>