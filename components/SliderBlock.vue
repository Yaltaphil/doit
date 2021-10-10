<template>
    <section class="block">
        <div class="header">
            <div class="header__title">
                <slot name="header">Header</slot>
            </div>
            <div class="header__selector">
                <slot name="selector"> </slot>
            </div>
        </div>
        <div class="slider">
            <slot name="slider"></slot>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.block {
    width: 100%;
    height: 500px;
    .header {
        height: 90px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .slider {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        overflow-x: scroll;
    }
}
</style>