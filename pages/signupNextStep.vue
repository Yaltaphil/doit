,<template>
    <section>
        <BaseLogo class="logo" />
        <h1>Sign up 2/2</h1>
        <BaseInput
            v-model.trim="$v.username.$model"
            type="text"
            :invalid="$v.username.$dirty && $v.username.$error"
            :success="$v.username.$dirty && !$v.username.$error"
            @input="$delayTouch($v.username)"
            >Username</BaseInput
        >
        <BaseSelect v-model="$v.country.$model" :options="countries"
            >Country</BaseSelect
        >
        <span></span>
        <BaseDatepicker v-model="$v.date.$model">
            Date of birth
        </BaseDatepicker>
        <BaseCheckbox v-model="$v.isAged.$model">
            <span class="label"
                >I have at least 13 years of age and agree to the
                <nuxt-link to="/termsofuse">terms of service</nuxt-link>
            </span>
        </BaseCheckbox>

        <BaseButton class="white block" :disabled="$v.$invalid"
            >Create an account</BaseButton
        >
    </section>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

const ageVerified = (value) => value === true

export default {
    layout: 'empty',

    data() {
        return {
            username: '',
            countries: [
                'Ukraine',
                'Russia',
                'United States',
                'Germany',
                'Canada',
                'Great Britain',
            ],
            country: '',
            date: null,
            isAged: false,
        }
    },

    validations: {
        username: {
            required,
            minLength: minLength(3),
        },
        country: {
            required,
        },
        date: {
            required,
        },
        isAged: {
            required,
            ageVerified,
        },
    },
}
</script>

<style lang="scss" scoped>
section {
    margin: 80px auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 2rem;
    width: 241px;
    min-height: 572px;
    & .logo {
        width: 88px;
        height: 80px;
    }
    & .label {
        font-size: 12px;
        line-height: 16px;
        color: #627ca3;
    }
}
</style>