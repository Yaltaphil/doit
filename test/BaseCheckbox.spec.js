import { shallowMount } from '@vue/test-utils'
import check from '@/components/Base/Checkbox.vue'

let wrapper = null

beforeEach(() => {
    wrapper = shallowMount(check)
})

afterEach(() => {
    wrapper.destroy()
})

describe('BaseCheckbox', () => {
    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
    test('exists and visible:', () => {
        expect(wrapper.exists()).toBeTruthy()
        expect(wrapper.isVisible()).toBeTruthy()
    })
})
