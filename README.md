# Prueba Tecnica Full Stack
La aplicación debe constar de servidor y cliente. El servidor debe exponer un API
RESTful y el cliente consumirlo.
La aplicación debe estar hecha con react por el lado del cliente y laravel por el
lado del servidor.

# Contexto de la aplicación:
Somos una librería digital que ofrece todo tipo de libros, desde clásicos
hasta novelas distópicas. Queremos crear nuestra aplicación web. Esta primera
versión permitirá a los usuarios buscar libros por su título, visualizar una lista de
resultados, y al hacer clic en cada libro, podrán ver su detalle completo.

# Requisitos _ cliente
* Home con caja de búsqueda
    * **Ruta**: /
    * **Descripción**: Simplemente muestra una caja de búsqueda para
        poder hacer la búsqueda de libros. Al realizar la búsqueda navegar a
        la vista de Resultados de búsqueda.

* Resultados de búsqueda:
    * **Ruta**: /books?search=, por ejemplo: /books/?search=brave
    * **Descripción**: Muestra justo debajo de la caja de búsqueda, los
        resultados de la búsqueda de resultados.

* Detalle de producto: "/items/:id"
    * **Ruta**: /books/:id
    * **Descripción**: Muestra la descripción completa del producto,
        incluyendo todos los detalles que consideras importante.

# Requisitos _ servidor
Debes crear dos endpoints, debes basarte en el contenido del archivo books.json
Los endpoints a crear son:

* **/api/books?q=:query**, donde :query es la búsqueda que hace el usuario.
    Debe devolver un JSON con los datos a mostrar en la lista de books.
* **/api/books/:id**, donde :id es el id del book seleccionado. Debe devolver un
    JSON con los datos del book seleccionado.

## TODO: estructura JSON de [books](https://gist.githubusercontent.com/cecc10x/bd8029b57b85a51636a3dde69a562175/raw/e1e6552c596b3bb18b39c7406d48043d0132ea72/books)