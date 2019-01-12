const {getRouter} = require("./router")
const {getApiCaller} = require("./apiCaller")
const {getSecrets} = require("./secrets")
const {businessLogic} = require("./business")

exports.init = async () => {
    const app = await getRouter(
        businessLogic(
            await getApiCaller(
                await getSecrets(100)
            )(500)
        )
    )

    app.listen(3000)
}

