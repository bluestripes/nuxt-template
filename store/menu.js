export const state = () => ({
    visible: false
})

export const mutations = {
    open(state) {
        state.visible = true;
    },
    close(state) {
        state.visible = false
    }
}

export const getters = {
    visible: state => state.visible
}