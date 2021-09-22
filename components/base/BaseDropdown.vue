<template>
    <div class="input">
        <label for="dropdown"> <slot></slot> </label>
        <select
            id="dropdown"
            name="dropdown"
            size="1"
            :value="value"
            @input="$emit('input', $event.target.value)"
        >
            <option v-for="item in items" :key="item" :value="item">
                {{ item }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'BaseDropdown',

    props: {
        value: { type: String, default: null },
        items: { type: Array, default: null },
    },
}
</script>

<style lang="scss" scoped>
.input {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 60px;

    & select {
        background-color: transparent;
        width: 100%;
        height: 40px;
        max-height: 40px;
        border-radius: 2px;
        border: 1px solid #1c2f4d;
        outline: none;
        position: absolute;
        top: 20px;
        font-family: 'Rubik';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 100%;
        color: #627ca3;
        overflow-y: auto;

        &::placeholder {
            position: absolute;
            left: 6.67%;
            right: 6.67%;
            top: 53.33%;
            bottom: 20%;
            font-family: 'Rubik';
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 100%;
            color: #627ca3;
        }
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

        &:focus {
        }
        &:active {
            color: white;
        }
        &:disabled {
        }
    }
    //     /* width */
    //

    // /* Track */
    // ::-webkit-scrollbar-track {
    //   background: #f1f1f1;
    // }

    // /* Handle */

    // /* Handle on hover */
    //
}
</style>