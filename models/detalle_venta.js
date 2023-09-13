import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

// Definir modelo de la tabla Detalles ventas
export const DetallesVentas = sequelize.define('detalles_ventas', {
    
    // Columna "id" para un identificador unico
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Columna "cantidad_vendida" saber el numero de productos vendidos
    cantidad_vendida: {
        type: DataTypes.INTEGER
    }
}, {
    // Deshabilita las marcas de tiempo predeterminadas 'createdAt' y 'updatedAt'
    timestamps: false
});