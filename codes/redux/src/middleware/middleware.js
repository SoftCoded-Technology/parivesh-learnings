const middleware = store => next => action => {
    console.log(action)
    // console.log(store)
    // console.log(next)
    next(action)
}

export default middleware