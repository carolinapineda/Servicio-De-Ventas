# Servicio de Ventas (Base de datos)

El servicio de ventas utiliza Sequelize, una biblioteca de Node.js, para interactuar con la base de datos relacional.

## Entidades

### proveedores
- RUT **(PK): clave primaria.** 
- nombre: **(nombre del proveedor)**
- direccion_id **(FK): clave foranea que hace referencia a la entidad direcciones.**
- telefono: **(número de teléfono del proveedor)**
- pagina_web: **(pagina web del proveedor)**

### clientes
- RUT **(PK): clave primaria.**
- nombre: **(nombre del cliente)**
- direccion_id **(FK): clave foranea que hace referencia a la entidad direcciones.**

### telefonos_clientes
- id **(PK): clave primaria.**
- telefono **(numero de telefono del cliente)**
- cliente_id **(FK): clave foranea que hace referencia a la entidad clientes.**

### direcciones
- id **(PK): clave primaria**
- calle **(nombre de la calle del domicilio)**
- numero_ext **(numero externo del domicilio)**
- delegacion **(delegacion o alcaldia del domicilio)**
- ciudad **(ciudad del domicilio)**
- cp **(codigo postal del domicilio)**

### productos
- id **(PK): clave primaria**
- nombre **(nombre del producto)**
- precio_actual **(precio actual del producto)**
- stock **(cantidad de productos existentes)**
- proveedor_RUT **(FK): clave foranea hace referencia a la entidad proveedores.**
- descripcion **(informacion sobre el producto)**
- categoria_id **(FK): clave foranea hace referencia a la entidad categorias.**

### categorias
- id **(PK): clave primaria**
- nombre **(nombre de la categoria)**

### ventas
- id **(PK): clave primaria**
- fecha **(fecha en que se realizo la venta)**
- monto_final **(total de la compra)**
- cliente_RUT **(FK): clave foranea hace referencia a la entidad clientes.**
- detalles_ventas_id **(FK): clave foranea hace referencia a la entidad detalles_ventas.**

### detalles_ventas
- id **(PK): clave primaria**
- cantidad_vendida **(cantidad de los productos vendidos)**
- producto_id **(FK): clave foranea hace referencia a la entidad productos.**


## DIAGRAMA ENTIDAD RELACION
![Diagrama Entidad Relacion](/db_diagrams/Diagrama%20E-R.png)

## MODELO RELACIONAL A LA BASE DE DATOS
![Modelo Relacional de la base de datos](/db_diagrams/ModeloRelacional-BD.png)
