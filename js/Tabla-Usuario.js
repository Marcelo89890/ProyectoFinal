import {ObtenerDatosUsuarios} from "/js/Servicios_Config.js"
//Variables Globales 
let respuesta = []

document.addEventListener('DOMContentLoaded', ev => {
    MostrarTabla()
  })
  

// Mostrar Componente  al cargar la página DOMContentLoaded
export const MostrarTabla = async () => {
    respuesta = await ObtenerDatosUsuarios(); // Recibe Datos del API
      
       //Crea el Componente
       CrearTabla(respuesta)
  };
  

  // Función para inicializar DataTables con botones
const InicializarDataTable = () => {
    $('#example').DataTable({
      dom: 'Bfrtip',
      buttons: [
        { extend: 'copy', text: 'Copiar' },
        { extend: 'csv', text: 'CSV' },
        { extend: 'excel', text: 'Excel' },
        { extend: 'pdf', text: 'PDF' },
        { extend: 'print', text: 'Imprimir' }
      ],
      responsive: true,
      scrollX: true,  // Habilita el scroll horizontal
      autoWidth: false,  // Evita que las columnas se redimensionen automáticamente
      columnDefs: [
        { targets: [1, 2], className: 'text-wrap' }  // Habilita el ajuste de texto
      ],
      language: {
        search: "Buscar en la tabla:",
        lengthMenu: "Mostrar _MENU_ registros por página",
        info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
        infoEmpty: "No hay registros disponibles",
        infoFiltered: "(filtrado de _MAX_ registros totales)",
        zeroRecords: "No se encontraron registros coincidentes"
      }
    });
    
    
  };

const CrearTabla = (datos) => {
    let html = "";
  
    datos.forEach(element => {
      html += `
        <tr>
          <td>${element.id}</td>
          <td>${element.title}</td>
          <td>${element.body}</td>
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
  
    document.getElementById('tbody').innerHTML = html;
  
   InicializarDataTable()
  };