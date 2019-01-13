const {router} = require("./router")
const {getApiCaller} = require("./apiCaller")
const {getSecrets} = require("./secrets")
const {businessLogic} = require("./business")

exports.init = async () => {
    router(businessLogic(
        await getApiCaller(
            await getSecrets(100)
        )(500)
    )).listen(3000)
}
