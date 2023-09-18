import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import { Direcciones } from './direccion.js';
import { TelefonosClientes } from './telefono_cliente.js';

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

// Relacion de muchos a muchos 
Direcciones.belongsToMany(Clientes,{
    through:'union'
});

// Relacion de uno a muchos
Clientes.hasMany(TelefonosClientes,{
    foreignKey: 'cliente_RFC'
});
