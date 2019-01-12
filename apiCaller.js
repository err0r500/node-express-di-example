exports.getApiCaller = (conf) => (ms) => () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(`apiCall using conf: ${conf}, responds in ${ms}ms`)
        }, ms)
    })
