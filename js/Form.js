import {  } from "/js/Servicios_Config.js"

//Variables Globales 
let respuesta = []
let Resultado = []
let CamposFormulario =[
    {
        name:"name",
        type:"text",
        mensaje: "Ingres su nombre x"
    },
    {
        name:"age",
        type:"number",
        mensaje: "Ingres su edad"

    },
    {
        name:"name",
        type:"email",
         mensaje: "Ingres su correo"
    },
    

]

// Mostrar Componente  al cargar la página DOMContentLoaded
export const MostrarFormulario = async () => {
    respuesta = await a(); // Recibe Datos del API
      
    //Crea el Componente
  };
  

 // Manejar el evento submi para el Formulario
 document.getElementById('Formulario').addEventListener

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
    document.getElementById('').innerHTML = html;

    return html;
};