const errorInitialState = {

}

const authErrorReducer = (state = errorInitialState, action) => {
    switch (action.type) {
        default:
            return errorInitialState;
    }

}

export default authErrorReducer;