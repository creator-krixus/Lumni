const mysql = require('mysql');
const conn = require('express-myconnection');

const dbOptions = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME
}

const conexion = (app) => {
    app.use(conn(mysql, dbOptions, 'single'));
}
module.exports = conexion;