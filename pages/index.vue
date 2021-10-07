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
            <BaseButton class="primary" @click="foo = ''"
                >Input reset</BaseButton
            >
            <BaseButton class="secondary" @click="foo = foo + 1"
                >Input char</BaseButton
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
            <BaseDatepicker v-model="date" />
            {{ date }}
        </div>

        <p v-for="item in comments" :key="item.id">
            {{ item.name }} - {{ item.body }}
        </p>

        <div style="display: flex; gap: 100px; margin-top: 5em">
            <BaseButton @click="authUser">toasts</BaseButton>
            <BaseButton @click="write">BD write test</BaseButton>
            <BaseButton @click="read">BD read test</BaseButton>
        </div>
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
            return this.foo.length > 3
        },
    },

    methods: {
        authUser() {
            this.$toast.show('User is here!')
            this.$toast.error('User is not here!')
            this.$toast.success('User !!!s')
        },
        async write() {
            try {
                await this.$fire.database.ref('/test').set({ name: 'test ok' })
                this.$toast.success(`Writing to database`)
            } catch (e) {
                this.$toast.error(`Error writing to database: ${e.message}`)
                throw e
            }
        },

        async read() {
            try {
                let r = await this.$fire.database.ref('/test').once('value')
                r = r.val()
                this.$toast.success(`Reading ... ${r.name}`)
            } catch (e) {
                this.$toast.error(`Error reading from database: ${e.message}`)
            }
        },
    },
}
</script>
