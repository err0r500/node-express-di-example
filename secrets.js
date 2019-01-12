exports.getConf = (ms) => new Promise((resolve) => {
    console.log("fetch secrets")
    setTimeout(() => resolve("my secrets fetched async"), ms)
})
