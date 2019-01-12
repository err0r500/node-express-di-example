exports.businessLogic = (apiCall) => async () => {
    try {
        const [firstApiCall, secondApiCall] = await Promise.all([apiCall(), apiCall()])
        return `${firstApiCall} ${secondApiCall}`
    } catch (e) {
        return e
    }
}
