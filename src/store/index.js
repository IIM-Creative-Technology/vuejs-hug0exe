import { createStore } from 'vuex'

export default createStore({
    state: {
        allItem: []
    },
    mutations: {
        addPost(state, post) {
            state.allItem.push(post);
        }
    },
    actions: {},
    modules: {}
})