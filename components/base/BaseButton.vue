<template>
    <button :id="_uid" class="button" v-bind="$attrs" v-on="$listeners">
        <slot>Submit</slot>
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
}
</script>


<style lang="scss" >
.button {
    padding: 1rem 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
    border-radius: 2px;
    border: 1px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    color: #f5f5f5;
    &:hover {
        cursor: pointer;
        transform: scale(1.01);
        filter: drop-shadow(0px 0px 1px rgb(247, 243, 3, 0.5));
    }
    &:active {
        background: linear-gradient(0deg, #2788f6 0%, #0960e0 100%);
    }
}
.primary {
    background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
    color: #f5f5f5;
    border-radius: 0;
    border: none;
}
.secondary {
    background: #1a222d;
    color: #0a61e1;
    border-radius: 0;
    border: none;
    &:active {
        background: linear-gradient(0deg, #3f3f44, #1c1c1d 100%);
    }
}
</style>