<template>
    <div class="input">
        <label for="dropdown"> <slot></slot> </label>
        <select
            id="dropdown"
            name="dropdown"
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
    display: block;
    width: 240px;
    height: 60px;

    & select {
        background-color: transparent;
        width: 100%;
        height: 40px;
        border-radius: 2px;
        border: 1px solid #1c2f4d;
        outline: none;
        position: absolute;
        font-family: 'Rubik';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 100%;
        color: #627ca3;

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
        &:focus {
        }
        &:active {
        }
        &:disabled {
        }
    }
}
</style>