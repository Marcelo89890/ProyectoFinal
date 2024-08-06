import { ObtenerTodos,Insertar } from "/js/ConsultarJson.js";

// Constantes y Variables Globales

const uri = "https://jsonplaceholder.typicode.com/photos"; // URL del servicio API de donde se obtendrán los datos
const cabeceras = ["Imagen", "Título", "ID"]; // Array que contiene los nombres de las cabeceras para la tabla
const IDTabla = "Tabla1"; // Identificador único para la tabla
const Contenedor = document.getElementById("TablaAPI1"); // Referencia al contenedor HTML donde se va a renderizar la tabla
const Formulario = document.querySelector("#Formulario"); // Referencia al formulario HTML que se usará para la búsqueda
const btnreset = document.querySelector("#btnreset"); // Referencia al botón de reset para limpiar el formulario
const inputBuscar = document.querySelector("#inputBuscar");// Referencia al campo de texto para realizar la búsqueda
let datosGlobales = []; // Variables para almacenar datos obtenidos

// Función para guardar datos del formulario
const guardarDatosFormulario = async (e) => {
    e.preventDefault(); // Evita que el formulario se envíe realmente

    const datosFormulario = new FormData(Formulario);

    // Mostrar campos como objeto o JSON
    const obj = Object.fromEntries(datosFormulario.entries());
    const json = JSON.stringify(obj);

    console.log(json);

    try {
        const response = await Insertar(uri, obj);
        if (response) {
            alert("Datos insertados exitosamente");
        } else {
            alert("Error al insertar datos");
        }
    } catch (error) {
        console.error("Error al insertar datos:", error);
        alert("Error al insertar datos");
    }
}

// Función para limpiar el formulario
const limpiarFormulario = () => {
    Formulario.reset();
}

// Cargar datos e invocar la funcion
const cargarDatos = async () => {
    try {
        const datos = await ObtenerTodos(uri);
        if (datos) {
            datosGlobales = datos; // Guarda los datos globalmente
            mostrarTabla(datos); // Muestra la tabla con todos los datos
        } else {
            console.log("ERROR: No se recibieron datos.");
        }
    } catch (error) {
        console.error("ERROR al obtener datos:", error);
    }
}

// Función para mostrar la tabla con datos
const mostrarTabla = (datos) => {
    crearTabla(Contenedor, IDTabla);
    generarFilasTabla(datos, IDTabla, cabeceras);
}

// Función para manejar la búsqueda
const manejarBusqueda = (evento) => {
    const textoBusqueda = evento.target.value.toLowerCase();
    if (textoBusqueda === "") {
        mostrarTabla(datosGlobales); // Muestra todos los datos si la búsqueda está vacía
    } else {
        const datosFiltrados = datosGlobales.filter(dato =>
            dato.title.toLowerCase().includes(textoBusqueda)
        );
        mostrarTabla(datosFiltrados); // Muestra los datos filtrados
    }
}

// Crea la estructura HTML de la tabla en el contenedor.
const crearTabla = (contenedor, tablaNombreId) => {
    let tablaHtml = `
        <table class="table table-striped table-inverse table-responsive container col-6 text-white" id="${tablaNombreId}">
            <thead class="thead-inverse"></thead>
            <tbody></tbody>
        </table>
    `;
    contenedor.innerHTML = tablaHtml;
}

// Genera las filas de la tabla con los datos proporcionados.
const generarFilasTabla = (data, tablaNombreId, cabeceras) => {
    if (!Array.isArray(data)) {
        console.error("ERROR: `data` no es un array.");
        return;
    }

    // Generar las cabeceras de la tabla
    let thead = document.querySelector(`#${tablaNombreId} thead`);
    let columnas = "<tr>";
    cabeceras.forEach(element => {
        columnas += `<th>${element}</th>`;
    });
    columnas += "<th>Acciones</th>"; // Columna adicional para el botón
    columnas += "</tr>";
    thead.innerHTML = columnas;

    // Generar las filas de la tabla
    let tbody = document.querySelector(`#${tablaNombreId} tbody`);
    let filas = "";
    data.slice(0, 10).forEach((item) => {
        filas += `
            <tr>
                <td><img src="${item.thumbnailUrl}" alt="Thumbnail"></td>
                <td>${item.title}</td>
                <td>${item.id}</td>
                <td>${crearOpcionesFila()}</td>
            </tr>
        `;
    });
    tbody.innerHTML = filas;
}

// Crea los botones de acción para cada fila de la tabla.
const crearOpcionesFila = () => {
    let html = `
        <button class="btn btn-primary btn-sm"><i class="fas fa-eye"></i> Ver</button>
        <button class="btn btn-warning btn-sm"><i class="fas fa-edit"></i> Editar</button>
        <button class="btn btn-danger btn-sm"><i class="fas fa-trash"></i> Eliminar</button>
    `;
    return html;
}

// Eventos
window.addEventListener('DOMContentLoaded', cargarDatos);
Formulario.addEventListener('submit', guardarDatosFormulario);
btnreset.addEventListener('click', limpiarFormulario);
inputBuscar.addEventListener("keyup", manejarBusqueda);


