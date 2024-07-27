const CounterReducer = (state,action) => {
    if(action.type === "INCREASE"){
        return state + 1
    }
    if(action.type === "DECREASE"){
        return state - 1
    }
    return state
}

export default CounterReducer