
export function MostarDatosEnConsola() {
    
    MostrarDatosConfiguracion();
    MostrarDatosPersonas();
    
}


function MostrarDatosConfiguracion() {
    //Truco !Fetch
    let url ="/js/Configuraciones.json"

    fetch(url)
    
        .then(response => response.json())
    
        .then(data => console.log(data));
    
       

}



function MostrarDatosPersonas() {
    //Truco !Fetch
    let url ="https://jsonplaceholder.typicode.com/users"

    fetch(url)
    
        .then(response => response.json())
    
        .then(data => console.log(data));
    
       

}