// this is exactly how the thunk is coded just the name convention here is changed also if we do not create this func funtion the thunk is already provided by the reducx toolkit

export const func = ({ dispatch, getState }) => (next) => (action) => {

    if (typeof action === "function") {
        return action(dispatch, getState)
    }

    return next(action)
} 