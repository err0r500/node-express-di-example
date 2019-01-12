exports.businessLogic = async (apiCall) => {
    console.log("business logic")
    const firstApiCall = await apiCall()
    const secondApiCall = await apiCall()
    return `${firstApiCall} ${secondApiCall}`
}
