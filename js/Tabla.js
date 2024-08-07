import {  } from "/js/Servicios_Config.js"

//Variables Globales 
let respuesta = []

// Mostrar Componente  al cargar la página DOMContentLoaded
export const MostrarTabla = async () => {
    respuesta = await a(); // Recibe Datos del API
      
       //Crea el Componente
  };
  

const CrearTabla = (datos) => {
    let html = "";
  
    datos.forEach(element => {
      html += `
        <tr>
          <td>${element.id}</td>
          <td>${element.name}</td>
          <td><img src="${element.image}" class="card-img-top" alt="..."></td>
          <td>
           <div class="btn-group" role="group" style="gap: 5px">
              <a class="btn btn-primary btn-sm"><i class="fas fa-eye"></i> Ver</a>
              <a class="btn btn-warning btn-sm"><i class="fas fa-edit"></i> Editar</a>
              <a class="btn btn-danger btn-sm"><i class="fas fa-trash"></i> Eliminar</a>
            </div>
          </td>
        </tr>
      `;
    });
  
    document.getElementById('').innerHTML = html;
  
    return html;
  };
  