<template>
    <div>
        <h1>My Team</h1>
        <div class="panel">
            <div
                v-for="(item, i) in teams"
                :key="i"
                class="panel__item"
                @click="handler(item)"
            >
                <span>
                    {{ item.title }}
                </span>
            </div>
            <div class="panel__item" @click="addTeam">
                <span> + </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    name: 'Profile',

    transition: {
        name: 'slide',
    },

    async asyncData({ $db }) {
        const teams = (await $db.read('/teams')) || []
        return { teams }
    },

    data() {
        return {}
    },

    methods: {
        handler(target) {
            this.$router.push(`/player/team/${target.id}`)
        },

        addTeam() {
            this.$router.push('/player/team/create')
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
