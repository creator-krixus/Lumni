const swaggerUI = require('swagger-ui-express');
const swaggerJsDocs = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Documentacion API Lumni",
            version: "1.0.0"
        },
        servers: [
            {
                url:"https://lumni.herokuapp.com/"
            }
        ]
    },
    apis: ['./app/config/documentsApi.js']
}

const documents = (app) => {
    app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs(swaggerSpec)));
}

module.exports = documents;

//Creacion del esquema de la documentacion
/**
 * @swagger
 * components:
 *   schemas:
 *      vehicles:
 *        type: object
 *        properties:
 *          id:
 *              type: number
 *          marca:
 *              type: string
 *          cantidad:
 *              type: number
 *          fecha:
 *              type: date
 *          estado:
 *              type: booleano
 *        required:
 *            -marca
 *            -cantidad  
 *        example:
 *           marca: toyota
 *           cantidad: 2
 */

//Creacion del esquema para editar una orden de produccion
/**
 * @swagger
 * components:
 *   schemas:
 *      editar:
 *        type: object
 *        properties:
 *          id:
 *              type: number
 *          marca:
 *              type: string
 *          cantidad:
 *              type: number
 *          fecha:
 *              type: date
 *          estado:
 *              type: booleano
 *        required:
 *            -marca
 *            -cantidad 
 *            -estado 
 *        example:
 *           marca: toyota
 *           cantidad: 2
 *           estado: true
 */

//Endpoint para crear nuevas ordenes
/**
 * @swagger
 * /api/v1/orders:
 *  post:
 *      summary: Create new order
 *      tags: [vehicles]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/vehicles'
 *      responses:
 *          200:
 *              description: New order create!
 */

//Endpoint para obtener todas las ordenes 
/**
 * @swagger
 * /api/v1/orders:
 *  get:
 *      summary: Return all orders
 *      tags: [vehicles]                
 *      responses:
 *          200:
 *              description: All orders
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/vehicles'
 */

//Editar la informacion de una orden
/**
 * @swagger
 * /api/v1/orders/{id}:
 *  put:
 *      summary: Update one order
 *      tags: [vehicles]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Update one order
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/editar'
 *      responses:
 *          200:
 *              description: Update order
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: objet
 *                          items:
 *                              $ref: '#/components/schemas/vehicles'
 *          404:
 *              description: Order not found
 */

//Borra una orden
/**
 * @swagger
 * /api/v1/orders/{id}:
 *  delete:
 *      summary: Delete one order
 *      tags: [vehicles]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Delete one order
 *      responses:
 *          200:
 *              description: Delete order
 *          404:
 *              description: Order not found
 */