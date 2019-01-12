exports.businessLogic = (apiCall) => async (age) => {
    try {
        const [firstApiCall, secondApiCall] = await Promise.all([apiCall(), apiCall()])
        return `${age} ${firstApiCall} ${secondApiCall}`
    } catch (e) {
        return e
    }
}
