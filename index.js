const {startRouter} = require("./router")
const {getApiCaller} = require("./apiCaller")
const {getConf} = require("./secrets")

exports.init = async () => {
    console.log("init")
    await startRouter(
        await getApiCaller(
            await getConf(100)
        )(500)
    )()
}

