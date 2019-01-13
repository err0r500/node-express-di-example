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

exports.router = (businessLogicHandler) => {
    const handler = handleGetRoot(businessLogicHandler)

    return express()
        .get('/:age', handler)
}
