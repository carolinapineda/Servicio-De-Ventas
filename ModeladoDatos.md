# Servicio de Ventas (Base de datos)       

## Entidades

### proveedores
- RUT **(PK)** 
- nombre 
- direccion
- telefono
- pagina_web

### clientes
- RUT **(PK)**
- nombre
- direccion_id **(FK)**

### telefonos_de_contacto
- id **(PK)**
- telefono
- cliente_id **(FK)**

### direcciones
- id **(PK)**
- calle
- numero
- comuna
- ciudad

### productos
- id **(PK)**
- nombre
- precio
- stock
- proveedor_RUT **(FK)**
- categoria_id **(FK)**

### categorias
- id **(PK)**
- nombre
- descripcion

### ventas
- id **(PK)**
- fecha
- monto_final
- cliente_RUT **(FK)**
- detalles_ventas_id **(FK)**

### detalles_ventas
- id **(PK)**
- cantidad_vendida
- producto_id **(FK)**


