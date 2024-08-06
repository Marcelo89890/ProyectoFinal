
export async function MostrarDatosConfiguracion() {
    let url = "/js/Configuraciones.json";
    try {
        let respuesta = await fetch(url);
        if (respuesta.ok) {
            const data = await respuesta.json();
            console.log('Datos obtenidos:', data); // Verifica qué datos estás recibiendo
            return data;
        } else {
            console.error('Error al obtener la configuración:', respuesta.status);
            return null;
        }
    } catch (error) {
        console.error('Error de red:', error);
        return null;
    }
}




function MostrarDatosPersonas() {
    //Truco !Fetch
    let url ="https://jsonplaceholder.typicode.com/users"

    fetch(url)
    
        .then(response => response.json())
    
        .then(data => console.log(data));
    
       

}

// Función auxiliar para manejar los estados de respuesta
const manejarEstadoRespuesta = async (response) => {
    switch (response.status) {
        case 200: // Respuesta exitosa
        case 201: // Creación exitosa
            const data = await response.json();
            console.log(`Respuesta exitosa: ${JSON.stringify(data)}`);
            return data;

        case 400: // Solicitud incorrecta
            console.error('Error 400: Solicitud incorrecta');
            return null;

        case 401: // No autorizado
            console.error('Error 401: No autorizado');
            return null;

        case 404: // No encontrado
            console.error('Error 404: No encontrado');
            return null;

        case 500: // Error en el servidor
            console.error('Error 500: Error en el servidor');
            return null;

        default: // Otros códigos de estado
            console.error(`Error inesperado: ${response.status}`);
            return null;
    }
};

export const ObtenerTodos = async (uri) => {
    let config = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    try {
        const response = await fetch(uri, config);
        console.warn(response);
        return await manejarEstadoRespuesta(response);
    } catch (error) {
        console.error('Error de red:', error);
        return null;
    }
};

export const Insertar = async (uri, datos) => {
    const config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    };

    try {
        const response = await fetch(uri, config);
        console.warn(response);
        return await manejarEstadoRespuesta(response);
    } catch (error) {
        console.error('Error de red:', error);
        return null;
    }
};
