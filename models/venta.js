import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

// Definir el modelo de la tabla Ventas 
export const Ventas = sequelize.define('ventas', {

    // Columna "id" para identificador unico
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Columna "fecha" para saber el dia en que se realizo la venta
    fecha: {
        type: DataTypes.DATE
    },
    // Columna "monto_final" para saber el precio total de los productos
    monto_final: {
        type: DataTypes.DOUBLE
    }
},{
    // Deshabilita las marcas de tiempo predeterminadas 'createdAt' y 'updatedAt'
    timestamps: false
});