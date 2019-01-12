exports.getApiCaller = (conf) => (ms) => () =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log("api call")
            resolve(`apiCall using conf: ${conf}, responds in ${ms}ms`)
        }, ms)
    })
