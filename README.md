# ConsultarJson.js
**1. MostrarDatosConfiguracion**

**Descripción:** Esta función asíncrona obtiene datos de configuración desde un archivo JSON local (Configuraciones.json) y devuelve los datos en formato JSON.

**Uso:**

javascript

Copiar código

const datosConfiguracion = await MostrarDatosConfiguracion();

**Funcionamiento:**

- **URL:** "/js/Configuraciones.json"
- **Método:** GET
- **Respuestas:**
  - Si la respuesta es exitosa (respuesta.ok), retorna los datos en formato JSON.
  - Si la respuesta no es exitosa, muestra un error en la consola.
  - En caso de error de red, muestra un error en la consola.

**2. MostrarDatosPersonas**

**Descripción:** Esta función obtiene una lista de usuarios desde una API pública (https://jsonplaceholder.typicode.com/users) y muestra los datos en la consola.

**Uso:**

javascript

Copiar código

MostrarDatosPersonas();

**Funcionamiento:**

- **URL:** "https://jsonplaceholder.typicode.com/users"
- **Método:** GET
- **Respuestas:**
  - Los datos obtenidos se muestran en la consola.

**3. manejarEstadoRespuesta**

**Descripción:** Esta función auxiliar maneja diferentes estados de respuesta HTTP y retorna datos o errores basados en el código de estado.

**Uso:**

javascript

Copiar código

const datos = await manejarEstadoRespuesta(response);

**Funcionamiento:**

- **Códigos de Estado:**
  - 200 y 201: Respuesta exitosa; retorna los datos en formato JSON.
  - 400: Solicitud incorrecta; muestra un error.
  - 401: No autorizado; muestra un error.
  - 404: No encontrado; muestra un error.
  - 500: Error en el servidor; muestra un error.
  - Otros: Muestra un error inesperado.

**4. ObtenerTodos**

**Descripción:** Esta función asíncrona obtiene todos los datos desde una URI dada usando el método GET.

**Uso:**

javascript

Copiar código

const datos = await ObtenerTodos("https://example.com/api");

**Funcionamiento:**

- **URI:** uri (la dirección desde la cual se obtendrán los datos)
- **Método:** GET
- **Headers:** { 'Content-Type': 'application/json' }
- **Respuestas:**
  - Utiliza manejarEstadoRespuesta para manejar la respuesta.
  - Retorna los datos obtenidos o null en caso de error.

**5. Insertar**

**Descripción:** Esta función asíncrona inserta datos en una URI dada usando el método POST.

**Uso:**

javascript

Copiar código

const resultado = await Insertar("https://example.com/api", datos);

**Funcionamiento:**

- **URI:** uri (la dirección en la que se insertarán los datos)
- **Método:** POST
- **Headers:** { 'Content-Type': 'application/json' }
- **Body:** datos (los datos a enviar en formato JSON)
- **Respuestas:**
  - Utiliza manejarEstadoRespuesta para manejar la respuesta.
  - Retorna el resultado de la inserción o null en caso de error.


# Card.js
**1. cargarDatos**

**Descripción:** Esta función asíncrona obtiene datos de un API utilizando ObtenerTodos y luego genera tarjetas para mostrar esos datos en el contenedor HTML.

**Uso:**

javascript

Copiar código

await cargarDatos();

**Funcionamiento:**

- Llama a ObtenerTodos(uri) para obtener los datos desde la URL especificada.
- Si los datos se obtienen correctamente:
  - Los guarda en la variable global datosGlobales.
  - Muestra los datos en la consola con console.table.
  - Llama a GenerarTarjeta para generar y mostrar las tarjetas en el contenedor HTML Noticias.
- Si no se obtienen datos, muestra un mensaje de error en la consola.

**2. GenerarTarjeta**

**Descripción:** Genera el HTML para una serie de tarjetas a partir de los datos proporcionados y las inserta en un contenedor HTML.

**Uso:**

javascript

Copiar código

GenerarTarjeta(data, HTMLID);

**Parámetros:**

- data: Un array de objetos que contiene los datos para cada tarjeta. Cada objeto debe tener las propiedades thumbnailUrl, title, y id.
- HTMLID: El elemento HTML donde se insertarán las tarjetas generadas.

**Funcionamiento:**

- Itera sobre los primeros 10 ítems del array data (si hay menos de 10 ítems, usa todos).
- Genera el HTML para una tarjeta utilizando los datos de cada ítem.
- Inserta el HTML generado en el contenedor HTMLID.

**Ejemplo de data:**

javascript

Copiar código

[

`  `{ thumbnailUrl: "url1", title: "Title 1", id: 1 },

`  `{ thumbnailUrl: "url2", title: "Title 2", id: 2 }

]

**3. manejarBusqueda**

**Descripción:** Maneja la búsqueda en las tarjetas basándose en el texto ingresado en el campo de búsqueda.

**Uso:**

javascript

Copiar código

inputBuscar.addEventListener("keyup", manejarBusqueda);

**Funcionamiento:**

- Obtiene el valor del campo de búsqueda y lo convierte a minúsculas.
- Si el campo de búsqueda está vacío:
  - Llama a GenerarTarjeta para mostrar todas las tarjetas.
- Si hay texto en el campo de búsqueda:
  - Filtra datosGlobales para encontrar ítems cuyo título incluye el texto de búsqueda.
  - Llama a GenerarTarjeta para mostrar solo las tarjetas que coinciden con la búsqueda.

**Eventos**

- **DOMContentLoaded:**
  - Llama a cargarDatos cuando el contenido del DOM ha sido completamente cargado.
- **keyup en inputBuscar:**
  - Llama a manejarBusqueda cada vez que el usuario escribe en el campo de búsqueda.

# Global.js
**1. MostrarHTML**

**Descripción:** Esta función asíncrona obtiene los datos de configuración del archivo JSON mediante MostrarDatosConfiguracion y utiliza esos datos para generar y mostrar el contenido HTML del navbar y el footer en el documento.

**Uso:**

javascript

Copiar código

await MostrarHTML();

**Funcionamiento:**

- Llama a MostrarDatosConfiguracion() para obtener los datos.
- Si los datos se obtienen correctamente:
  - Genera el HTML del navbar y del footer utilizando las funciones CrearNavbar y CrearFooter.
  - Inserta el HTML generado en los elementos con IDs Navbar y Footer respectivamente.
- Si no se obtienen datos, muestra un mensaje de error en la consola.

**2. CrearNavbar**

**Descripción:** Genera el HTML para el navbar utilizando los datos proporcionados.

**Uso:**

javascript

Copiar código

const navbarHtml = CrearNavbar(datos.navbar);

**Parámetros:**

- navbarData: Un array de objetos que contiene información para cada ítem del navbar. Cada objeto debe tener las propiedades claseDeCss, enlace y nombre.

**Funcionamiento:**

- Crea el HTML para el navbar con una estructura básica de navegación.
- Añade los ítems del navbar según los datos proporcionados.
- Incluye un botón para el colapso del navbar en dispositivos móviles.

**Ejemplo de navbarData:**

javascript

Copiar código

[

`  `{ claseDeCss: "nav-item", enlace: "#home", nombre: "Inicio" },

`  `{ claseDeCss: "nav-item", enlace: "#about", nombre: "Acerca de" }

]

**3. CrearFooter**

**Descripción:** Genera el HTML para el footer utilizando los datos proporcionados.

**Uso:**

javascript

Copiar código

const footerHtml = CrearFooter(datos.footer);

**Parámetros:**

- footerData: Un array de objetos que contiene información para cada ítem del footer. Cada objeto debe tener las propiedades claseDeCss, enlace y nombre.

**Funcionamiento:**

- Crea el HTML para el footer con una estructura básica que incluye derechos de autor y enlaces de redes sociales.
- Añade los ítems del footer según los datos proporcionados.

**Ejemplo de footerData:**

javascript

Copiar código

[

`  `{ claseDeCss: "list-inline-item", enlace: "#facebook", nombre: "Facebook" },

`  `{ claseDeCss: "list-inline-item", enlace: "#twitter", nombre: "Twitter" }

]

# Table.js
**1. guardarDatosFormulario**

**Descripción:** Maneja el envío del formulario, convierte los datos del formulario a un objeto y lo envía a la API para su inserción.

**Uso:**

javascript

Copiar código

Formulario.addEventListener('submit', guardarDatosFormulario);

**Funcionamiento:**

- Previene el comportamiento por defecto del formulario (envío).
- Convierte los datos del formulario a un objeto JSON.
- Envía el objeto a la API mediante la función Insertar.
- Muestra un mensaje de alerta según el resultado de la inserción.
- En caso de error, muestra un mensaje en la consola.

**2. limpiarFormulario**

**Descripción:** Limpia los campos del formulario.

**Uso:**

javascript

Copiar código

btnreset.addEventListener('click', limpiarFormulario);

**Funcionamiento:**

- Llama al método reset del formulario para limpiar todos los campos.

**3. cargarDatos**

**Descripción:** Obtiene datos desde la API y muestra la tabla con esos datos.

**Uso:**

javascript

Copiar código

window.addEventListener('DOMContentLoaded', cargarDatos);

**Funcionamiento:**

- Llama a ObtenerTodos(uri) para obtener datos desde la URL especificada.
- Si los datos se obtienen correctamente:
  - Guarda los datos en datosGlobales.
  - Llama a mostrarTabla para renderizar la tabla con los datos.
- Si no se obtienen datos, muestra un mensaje de error en la consola.

**4. mostrarTabla**

**Descripción:** Genera la estructura HTML de la tabla y las filas con los datos proporcionados.

**Uso:**

javascript

Copiar código

mostrarTabla(datos);

**Parámetros:**

- datos: Array de datos que se mostrarán en la tabla.

**Funcionamiento:**

- Llama a crearTabla para crear la estructura básica de la tabla.
- Llama a generarFilasTabla para agregar las filas con los datos al tbody.

**5. manejarBusqueda**

**Descripción:** Filtra los datos de la tabla según el texto ingresado en el campo de búsqueda.

**Uso:**

javascript

Copiar código

inputBuscar.addEventListener("keyup", manejarBusqueda);

**Funcionamiento:**

- Obtiene el texto de búsqueda y lo convierte a minúsculas.
- Si el campo de búsqueda está vacío:
  - Llama a mostrarTabla con todos los datos.
- Si hay texto en el campo de búsqueda:
  - Filtra datosGlobales para encontrar ítems cuyo título incluye el texto de búsqueda.
  - Llama a mostrarTabla con los datos filtrados.

**6. crearTabla**

**Descripción:** Crea la estructura HTML para la tabla y la inserta en el contenedor especificado.

**Uso:**

javascript

Copiar código

crearTabla(contenedor, IDTabla);

**Parámetros:**

- contenedor: Elemento HTML donde se insertará la tabla.
- tablaNombreId: ID de la tabla.

**Funcionamiento:**

- Genera el HTML de la tabla y lo inserta en el contenedor contenedor.

**7. generarFilasTabla**

**Descripción:** Genera las filas de la tabla con los datos proporcionados.

**Uso:**

javascript

Copiar código

generarFilasTabla(data, tablaNombreId, cabeceras);

**Parámetros:**

- data: Array de datos que se mostrarán en las filas de la tabla.
- tablaNombreId: ID de la tabla.
- cabeceras: Array de nombres de las cabeceras.

**Funcionamiento:**

- Genera las cabeceras de la tabla.
- Genera las filas para cada ítem en data, limitando a los primeros 10 ítems.
- Inserta el HTML generado en el tbody de la tabla.

**8. crearOpcionesFila**

**Descripción:** Genera los botones de acción para cada fila de la tabla.

**Uso:**

javascript

Copiar código

crearOpcionesFila();

**Funcionamiento:**

- Devuelve un bloque de HTML con botones para "Ver", "Editar" y "Eliminar".

**Eventos**

- **DOMContentLoaded:**
  - Llama a cargarDatos cuando el contenido del DOM ha sido completamente cargado.
- **submit en Formulario:**
  - Llama a guardarDatosFormulario cuando se envía el formulario.
- **click en btnreset:**
  - Llama a limpiarFormulario para limpiar el formulario.
- **keyup en inputBuscar:**
  - Llama a manejarBusqueda para filtrar los datos en la tabla según el texto de búsqueda.

