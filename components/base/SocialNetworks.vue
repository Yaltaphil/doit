<template>
    <div class="social-links">
        <img
            class="icon"
            :src="require('~/assets/img/facebook-logo.svg')"
            alt="facebook"
            @click="signInWith"
        />
        <img
            class="icon"
            :src="require('~/assets/img/battle-logo.svg')"
            alt="battle"
            @click="signInWith"
        />
        <img
            class="icon"
            :src="require('~/assets/img/google-logo.svg')"
            alt="google"
            @click="signInWith"
        />
        <img
            class="icon"
            :src="require('~/assets/img/steam-logo.svg')"
            alt="steam"
            @click="signInWith"
        />
    </div>
</template>

<script>
export default {
    mathods: {
        signInWith() {},
    },
}
</script>

<style lang="scss" scoped>
.social-links {
    display: flex;
    flex-flow: row nowrap;
    & .icon {
        width: 24px;
        height: 24px;
        margin: 12px;
        cursor: pointer;
    }
}
</style>