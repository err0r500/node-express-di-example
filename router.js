const express = require('express')

const handleGetRoot = (businessLogicHandler) => async (req, res) => {
    const age = +req.params.age
    if (!Number.isInteger(age)) {
        return res.status(400).send()
    }

    try {
        res.send(await businessLogicHandler(age))
    } catch (e) {
        res.status(500).send()
    }
}

exports.getRouter = async (businessLogicHandler) => {
    const handler = await handleGetRoot(businessLogicHandler)

    let app = express()
    app.get('/:age', handler)

    return app
}
