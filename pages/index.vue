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
            <BaseDropdown v-model="l1" :items="items">Dropdown</BaseDropdown>
            {{ l1 }}
            <BaseDropdown v-model="l2" :items="items">Dropdown</BaseDropdown>
            {{ l2 }}
        </div>

        <div>
            <v-select>sdfgasf</v-select>

            <v-select
                class="style-chooser"
                placeholder="Choose a Styling Option"
                :options="[
                    'Components',
                    'CSS / Variables',
                    'Slots',
                    'Components',
                    'CSS / Variables',
                    'Slots',
                    'Components',
                    'CSS / Variables',
                    'Slots',
                    'Components',
                    'CSS / Variables',
                    'Slots',
                ]"
            />
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
            l1: 'first',
            l2: 'second',
            items: ['first', 'second', 'third'],
        }
    },

    computed: {
        ok() {
            return this.foo.length > 6
        },
    },
}
</script>

<style >
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
    background: #aebae6;
    border: none;
    color: #a74e64;
    text-transform: lowercase;
    font-variant: small-caps;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
    fill: #74ca53;
}
</style>