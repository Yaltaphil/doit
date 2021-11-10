<template>
    <div>
        <h1>Logout</h1>
        <div class="panel">
            <div class="panel__item" @click="handler()">
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
                await this.$auth.logout()
                this.$toast.show('Logged out...')
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
            color: rgb(230, 247, 3);
            background: linear-gradient(
                    rgba(253, 13, 25, 0.904) 35%,
                    rgba(126, 3, 3, 0) 95.84%
                ),
                #181b1f;
        }
        &:active {
            cursor: pointer;

            background: linear-gradient(
                    rgba(151, 3, 13, 0.753) 35%,
                    rgba(252, 4, 4, 0.979) 95.84%
                ),
                #181b1f;
        }
    }
}
</style>
