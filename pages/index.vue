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
        <!--
        <p v-for="item in comments" :key="item.id">
            {{ item.name }} - {{ item.body }}
        </p> -->

        <div
            style="
                display: flex;
                flex-direction: column;
                gap: 50px;
                margin-top: 5em;
            "
        >
            <BaseButton @click="authUser">authUser</BaseButton>
            <BaseButton @click="write">BD write all mocks</BaseButton>
            <BaseButton @click="read">BD read all mocks</BaseButton>
        </div>
    </div>
</template>

<script>
import userData from '~/mocks/user.js'
import gameData from '~/mocks/games.js'
import countryData from '~/mocks/countries.js'

export default {
    layout: 'default',

    // async asyncData({ $axios }) {
    //     const comments = await $axios.$get(
    //         'https://jsonplaceholder.typicode.com/comments?postId=1'
    //     )
    //     return { comments }
    // },

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
                'byebysdfgsde sdfg sadfgs dfgsdfg sdfgsd fgsdf g sdf',
                'hisdfgsfd',
                'hisdfgsfd',
                'hisdfgsfd',
                'hisdfgsfd',
                'hisdfgsfd',
                'hisdfgsfd',
                'hisdfgsfd',
                'hisdfgsfd',
                'byesdfgbye',
            ],
            selected: 'foo',
            date: Date.now(),
            user: userData,
            games: gameData,
            countries: countryData,
        }
    },

    computed: {
        ok() {
            return this.foo.length > 3
        },
    },

    methods: {
        authUser() {},

        async write() {
            // await this.$db.write('/users/' + this.user.id, this.user)
            // await this.$db.write('/countries', this.countries)
            await this.$db.write('/games', this.games)
            this.$toast.success(`Writing ... `)
        },

        async read() {
            this.$toast.success(`Reading ... `)
            // const r = await this.$db.read('/user/' + this.user.id)
            const r = await this.$db.read('/user')
            console.log(r)
        },
    },
}
</script>
