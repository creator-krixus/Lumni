const express = require('express');
const route = express.Router();
const controller = require('../controllers/ordersController')

//Se crea una nueva orden de fabricacion
route.post('/', controller.createOrder);
//Retorna una lista completa de las ordenes de fabricacion
route.get('/', controller.getOrders);
//Se puede modificar una orden
route.put('/:id', controller.updateOrder);
//Borrar una orden 
route.delete('/:id', controller.deleteOrder);

module.exports = route;