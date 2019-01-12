const express = require('express')
const {businessLogic} = require("./business")

const handleGetRoot = (apiCaller) => async (req, res) => {
    console.log("handleGetRoute")
    res.send(await businessLogic(apiCaller))
}

exports.startRouter = (apiCaller) => async () => {
    console.log("startRouter")
    const handler = await handleGetRoot(apiCaller)
    console.log("handler ready, start express server")

    const app = express()
    const port = 3000
    app.get('/', handler)
    app.get('/2', handler)
    app.get('/3', handler)

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}
