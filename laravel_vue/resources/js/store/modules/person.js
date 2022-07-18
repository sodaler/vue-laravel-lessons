// vars
const state = {
    person: null
}

const getters = {
    person: () => state.person
}

// methods
const actions = {
    getPerson({state, commit, dispatch}, id) {
        axios.get(`/api/people/${id}`)
            .then( res => {
                commit('setPerson', res.data.data)
            })
    },
}

// setters
const mutations = {
    setPerson(state, person) {
        state.person = person
    }
}

export default {
    state, mutations, getters, actions
}
