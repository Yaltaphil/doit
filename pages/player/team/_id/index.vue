<template>
    <div>
        <h1>Manage - {{ $route.params.id }} team</h1>
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
    name: 'TeamManage',

    transition: {
        name: 'slide',
    },

    data() {
        return {
            panelItems: [
                { title: 'Edit info', to: 'edit' },
                { title: 'Add players', to: 'add' },
                { title: 'Players', to: 'players' },
                { title: 'Tournaments', to: 'tournaments' },
                { title: 'Statistics', to: 'statistics' },
            ],
        }
    },

    methods: {
        handler(target) {
            this.$router.push(this.$nuxt.$route.path + '/' + target.to)
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