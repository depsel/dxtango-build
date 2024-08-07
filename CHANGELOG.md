# HISTORIAL DE CAMBIOS


## [1.2.4+240807a] - 2022-08-07

### Added
- Versión e historial de cambios.

### Changed
- Mejora en la configuración de lista de artículos para edición.
- Actualizadas todas la dependencias.


## [1.2.3+240805c] - 2022-08-05

### Added
- Script install.bat, para instalación en Windows.

### Changed
- Actualizadas todas la dependencias.

### Fixed
- Cuando se ingresaba a la app se mostraba la caja de inicio de sesión, a pesar de que el usuario ya estaba logueado.


## [1.2.2+240805b] - 2022-08-05

### Fixed
- Corregido un bug en boot.js que evitaba personalizar el puerto.
- Modificado el script de build para que incluya el archivo dxtango.cfg.DEFAULT


## [1.2.1+240805a] - 2022-08-05

### Added
- Agregado nuevo parámetro en dxtango.cfg para personalizar el logo de inicio de sesión.

### Changed
- Los boones para interactuar con borradores ahora se diferencian de los botones par interactuar con pedidos.

### Fixed
- Corregido un bug que no permitía al administrador eliminar pedidos aprobados.


## [1.2.0+240803a] - 2022-08-03

### Added
- Ahora puede agrupar artículos según su código, indicando el separador de grupo (espacio, guión, etc).

### Changed
- Si no hay acciones habilitadas para el pedido o el borrador, el botón se desactiva en vez de mostrar un menú vacío.

### Fixed
- Corregido error en la query de limpieza de datos extra de pedidos.
- Corregidas operaciones de fecha y hora en MS SQL.
- Corregido asunto de correo cuando no se muestra la fecha de entrega.


## [1.1.7+240730d] - 2022-07-30

### Changed
- Tanto las leyendas como los mensajes internos se imprimen al final del pedido.
- Los mensajes internos ahora se imprimen.


## [1.1.6+240730c] - 2022-07-30

### Fixed
- No mostraba la descripción del borrador en el mensaje de creación.


## [1.1.5] - 2022-07-30

### Changed
- Botones más grandes.


## [1.1.4] - 2022-07-30

### Changed
- Botones más grandes, nuevos íconos.
- Cuando la app corre en dispositivos móbiles, en la lista de pedidos y borradores, se oculta la columna "bonificado".

### Fixed
- El proceso de purgado de la tabla de campos extra de pedidos ahora está protegido contra fallos.


## [1.1.3] - 2022-07-29

### Changed
- El campo Mensaje interno ahora es un TextField y permite saltos de línea.


## [1.1.2] - 2022-07-29

### Fixed
- Ahora se permiten 240 caracteres en el campo de mensaje interno.


## [1.1.1] - 2022-07-29

### Changed
- Reorganización de encabezados de pedidos y borradores.

### Fixed
- El sistema ahora refresca la configuración de correo sin necesidad de reiniciar.


## [1.1.0] - 2022-07-28

### Added
- Nuevo campo de pedidos: Mensaje interno. Los mensajes internos solo pueden verlos los vendedores y el admin dentro de DXTango.

- Configuración global de pedidos: mensaje personalizado luego de crear o modificar un pedido.
- Configuración global de pedidos: mostrar u ocultar fecha de entrega a clientes.

### Changed
- Se visualizan todos los valores sin impuestos.
- Los comentarios se convierten en 5 líneas de leyenda (100% compatible con Tango).
- Envía correo a todos los participantes (administrador, vendedores y clientes)
- Ahora puede convertir en borrador un pedido que está siendo duplicado.

### Fixed
- Corregido un error durante el filtrado de datos.

## [1.0.1] - 2022-07-22
 
### Fixed
- Ingreso de cantidades en editor de borrador.


## [1.0.0] - 2022-07-21

### Added
- Versión inicial.
