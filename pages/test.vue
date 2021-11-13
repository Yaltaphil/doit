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

        <div style="display: grid; gap: 100px; margin-top: 5em; width: 200px">
            <BaseButton @click="write">BD write all mocks</BaseButton>
            <BaseButton @click="read">BD read all mocks</BaseButton>
        </div>

        {{ $auth.strategy.token.get()}}
        {{ $auth.strategy.token.status()}}
    </div>
</template>

<script>
import usersData from '~/mocks/users.js'
import gameData from '~/mocks/games.js'
import countryData from '~/mocks/countries.js'
import partnersData from '~/mocks/partners.js'
import tournamentsData from '~/mocks/tournaments.js'
import newsData from '~/mocks/news.js'
import streamsData from '~/mocks/streams.js'

export default {
    data() {
        return {
            foo: 'test',
            c1: true,
            c2: false,
            l1: 'first',
            l2: 'second',
            items: ['first', 'second', 'third'],
            options1: ['foo', 'bar', 'hisdfgsfd', 'byesdfgbye'],
            selected: 'foo',
            date: Date.now(),
            users: usersData,
            games: gameData,
            countries: countryData,
            partners: partnersData,
            tournaments: tournamentsData,
            news: newsData,
            streams: streamsData,
        }
    },

    computed: {
        ok() {
            return this.foo.length > 3
        },
    },

    methods: {
        async write() {
            // await this.users.map( item => this.$db.write('/users/' + item.id, item))
            // await this.$db.write('/users', this.users)
            // await this.$db.write('/countries', this.countries)
            await this.$db.write('/games', this.games)
            // await this.$db.write('/partners', this.partners)
            // await this.$db.write('/tournaments', this.tournaments)
            // await this.$db.write('/news', this.news)
            // await this.$db.write('/streams', this.streams)
            this.$toast.success(`Writing ... `)
        },

        async read() {
            this.$toast.success(`Reading ... `)
            // const r = await this.$db.read('/user/' + this.user.id)
            const r = await this.$db.read('/users')
            console.log(r)
        },
    },
}
</script>
