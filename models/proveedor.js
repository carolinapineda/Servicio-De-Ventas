import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Productos } from "./producto.js";

// Definir el modelo de la tabla Proveedores
export const Proveedores = sequelize.define('proveedores', {

    // Columna "id" para un identificador unico
    id:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    // Columna "nombre" para el nombre del proveedor
    nombre: {
        type: DataTypes.STRING
    },
    // Columna "telefono" para el numero de celular de un proveedor
    telefono: {
        type: DataTypes.STRING,
        unique: true
    },
    // Columna "pagina_web" para la url de la pagina del proveedor
    pagina_web: {
        type: DataTypes.STRING,
    }
},{
    // Deshabilita las marcas de tiempo predeterminadas 'createdAt' y 'updatedAt'
    timestamps: false
});

// Relacion de muchos a muchos
Productos.belongsToMany(Proveedores,{
    through:'union'
});

