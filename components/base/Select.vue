<template>
    <div class="base-select-wrapper">
        <label :for="_uid"> <slot></slot> </label>
        <v-select
            :id="_uid"
            :class="{ input__invalid: invalid, input__success: success }"
            :options="options"
            v-bind="$attrs"
            v-on="$listeners"
        />
    </div>
</template>

<script>
export default {
    name: 'BaseSelect',

    inheritAttrs: false,

    props: {
        options: {
            type: Array,
            default: () => [],
        },
        invalid: { type: Boolean, default: false },
        success: { type: Boolean, default: false },
    },
}
</script>

<style lang='scss'>
.base-select-wrapper {
    min-width: 160px;
    max-width: 100%;
    width: 100%;
    & label {
        color: white;
        font-size: 14px;
    }
    & li {
        color: #627ca3;
        background: #0f1215;
        height: 33px;
        padding-left: 16px;
        &:hover {
            color: #fff;
            background: #1472ff;
        }
    }
    & .vs__dropdown-toggle {
        margin-top: 6px;
        padding-left: 8px;
        font-family: 'Rubik';
        font-size: 16px;
        color: #627ca3;
        background: #0f1215;
        border-radius: 2px;
        border: 1px solid #1c2f4d;
        height: 38px;
    }
    & .vs__dropdown-menu {
        font-family: 'Rubik';
        font-size: 16px;
        background: #0f1215;
        max-height: 224px;
        overflow-x: hidden;

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
    & .vs__selected {
        color: #627ca3;
    }
    & .vs__search {
        color: #627ca3;
    }
    & .vs__clear {
        fill: #627ca3;
        display: none;
    }
    & .vs__open-indicator {
        fill: #627ca3;
    }
    & .vs--open {
        & .vs__selected {
            color: #e6e6e6;
            background: transparent;
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
    .input__invalid {
        & .vs__dropdown-toggle {
            border: 1px solid #b83333;
            border-radius: 2px;
        }
    }
    .input__success {
        & .vs__dropdown-toggle {
            border: 1px solid #4cb725;
            border-radius: 2px;
        }
    }
}
</style>
