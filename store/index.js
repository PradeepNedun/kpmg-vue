import Vue from 'vue'

export const state = () => ({
    window: {
        innerHeight: process.browser ? +window.innerHeight: 0,
        innerWidth: process.browser ? +window.innerWidth: 0
    }
});

export const mutations = {
    SET_WINDOW_DIMENSIONS: function(state, payload) {
        state.window.innerWidth = payload.innerWidth;
        state.window.innerHeight = payload.innerHeight;
    }
}

export const getters = {
    isDesktop(state, getters) {
        let result;
        //
        if (state.window.innerWidth <= 640) {
            result = false;
        } else if (state.window.innerWidth > 640) {
            result = true;
        }
        //
        return result;
    }
}