<template>
    <div
        class="input"
        :class="{ input__invalid: invalid, input__success: success }"
    >
        <label for="input"> <slot></slot> </label>
        <input
            id="input"
            autocomplete="off"
            v-bind="$attrs"
            :value="value"
            @input="$emit('input', $event.target.value)"
        />
        <div class="input__times">&times;</div>
        <div class="input__checkmark">&checkmark;</div>
        <div class="input__message">invalid type of data</div>
    </div>
</template>

<script>
export default {
    name: 'BaseInput',

    props: {
        value: { type: String, default: null },
        invalid: { type: Boolean, default: false },
        success: { type: Boolean, default: false },
    },
}
</script>

<style lang="scss" scoped>
.input {
    position: relative;
    width: 240px;
    height: 60px;

    & input {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 12px 16px;
        color: #627ca3;
        background-color: rgba(0, 0, 0, 0);
        width: 240px;
        height: 40px;
        position: absolute;
        left: 0px;
        top: 20px;
        border: 1px solid #16263d;
        box-sizing: border-box;
        border-radius: 2px;

        &::placeholder {
            position: static;
            left: 6.67%;
            right: 7.08%;
            top: 30%;
            bottom: 30%;
            font-family: 'Rubik';
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 100%;
            color: #627ca3;
            flex: none;
            order: 0;
            flex-grow: 0;
            margin: 10px 0px;
        }
        &:focus {
            color: #627ca3;
            background: #121f33;
            border: 1px solid #627ca3;
            border-radius: 2px;
        }
        &:active {
            color: #e6e6e6;
            background: #16263d;
            border: 1px solid #185ec7;
            border-radius: 2px;
        }
        &:disabled {
            color: #98a4b5;
            background: #121f33;
            border-radius: 2px;
        }
    }
    & .input__message {
        display: none;
    }
    & .input__times {
        display: none;
    }
    & .input__checkmark {
        display: none;
    }
}

.input__invalid {
    & input {
        border: 1px solid #b83333;
        border-radius: 2px;
        &:active {
            border: 1px solid #b83333;
            border-radius: 2px;
        }
        &:focus {
            border: 1px solid #b83333;
            border-radius: 2px;
        }
    }
    & .input__times {
        display: block;
        color: #b83333;
        position: absolute;
        font-size: 32px;
        left: 212px;
        top: 20px;
    }
    & .input__message {
        display: block;
        position: absolute;
        left: 0%;
        top: 95%;
        bottom: 0%;
        font-family: 'Rubik';
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 100%;
        color: #b83333;
        flex: none;
        order: 1;
        align-self: flex-start;
        flex-grow: 0;
        margin: 4px 0px;
    }
    & .input__checkmark {
        display: none;
    }
}

.input__success {
    & input {
        border: 1px solid #4cb725;
        border-radius: 2px;
        &:active {
            border: 1px solid #4cb725;
            border-radius: 2px;
        }
        &:focus {
            border: 1px solid #4cb725;
            border-radius: 2px;
        }
    }
    & .input__checkmark {
        display: block;
        color: #4cb725;
        position: absolute;
        font-size: 24px;
        left: 212px;
        top: 28px;
    }
    & .input__times {
        display: none;
    }
    & .input__message {
        display: none;
    }
}
</style>