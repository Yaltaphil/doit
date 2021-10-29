<template>
    <div>
        <h1>User Panel</h1>
        <div class="panel">
            <div
                v-for="(item, i) in panelItems"
                :key="i"
                class="panel__item"
                @click="handler(item)"
            >
                <span>
                    {{ item.title }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Panel",
    
    transition: {
        name: 'slide',
    },

    data() {
        return {
            panelItems: [
                { title: 'My Profile', to: '/player/profile' },
                { title: 'Game profile', to: '/player/settingsprofile' },
                { title: 'Statistics', to: '/player/statistics' },
                { title: 'My Team', to: '/player/team' },
                { title: 'Deposit', to: '/player/deposit' },
                { title: 'Withdraw', to: '/player/withdraw' },
                { title: 'Premium account', to: '/player/premium' },
                { title: 'Settings', to: '/player/settings' },
                { title: 'Support', to: '/player/support' },
                { title: 'Logout', to: '/logout' },
            ],
        }
    },

    methods: {
        handler(target) {
            this.$router.push(target.to)
        },
    },
}
</script>

<style lang="scss" scoped>
.panel {
    margin: 3rem 0;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 80px;

    .panel__item {
        width: 236px;
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