import { ObtenerTodos } from "/js/ConsultarJson.js";

// Constantes y Variables Globales
// URL del servicio API de donde se obtendrán los datos
const uri = "https://jsonplaceholder.typicode.com/photos";
let datosGlobales = []; // Variables para almacenar datos obtenidos
const inputBuscar = document.querySelector("#inputBuscar");// Referencia al campo de texto para realizar la búsqueda
// Referencia al contenedor HTML donde se mostrarán las noticias
let Noticias = document.getElementById("Noticias");

// Función para cargar datos desde el API y mostrar las tarjetas
const cargarDatos = async () => {
    try {
        const datos = await ObtenerTodos(uri); // Obtiene los datos desde el API
        if (datos) {
            datosGlobales = datos; // Guarda los datos globalmente
            console.table(datosGlobales); // Muestra los datos en la consola
            GenerarTarjeta(datos, Noticias); // Muestra el componente con todos los datos
        } else {
            console.log("ERROR: No se recibieron datos.");
        }
    } catch (error) {
        console.error("ERROR al obtener datos:", error);
    }
};

// Función para generar las tarjetas con los datos obtenidos
export const GenerarTarjeta = (data, HTMLID) => {
    let valores = "";
    data.slice(0, 10).map((item) => {
        valores += `
            <section class="banner col-lg-4">
                <div class="card h-100">
                    <img src="${item.thumbnailUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.id}</p>
                        <a href="#" class="btn btn-primary">Más información <i class="fas fa-angle-double-right"></i></a>
                    </div>
                </div>
            </section>
        `;
    });
    HTMLID.innerHTML = valores; // Inserta las tarjetas generadas en el contenedor HTML
};

// Función para manejar la búsqueda
const manejarBusqueda = (evento) => {
    const textoBusqueda = evento.target.value.toLowerCase();
    if (textoBusqueda === "") {
        GenerarTarjeta(datos, Noticias);  // Muestra todos los datos si la búsqueda está vacía
    } else {
        const datosFiltrados = datosGlobales.filter(dato =>
            dato.title.toLowerCase().includes(textoBusqueda)
        );
        GenerarTarjeta(datosFiltrados, Noticias);  // Muestra los datos filtrados
    }
}
// Eventos
// Carga los datos cuando el contenido del DOM ha sido completamente cargado
document.addEventListener('DOMContentLoaded', cargarDatos);
inputBuscar.addEventListener("keyup", manejarBusqueda);
