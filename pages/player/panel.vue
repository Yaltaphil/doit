<template>
    <div>
        <h1>User Panel</h1>
        <div class="panel">
            <div
                v-for="(item, i) in panelItems"
                :key="i"
                class="panel__item"
                @click="handler(i)"
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
    name: 'Panel',

    transition: {
        name: 'slide',
    },

    data() {
        return {
            panelItems: [
                { title: 'My Profile', to: '/player' },
                { title: 'Game profile', to: 'game' },
                { title: 'Statistics', to: 'statistics' },
                { title: 'My Team', to: 'team' },
                { title: 'Deposit', to: 'deposit' },
                { title: 'Withdraw', to: 'withdraw' },
                { title: 'Premium account', to: 'premium' },
                { title: 'Settings', to: 'settings' },
                { title: 'Support', to: 'support' },
                { title: 'Logout', to: 'logout' },
            ],
        }
    },

    methods: {
        handler(index) {
            this.$emit('item-changed', index)
            this.$router.push(this.panelItems[index].to)
        },
    },
}
</script>

<style lang="scss" scoped>
h1 {
    text-align: center;
}
.panel {
    margin: 3rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, 236px);
    place-content: center;
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