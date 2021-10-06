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
            <BaseCheckbox v-model="c1" />
            <BaseCheckbox v-model="c2" checked />
            <BaseCheckbox disabled />
            {{ c1 }} {{ c2 }}
        </div>

        <div style="display: flex; gap: 100px; margin-top: 5em">
            <div>
                <BaseSelect
                    v-model="selected"
                    :options="options1"
                    placeholder="Choose the value"
                    >Country</BaseSelect
                >
            </div>
        </div>

        <div style="display: flex; gap: 100px; margin-top: 5em">
            <BaseButton class="primary" @click="foo = ''"
                >Input reset</BaseButton
            >
            <BaseButton class="secondary" @click="foo = foo + 1"
                >Input char</BaseButton
            >
        </div>

        <div style="display: flex; gap: 100px; margin-top: 5em">
            <BaseDatepicker v-model="date" />
            {{ date }}
        </div>

        <div style="display: flex; gap: 100px; margin-top: 5em"></div>

        <p v-for="item in comments" :key="item.id">
            {{ item.name }} - {{ item.body }}
        </p>
    </div>
</template>

<script>
export default {
    layout: 'default',

    async asyncData({ $axios }) {
        const comments = await $axios.$get(
            'https://jsonplaceholder.typicode.com/comments?postId=1'
        )
        return { comments }
    },

    data() {
        return {
            foo: 'test',
            c1: true,
            c2: false,
            l1: 'first',
            l2: 'second',
            items: ['first', 'second', 'third'],
            options1: [
                'foo',
                'bar',
                'hifdgsfd',
                'byebysdfgsde',
                'hisdfgsfd',
                'byesdfgbye',
            ],
            selected: 'foo',
            date: Date.now(),
        }
    },

    computed: {
        ok() {
            return this.foo.length > 6
        },
    },
}
</script>
