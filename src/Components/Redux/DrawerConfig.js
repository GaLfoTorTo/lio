const initialDrawerState = {
    rightDrawer: ''
};

export const types = {
    APP_CONFIG: {
        TOGGLE_DRAWER: 'APP_CONFIG/TOGGLE_DRAWER',
        RESET_LEFT_DRAWER: 'APP_CONFIG/RESET_LEFT_DRAWER',
        OPEN_LEFT_DRAWER: 'APP_CONFIG/OPEN_LEFT_DRAWER',
    }
};

export const actions = {
    toggleLeftDrawer: () => ({
        type: types.APP_CONFIG.TOGGLE_DRAWER,
    }),
    resetLeftDrawer: () => ({
        type: types.APP_CONFIG.RESET_LEFT_DRAWER,
    }),
    openLeftDrawer: () => ({
        type: types.APP_CONFIG.OPEN_LEFT_DRAWER,
    })
};

export const reducer = (state = initialDrawerState, action) => {
    switch(action.type){
        case types.APP_CONFIG.TOGGLE_DRAWER:
            return {... state, rightDrawer: 'toggle'};
        case types.APP_CONFIG.OPEN_LEFT_DRAWER:
            return {... state, rightDrawer: 'open'};
        case types.APP_CONFIG.RESET_LEFT_DRAWER:
            return {... state, rightDrawer: ''};
        default:
            return state;
    }
}