<template>
    <div style="display: flex; gap: 10px">
        <BaseInput v-model="foo" type="text" placeholder="hello"
            >Normal</BaseInput
        >
        <BaseInput v-model="foo" type="text" placeholder="hello" :invalid="ok"
            >Invalid</BaseInput
        >
        <BaseInput v-model="foo" type="text" placeholder="hello" :success="ok"
            >Success</BaseInput
        >
    </div>
</template>

<script>
export default {
    layout: 'default',

    data() {
        return {
            foo: '',
        }
    },

    computed: {
        ok() {
            return this.foo.length > 6
        },
    },
}
</script>
