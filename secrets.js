exports.getSecrets = (ms) => new Promise((resolve) => {
    setTimeout(() => resolve("my secrets fetched async"), ms)
})
