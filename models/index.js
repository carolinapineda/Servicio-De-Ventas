import { Categorias } from "./categoria.js";
import { Direcciones } from "./direccion.js";
import { Productos } from "./producto.js";
import { Proveedores } from "./proveedor.js";

// Relacion de mis modelos Proveedores a Direcciones 1:1
// Proveedores.belongsTo(Direcciones, {
//     foreignKey: 'direccion_id'
// });

// Direcciones.hasMany(Proveedores, {
//     foreignKey: 'direccion_id'
// });

// Relacion de mis modelos Productos a Proveedores N:N
Productos.belongsTo(Proveedores);
    
// Proveedores.belongsToMany(Productos, {
//     through: 'proveedor_RFC'
// });

// Categorias.hasMany(Productos, {
//     foreignKey: 'categoria_id'
// }); 

// Productos.hasMany(Categorias, {
//     foreignKey: 'categoria_id'
// });


export { Productos, Proveedores, Direcciones, Categorias};