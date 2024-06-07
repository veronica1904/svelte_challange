
# Vero Storage


Bienvenido a Vero Storage, una aplicación web sencilla donde puedes gestionar y visualizar productos, así como realizar pedidos detallados.

## Descripción

Este proyecto consiste en desarrollar una tienda en línea utilizando Svelte para el desarrollo del frontend, lo que permite una experiencia de usuario dinámica y reactiva. Se ha utilizado Supabase para la gestión de datos, proporcionando una base sólida y escalable para almacenar y consultar información. Además, se han utilizado librerías como TailwindCSS para el diseño y estilo, facilitando la creación de una interfaz de usuario moderna y responsiva.

## Estructura de la Base de Datos

El diseño de la base de datos relacional incluye las siguientes entidades y sus relaciones:

- **Categoría**: Almacena las diferentes categorías de productos.
- **Producto**: Contiene información sobre los productos disponibles en la tienda. Cada producto está asociado a una categoría específica.
- **Cliente**: Registra los datos de los clientes que pueden realizar pedidos.
- **Pedido**: Almacena los pedidos realizados por los clientes.
- **Proveedor**: Contiene información sobre los proveedores que suministran los productos.
- **Order_Product**: Gestiona la relación de muchos a muchos entre pedidos y productos.
- **Producto_Proveedor**: Maneja la relación de muchos a muchos entre productos y proveedores.

![Diagrama de Base de datos](</src/lib/images/img_diagrama_db.png>)


## Enlace al Proyecto Desplegado

Puedes acceder a la versión desplegada de la aplicación a través del siguiente enlace: [Vero Storage](URL_DE_DESPLIEGUE).

## Iniciar proyecto en desarrollo

Version node 18 
instalar dependencia: npm install
correr proyecto: npm run dev



¡Gracias por visitar nuestra tienda de productos! Esperamos que disfrutes utilizando la aplicación tanto como nosotros disfrutamos desarrollándola.
