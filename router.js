const express = require('express')

const handleGetRoot = (businessLogicHandler) => async (req, res) => {
    try {
        res.send(await businessLogicHandler())
    } catch (e) {
        res.status(500).send()
    }
}

exports.getRouter = async (businessLogicHandler) => {
    const handler = await handleGetRoot(businessLogicHandler)

    let app = express()
    app.get('/', handler)
    app.get('/2', handler)
    app.get('/3', handler)

    return app
}
