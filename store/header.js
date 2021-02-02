export const state = () => ({
    hidden: false 
})

export const mutations = {
    hide(state, payload) {
        console.log(payload)
        state.hidden = payload;

        let height = (payload) ? 
        getComputedStyle(document.documentElement).getPropertyValue('--header-min-height') :
        getComputedStyle(document.documentElement).getPropertyValue('--header-max-height')
        
        document.documentElement.style.setProperty('--header-height', height);
    }
}

export const getters = {
    hidden: state => state.hidden
}