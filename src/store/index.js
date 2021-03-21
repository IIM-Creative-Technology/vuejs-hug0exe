import { createStore } from 'vuex'

export default createStore({
    state: {
        allItem: []
    },
    mutations: {
        addPost(state, post) {
            state.allItem.push(post);
        },
        deletePost(state, check) {
            state.allItem.splice(state.allItem.indexOf(check), 1)
        }
    },
    actions: {},
    modules: {}
})