<template>
    <div class="frame">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.frame {
    width: 123px;
    height: 120px;
    border: 1px solid black;
    background: #000;
    border-radius: 4px;
}
</style>