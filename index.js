const express = require('express');
const apiRoutes = require('./app/routes');
const conexion = require('./app/config/connectionDB');
const documents = require('./app/config/documentsApi');
const app = express();
const cors = require('cors')
require('dotenv').config();

app.set('port', process.env.PORT || 8000);

//Ruta donde se encuentra la documentacion de la api {/api/v1/docs}
documents(app);
//Middlewares
app.use(express.json());
app.use(cors());
//Conexion a la base de datos
conexion(app)
//Enrutador de la api
apiRoutes(app);

app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});