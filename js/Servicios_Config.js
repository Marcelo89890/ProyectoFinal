
export  const ObtenerDatosConfiguracion = async () => {
    let config = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    const url = "/js/Configuraciones.json"

    try {

        const response = await fetch(url,config);
        if (response.status == "200") {
            const data = await response.json();

            console.table(data);
            return data
    
        }else{
            console.log("Error al consultar el API"+response.status)
        }
       
    } catch (error) {

        console.log("Error en la red"+ error);

    }

};

export  const ObtenerDatosApiRick = async () => {

    let config = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    const url = "https://rickandmortyapi.com/api/character"

    try {

        const response = await fetch(url,config);
        if (response.status == "200") {
            const data = await response.json();

            console.warn(data.results);
            return data.results
    
        }else{
            console.log("Error al consultar el API"+response.status)
        }
       
    } catch (error) {

        console.log("Error en la red"+ error);

    }

};


export  const ObtenerDatosUsuarios= async () => {
    let config = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    const url = "https://jsonplaceholder.typicode.com/posts"

    try {

        const response = await fetch(url,config);
        if (response.status == "200") {
            const data = await response.json();

            console.warn(data);
            return data
    
        }else{
            console.log("Error al consultar el API"+response.status)
        }
       
    } catch (error) {

        console.log("Error en la red"+ error);

    }

};


//