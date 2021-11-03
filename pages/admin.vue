<template>
    <div class="admin-panel">
        <h1>Admin panel here</h1>

        <div class="panel">
            <div
                v-for="(item, i) in panelItems"
                :key="i"
                class="panel__item"
                :class="{ activeItem: activeItem === i }"
                @click="handler(i)"
            >
                <span>
                    {{ item.title }}
                </span>
            </div>
        </div>

        <div class="results">
            <NuxtChild />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Admin',

    // async asyncData({ $db }) {
    //     const teams = (await $db.read('/teams')) || []
    //     return { teams }
    // },

    data() {
        return {
            panelItems: [
                { title: 'Tournaments', to: 'tournaments' },
                { title: 'Leagues', to: 'leagues' },
                { title: 'Teams', to: '/admin/teams' },
                { title: 'Players', to: 'players' },
                { title: 'Payouts', to: 'payouts' },
                { title: 'Calendar', to: 'calendar' },
                { title: 'News', to: 'news' },
                { title: 'Games', to: 'games' },
            ],
            activeItem: null,
        }
    },

    methods: {
        handler(index) {
            this.activeItem = index
            this.$router.push(this.panelItems[index].to)
        },
    },
}
</script>

<style lang="scss" scoped>
.panel {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 3px;
    .panel__item {
        flex: 0 0 auto;
        width: 236px;
        height: 82px;
        background: #0f1215;
        border: 2px solid #20252b;
        font-weight: bold;
        font-size: 22px;
        line-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            cursor: pointer;
            background: radial-gradient(
                    250.9% 252.09% at 142.43% 152.09%,
                    rgba(22, 6, 247, 0.87) 35%,
                    rgba(20, 114, 255, 0) 95.84%
                ),
                #181b1f;
        }
        &.activeItem {
            color: black;
            background: #d8dfeb;
            border: 2px solid #20252b;
        }
    }
}

.results {
    width: 100%;
}
</style>
