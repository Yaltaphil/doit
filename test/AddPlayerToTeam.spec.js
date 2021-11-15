import { shallowMount } from '@vue/test-utils'
import add from '@/pages/player/team/_id/add.vue'

let wrapper

beforeEach(() => {
    wrapper = shallowMount(add, {
        mocks: {
            $route: {
                params: {
                    id: 0,
                },
            },
        },
    })
})

afterEach(() => {
    wrapper.destroy()
})

describe('AddPlayerToTeam', () => {
    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    test('exists and visible:', () => {
        expect(wrapper.exists()).toBeTruthy()
        expect(wrapper.isVisible()).toBeTruthy()
    })

    test('Test click event', async () => {
        await wrapper.find('button').trigger('click')
    })
})
