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
    </div>
</template>

<script>
export default {
    layout: 'default',

    data() {
        return {
            foo: 'kjhlsadfk;ljh',
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
        }
    },

    computed: {
        ok() {
            return this.foo.length > 6
        },
    },
}
</script>

<style lang="scss">
// .style-chooser {
//     width: 100%;
//     height: 36px;
//     font-family: 'Rubik';
//     font-style: normal;
//     font-weight: normal;
//     font-size: 16px;
//     line-height: 100%;
//     color: #d4deee;
//     background: #16263d;
//     border: 1px solid #1c2f4d;
//     border-radius: 2px;

//     & .vs__search::placeholder {
//         color: #16263d;
//         border: none;
//         border-radius: 2px;
//     }

//     & .vs__dropdown-toggle {
//         background: #233b5f;
//         color: white;
//     }

//     & .vs__dropdown-menu {
//         // color: #e6e6e6;
//         background: #16263d;
//     }

//     & .vs__clear,
//     .vs__open-indicator {
//         fill: rgb(80, 136, 177);
//     }
// }
</style>