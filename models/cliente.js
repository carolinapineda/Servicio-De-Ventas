import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';

// Definir el modelo de la tabla Clientes
export const Clientes = sequelize.define('clientes', {

    // Columna "id" para un identificador unico
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    // Columna "nombre" para el nombre del cliente
    nombre: {
        type: DataTypes.STRING,    
    },
},{
    // Deshabilita las marcas de tiempo predeterminadas 'createdAt' y 'updatedAt'
    timestamps: false
});

