import { Categorias } from "./categoria.js";
import { Direcciones } from "./direccion.js";
import { Productos } from "./producto.js";
import { Proveedores } from "./proveedor.js";
import { Clientes } from "./cliente.js";
import { TelefonosClientes } from "./telefono_cliente.js";
import { Ventas } from "./venta.js";
import { DetallesVentas } from "./detalle_venta.js";

// Relaion de uno a uno
Direcciones.hasOne(Proveedores,{
    foreignKey: 'direccion_id'
});

// Relacion de muchos a muchos
Categorias.hasMany(Productos);

// Relacion de muchos a muchos
Productos.belongsToMany(Proveedores);

// Relacion de muchos a muchos 
Direcciones.belongsToMany(Clientes);

// Relacion de uno a muchos
Clientes.hasMany(TelefonosClientes);

// Relacion de uno a muchos
Clientes.hasMany(Ventas);

// Relacio de uno a uno 
DetallesVentas.hasOne(Ventas);

// Relacion de muchos a muchos
Productos.belongsToMany(DetallesVentas,{
    through: 'tabla_union'
});

DetallesVentas.belongsToMany(Productos,{
    through:'tabla_union'
});

export { Productos, Proveedores, Direcciones, Categorias};