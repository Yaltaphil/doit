<template>
    <div>
        <div style="display: flex; gap: 10px">
            <BaseInput v-model="foo" type="text" placeholder="hello"
                >Normal</BaseInput
            >
            <BaseInput
                v-model="foo"
                type="text"
                placeholder="hello"
                :invalid="ok"
                >Invalid</BaseInput
            >
            <BaseInput
                v-model="foo"
                type="text"
                placeholder="hello"
                :success="ok"
                >Success</BaseInput
            >
        </div>
        <div style="display: flex; gap: 100px; margin-top: 5em">
            <BaseCheckbox v-model="c1"/>
            <BaseCheckbox v-model="c2" checked/>
            <BaseCheckbox v-model="c3" disabled/>

        </div>
    </div>
</template>

<script>
export default {
    layout: 'default',

    data() {
        return {
            foo: '',
            c1: true,
            c2: false,
            c3: true,
        }
    },

    computed: {
        ok() {
            return this.foo.length > 6
        },
    },
}
</script>
