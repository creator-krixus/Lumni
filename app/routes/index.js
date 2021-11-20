const express = require('express');
const routers = express.Router()
const route = require('./orders')

const apiRoutes = (app) => {
    app.use('/api/v1', routers);
    routers.use('/orders', route)
}

module.exports = apiRoutes;