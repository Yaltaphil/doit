<template>
    <div class="inputBody">
        <slot>Enter:</slot>
        <input type="text" placeholder="google@gmail.com" />
    </div>
</template>

<style lang="scss" scoped>
.inputBody {
    position: relative;
    width: 240px;
    height: 60px;

    & input[type=text] {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 12px 16px;
        color: #627ca3;
        background-color: rgba(0, 0, 0, 0);
        position: absolute;
        width: 240px;
        height: 40px;
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
            box-sizing: border-box;
            border-radius: 2px;
        }

        &:active {
            color: #e6e6e6;
            background: #16263d;
            border: 1px solid #185ec7;
            box-sizing: border-box;
            border-radius: 2px;
        }

        &:disabled {
            color: #98a4b5;
            background: #121f33;
            border-radius: 2px;
        }
    }
}
</style>