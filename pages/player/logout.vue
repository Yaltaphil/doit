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
        transition: all 100ms;
        user-select: none;
        &:hover {
            cursor: pointer;
            color: black;
            background: radial-gradient(
                    250.9% 252.09% at 142.43% 152.09%,
                    rgba(253, 13, 25, 0.904) 35%,
                    rgba(29, 3, 3, 0) 95.84%
                ),
                #181b1f;
        }
        &:active {
            cursor: pointer;
            color: black;
            background: radial-gradient(
                    250.9% 252.09% at 142.43% 152.09%,
                    rgba(134, 3, 12, 0.904) 35%,
                    rgba(226, 15, 15, 0.979) 95.84%
                ),
                #181b1f;
        }
    }
}
</style>
