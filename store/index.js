export const state = () => ({
    currentUser: null,
})

export const getters = {
    currentUser: (state) => {
        return state.currentUser
    },
}

export const mutations = {
    updateCurrentUser: (state, payload) => {
        state.currentUser = payload
    },
}

export const actions = {
    updateCurrentUser({ commit, payload }) {
        commit('updateCurrentUser', payload)
    },
}
