# Servicio de Ventas (Base de datos)

El servicio de ventas utiliza Sequelize, una biblioteca de Node.js, para interactuar con la base de datos relacional.

## Entidades

### proveedores **(Entidad Datos)**
- RUT **(PK): clave primaria.** 
- nombre: **(nombre del proveedor)**
- direccion_id **(FK): clave foranea que hace referencia a la entidad direcciones.**
- telefono: **(UQ): numero de telefono del proveedor**
- pagina_web: **(pagina web del proveedor)**

### clientes **(Entidad Datos)**
- RUT **(PK): clave primaria.**
- nombre: **(nombre del cliente)**
- direccion_id **(FK): clave foranea que hace referencia a la entidad direcciones.**

### telefonos_clientes **(Entidad Datos)**
- id **(PK): clave primaria.**
- telefono **(numero de telefono del cliente)**
- cliente_id **(FK): clave foranea que hace referencia a la entidad clientes.**

### direcciones **(Entidad Datos)**
- id **(PK): clave primaria**
- calle **(nombre de la calle del domicilio)**
- numero_ext **(numero externo del domicilio)**
- delegacion **(delegacion o alcaldia del domicilio)**
- ciudad **(ciudad del domicilio)**
- cp **(codigo postal del domicilio)**

### productos **(Entidad Catalogo/Entidad Pivote)**
- id **(PK): clave primaria**
- nombre **(nombre del producto)**
- precio_actual **(precio actual del producto)**
- stock **(cantidad de productos existentes)**
- proveedor_RUT **(FK): clave foranea hace referencia a la entidad proveedores.**
- descripcion **(informacion sobre el producto)**
- categoria_id **(FK): clave foranea hace referencia a la entidad categorias.**

### categorias **(Entidad Catalogo)**
- id **(PK): clave primaria**
- nombre **(nombre de la categoria)**

### ventas **(Entidad Datos/Entidad Pivote)**
- id **(PK): clave primaria**
- fecha **(fecha en que se realizo la venta)**
- monto_final **(total de la compra)**
- cliente_RUT **(FK): clave foranea hace referencia a la entidad clientes.**
- detalles_ventas_id **(FK): clave foranea hace referencia a la entidad detalles_ventas.**

### detalles_ventas **(Entidad Datos)**
- id **(PK): clave primaria**
- cantidad_vendida **(cantidad de los productos vendidos)**
- producto_id **(FK): clave foranea hace referencia a la entidad productos.**


## DIAGRAMAS
### DIAGRAMA ENTIDAD RELACION
![Diagrama Entidad Relacion](/db_diagrams/Diagrama%20E-R.drawio.png)

### MODELO RELACIONAL A LA BASE DE DATOS
![Modelo Relacional de la base de datos](/db_diagrams/ModeloRelacionaBD.drawio.png)

## REGLAS DE NEGOCIO

### proveedores
- Crear un proveedor
- Leer todos los proveedores
- Leeer un proveedor por medio de su RUT
- Eliminar un proveedor por medio de su RUT
- Actualizar un proveedor por medio de su RUT

### clientes
- Crear un cliente
- Leer todos los clientes
- Leer un cliente por medio de su RUT
- Eliminar un cliente por medio de su RUT
- Actualizar un cliente por medio de su RUT

### productos
- Crear un producto 
- Leer todos los productos
- Leer un producto por medio de su id
- Leer todos los productos por medio de su categoria
- Eliminar un producto por medio de su id
- Actualizar un producto por medio de su id
- Cada que se realice una venta restarle al stock el numero de productos vendidos

### ventas
- Crear una venta
- Leer todas las ventas
- Leer una venta por medio de su id
- Leer todas las ventas de un cliente
- Actualizar una venta por medio de su id
- Eliminar una venta por medio de su id
- Al momento de tener el precio toatal de loa venta se le aplicara el descuento para tener el monto_final

### categorias
- Crear una categoria
- Leer todas las categorias
- Leer una categoria por su id
- Actualizar una categoria
- Eliminar una categoria

 