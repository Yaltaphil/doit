<template>
    <client-only>
        <label :for="_uid" class="check">
            <input
                :id="_uid"
                class="check__input"
                type="checkbox"
                v-bind="$attrs"
                :checked="checked"
                @change="$emit('change', $event.target.checked)"
            />
            <span class="check__box"> </span>
            <slot class="check__label"></slot>
        </label>
    </client-only>
</template>

<script>
export default {
    name: 'BaseCheckbox',

    model: {
        prop: 'checked',
        event: 'change',
    },

    props: {
        checked: Boolean,
    },
}
</script>


<style lang="scss" scoped>
.check {
    padding-left: 28px;
    cursor: pointer;
    display: block;
    position: relative;
}

.check__input {
    position: absolute;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.check__box {
    position: absolute;
    margin-left: -28px;
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 3.5H19C19.8284 3.5 20.5 4.17157 20.5 5V19C20.5 19.8284 19.8284 20.5 19 20.5H5C4.17157 20.5 3.5 19.8284 3.5 19V5C3.5 4.17157 4.17157 3.5 5 3.5Z' stroke='%231C2F4D'/%3E%3C/svg%3E");
}

/* Checked */

.check__input:checked + .check__box {
    animation: tick 200ms ease-in;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 11L12 14L22 4' stroke='%23185EC7' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16' stroke='%23185EC7' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}

/* Focused */

.check__input:focus + .check__box {
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 3.5H19C19.8284 3.5 20.5 4.17157 20.5 5V19C20.5 19.8284 19.8284 20.5 19 20.5H5C4.17157 20.5 3.5 19.8284 3.5 19V5C3.5 4.17157 4.17157 3.5 5 3.5Z' fill='%230F1929' stroke='%23294470'/%3E%3C/svg%3E");
}

.check__input:checked:focus + .check__box {
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 11L12 14L22 4' stroke='%231472FF' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16' stroke='%231472FF' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}

/* Disabled */

.check__input:disabled + .check__box {
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z' fill='%23121519' stroke='%231D2129' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}

.check__input:checked:disabled + .check__box {
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 11L12 14L22 4' stroke='%231D2129' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16' stroke='%231D2129' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}

@keyframes tick {
    0% {
        transform: scale(0);
    }
    90% {
        transform: scale(1.33);
    }
    100% {
        transform: scale(1);
    }
}
</style>