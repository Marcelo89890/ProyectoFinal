import {InsertarUsuario} from "/js/Servicios_Config.js"


//Variables Globales 
let respuesta = []
let Resultado = []

let CamposFormulario =[
    {
        name:"userId", //Campo del api
        type:"number", // Tipo del Input
        mensaje: "Ingrese su ID" // lo que ve el usuario
    },
    {
        name:"title",
        type:"text",
        mensaje: "Ingres su Titulo"

    },
    {
        name:"body",
        type:"text",
        mensaje: "Ingres su comentario"
    },
    

]

document.addEventListener('DOMContentLoaded', ev => {
    MostrarFormulario()
})

// Mostrar Componente  al cargar la página DOMContentLoaded
export const MostrarFormulario = async () => {
   
      
    //Crea el Componente
    CrearFormulario(CamposFormulario)
  };
  

 // Manejar el evento submi para el Formulario

 document.getElementById('Formulario').addEventListener('submit', ev => {
    
    ev.preventDefault();   
    let form=  document.getElementById('Formulario')

    const datosFormulario = new FormData(form)
    console.log(datosFormulario)
    InsertarUsuario(datosFormulario)
    
 })

  const CrearFormulario = (datos) => {
    let html = ""; 

    // Iterar sobre los datos para generar los campos del formulario
    datos.forEach(element => {
        html += `
            <div class="form-group">
                <label for="${element.name}">${element.mensaje}</label>
                <input type="${element.type}" name="${element.name}" id="${element.name}" class="form-control" placeholder="${element.mensaje}" aria-describedby="helpId-${element.name}">
                <small id="helpId-${element.name}" class="text-muted">Help text</small>
            </div>
        `;
    });

    // Agregar el botón de enviar
    html += `
        <button type="submit" class="btn btn-primary btn-lg btn-block">Enviar</button>
    `;


    // Insertar el HTML generado en el contenedor
    document.getElementById('Formulario').innerHTML = html;

    return html;
};