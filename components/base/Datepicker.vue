<template>
    <div>
        <slot></slot>
        <no-ssr>
            <v-date-picker
                title-position="left"
                show-caps
                locale="en"
                v-bind="$attrs"
                :first-day-of-week="1"
                :masks="{ title: 'YYYY MMMM', input: 'DD-MM-YYYY' }"
                v-on="$listeners"
            >
                <template #default="{ inputValue, togglePopover }">
                    <div class="datepicker" @click="togglePopover()">
                        <input
                            class="datepicker__input"
                            :value="inputValue"
                            readonly
                            placeholder="dd-mm-yyyy"
                        />
                        <svg
                            class="datepicker__icon"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.4167 3.66708H4.58333C3.57081 3.66708 2.75 4.4879 2.75 5.50042V18.3338C2.75 19.3463 3.57081 20.1671 4.58333 20.1671H17.4167C18.4292 20.1671 19.25 19.3463 19.25 18.3338V5.50042C19.25 4.4879 18.4292 3.66708 17.4167 3.66708Z"
                                stroke="#627CA3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M14.6664 1.83292V5.49959"
                                stroke="#627CA3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M7.33356 1.83292V5.49959"
                                stroke="#627CA3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M2.75 9.16708H19.25"
                                stroke="#627CA3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </template>
            </v-date-picker>
        </no-ssr>
    </div>
</template>

<script>
export default {
    name: 'Datepicker',
}
</script>

<style lang="scss">
.datepicker {
    min-width: 240px;
    display: flex;
    justify-content: space-between;
    position: relative;
    font-family: 'Rubik';
    font-weight: 400;
    height: auto;
    & .datepicker__input {
        width: 100%;
        height: 40px;
        padding: 0.56rem 1rem;
        border: 1px solid #16263d;
        border-radius: 2px;
        color: #627ca3;
        background: rgba($color: #000000, $alpha: 0);
        &::placeholder {
            color: #627ca3;
        }
        &:focus-visible {
            outline: none;
        }
        &:focus {
            color: #627ca3;
            background: #121f33;
            border: 1px solid #627ca3;
            border-radius: 2px;
        }
        &:active {
            color: #e6e6e6;
            background: #16263d;
            border: 1px solid #185ec7;
            border-radius: 2px;
        }
        &:disabled {
            color: #98a4b5;
            background: #121f33;
            border-radius: 2px;
        }
    }
    & .datepicker__icon {
        position: absolute;
        padding: 0.5rem;
        right: 0;
        width: auto;
        height: auto;
    }
}
</style>