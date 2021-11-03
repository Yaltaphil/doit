<template>
    <div>
        <div class="controls">
            <div class="icons">&times;   &times;   &times;   &times;   &times;</div>
            <div>
                <BaseInput class="search" placeholder="search"></BaseInput>
            </div>

            <BaseButton class="secondary white">Edit mode</BaseButton>
            <BaseButton class="secondary white">Add Team</BaseButton>
        </div>

        <table>
            <tr>
                <th>Team</th>
                <th>Leader</th>
                <th>Main game</th>
                <th>Creation date</th>
                <th>Edit</th>
            </tr>
            <tr v-for="(item, i) in teams" :key="i">
                <td>{{ item.title }}</td>
                <td>{{ item.leader }}</td>
                <td>{{ item.mainGame }}</td>
                <td>{{ item.created ? 'true' : 'null' }}</td>
                <td>edit...</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    async asyncData({ $db }) {
        const teams = (await $db.read('/teams')) || []
        return { teams }
    },

    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 3rem;
    margin: 3rem auto;
}

table {
    margin: 5rem auto;
    width: 100%;
    th {
        width: 20%;
        font-weight: 500;
        font-size: 22px;
        line-height: 100%;
        color: #e6e6e6;
        opacity: 0.88;
        height: 3rem;
        text-align: left;
    }
    td {
        width: 20%;
        font-size: 16px;
        line-height: 100%;
        color: #67707a;
        height: 3rem;
    }
}
</style>