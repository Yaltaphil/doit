<template>
    <div>
        <BaseInput
            v-model="foo"
            type="text"
            placeholder="hello"
            :invalid="c1"
            :success="c2"
            >Normal</BaseInput
        >
        <p>111</p>
        <button @click="c1 = !c1">1</button>
        <button @click="c2 = !c2">2</button>
        {{ foo }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            foo: null,
            c1: false,
            c2: false,
        }
    },
}
</script>
