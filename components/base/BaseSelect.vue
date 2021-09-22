<template>
    <div class="base-select-wrapper">
        <label :for="_uid"> <slot></slot> </label>
        <v-select
            :id="_uid"
            :options="options"
            v-bind="$attrs"
            v-on="$listeners"
        />
    </div>
</template>

<script>
export default {
    name: 'BaseSelect',

    props: {
        options: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang='scss'>
.base-select-wrapper {
    min-width: 240px;
    max-width: 100%;
    width: 100%;
}

.vs__dropdown-toggle,
.vs__dropdown-menu {
    font: 'Rubik';
    font-size: 16px;
    color: #627ca3;
    opacity: 1;
}

.vs__dropdown-toggle {
    background: transparent;
    border-radius: 2px;
    border: 1px solid #1c2f4d;
    height: 40px;
    color: #627ca3;
}

.vs__dropdown-menu {
    background: transparent;
    color: #627ca3;
    height: 224px;
    &::-webkit-scrollbar {
        width: 4px;
        background: #27313f;
        border-radius: 2px;
    }
    &::-webkit-scrollbar-track {
        background: #121f33;
        border-radius: 2px;
    }
    &::-webkit-scrollbar-thumb {
        background: #627ca3;
        border-radius: 2px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: rgb(82, 116, 209);
    }
}

.vs__dropdown-menu li {
    color: #627ca3;
    height: 32px;
    padding-left: 16px;
}

.vs__dropdown-menu li:hover {
    color: #fff;
    background: #1472ff;
}

.vs__selected {
    color: #627ca3;
    opacity: 1;
}

.vs__search {
    color: #627ca3;
    opacity: 1;
}

.vs__clear {
    display: none;
}

.vs__open-indicator {
    fill: #627ca3;
}

.vs--open {
    & .vs__selected {
        opacity: 1 !important;
        color: #e6e6e6;
    }

    & .vs__dropdown-toggle {
        background: #16263d;
        border: 1px solid #1472ff;
    }

    & .vs__dropdown-menu {
        border: 1px solid #1472ff;
        border-radius: 2px;
    }
}
</style>
