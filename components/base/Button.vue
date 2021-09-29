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


<style lang="scss">
// classes: primary secondary block white
.button {
    // width: 160px;
    padding: 0.75rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
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
        transform: scale(1.03);
        filter: drop-shadow(0px 0px 1px rgba(247, 243, 3, 0.815));
    }
    &:active {
        background: linear-gradient(0deg, #03112b 0%, #0960e0 100%);
    }
    &:disabled {
        background: linear-gradient(0deg, #2e2e2e 0%, #434650 100%);
        cursor: not-allowed;
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
.block {
    width: 95%;
}
.white {
    color: white;
}
</style>