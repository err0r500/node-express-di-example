exports.businessLogic = async (apiCall) => {
    console.log("business logic");
    try {
        const [firstApiCall, secondApiCall] = await Promise.all([apiCall(), apiCall()])
        return `${firstApiCall} ${secondApiCall}`
    } catch (e) {
        return e
    }
}
