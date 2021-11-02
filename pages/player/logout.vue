<template>
    <div>
        <h1>Logout</h1>
        <div class="panel">
            <div class="panel__item" @click="handler(item)">
                <span> Click to logout </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Logout',

    transition: {
        name: 'slide',
    },

    methods: {
        handler() {
            this.logout()
            this.$router.push(`/`)
        },

        async logout() {
            try {
                await this.$fire.auth.signOut()
                this.isAuth = this.$fire.auth.currentUser
                this.$toast.show('Signed out...')
            } catch (e) {
                this.$toast.error(`Problem to sign out!   ${e.message}`)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.panel {
    margin: 5rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, 236px);
    place-content: center;
    gap: 80px;
    .panel__item {
        height: 82px;
        background: #0f1215;
        border: 2px solid #20252b;
        font-weight: bold;
        font-size: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
            cursor: pointer;
            background: radial-gradient(
                    250.9% 252.09% at 142.43% 152.09%,
                    rgba(22, 6, 247, 0.87) 35%,
                    rgba(20, 114, 255, 0) 95.84%
                ),
                #181b1f;
        }
    }
}
</style>
