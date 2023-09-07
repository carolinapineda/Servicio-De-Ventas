import 'dotenv/config';
import express from "express";
import cors from "cors"
import { sequelize } from './database/database.js';

// Creacion de una inatancia de la aplicacion express
const app = express();

// Middlewares para analizar las solicitudes entrantes en formato JSON y URL
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Definir el puerto
const port = process.env.PORT;

// Configuracion de opciones cors
const corsOption = {
    origin: 'http://localhost:8080'
}

// Utilizamos el cors
app.use(cors(corsOption));

async function main() {
    try {
        // Sincronizacion a la base de datos
        await sequelize.sync({force: false})
        console.log('La conexion a la base de datos se a establecido correctamente');

        // Ocupar el puerto 
        app.listen(port, () => {
            console.log('El servicio esta corriendo en el puerto', port)
        });

        // Comprobar la conexion a la base de datos 
        await sequelize.authenticate();
        
    } catch (error) {
        console.error('No se puede conectar a la base de datos:', error)
    }
}

main();
