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
            <BaseCheckbox v-model="c3" disabled />
        </div>

        <div style="display: flex; gap: 100px; margin-top: 5em">
            <div>
                <BaseSelect
                    v-model="selected"
                    :options="options1"
                    placeholder="Choose the value"
                    >Country</BaseSelect
                >
                <p>selected: {{ selected }}</p>
            </div>
            <div>
                <BaseSelect
                    v-model="sel"
                    :options="items"
                    placeholder="Choose the value"
                    >Country</BaseSelect
                >
                <p>sel: {{ sel }}</p>
            </div>
        </div>

        <div style="display: flex; gap: 100px; margin-top: 5em">
            <div>
                <input type="date" />
            </div>

            <client-only>
                <v-date-picker v-model="date" is-dark color="blue">
                    <template #default="{ inputValue, togglePopover }">
                        <div class="flex items-center">
                            <input :value="inputValue" readonly />
                            <button @click="togglePopover()">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </template>
                </v-date-picker>
            </client-only>

            {{ date }}
        </div>
    </div>
</template>

<script>
export default {
    layout: 'default',

    data() {
        return {
            foo: 'kjhla',
            c1: true,
            c2: false,
            c3: true,
            l1: 'first',
            l2: 'second',
            items: ['first', 'second', 'third', 'second', 'third'],
            options1: [
                'foo',
                'bar',
                'hi',
                'byebye',
                'foo',
                'bar',
                'hi',
                'byebye',
                'foo',
                'bar',
                'hi',
                'foo',
                'bar',
                'hi',
                'byebye',
                'foo',
                'bar',
                'hi',
                'byebye',
                'foo',
                'bar',
                'hi',
                'foo',
                'bar',
                'hi',
                'byebye',
                'foo',
                'bar',
                'hi',
                'byebye',
                'foo',
                'bar',
                'hi',
                'byebye',
            ],
            selected: 'foo',
            sel: '',
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
