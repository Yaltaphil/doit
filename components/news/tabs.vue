<template>
    <div class="tabs">
        <div
            v-for="tab in tabs"
            :key="tab.name"
            class="tabs__item"
            @click="$emit('selected', tab.pattern)"
        >
            {{ tab.name }}
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        tabs: { type: Array, default: () => [] },
    },
})
</script>

<style lang="scss" scoped>
.tabs {
    height: 56px;
    max-height: 56px;
    text-decoration: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 3px;
    .tabs__item {
        color: #a0a5ad;
        background: #14191f;
        padding: 1rem 2rem;
        font-size: 18px;
        line-height: 24px;
        font-weight: bold;
        &:hover {
            background: #d8dfeb;
            color: #20252b;
        }
    }
}
</style>