import { shallowMount } from '@vue/test-utils'
import BaseButton from '@/components/base/button.vue'

let wrapper = null
const someText = 'Submit'

beforeEach(() => {
    wrapper = shallowMount(BaseButton)
})

afterEach(() => {
    wrapper.destroy()
})

describe('BaseButton', () => {
    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
    test('exists and visible:', () => {
        expect(wrapper.exists()).toBeTruthy()
        expect(wrapper.isVisible()).toBeTruthy()
    })

    test('Slot works ok:', () => {
        expect(wrapper.find('button').text()).toMatch(someText)
    })

    test('Test click event', async () => {
        await wrapper.find('button').trigger('click')
    })
})
