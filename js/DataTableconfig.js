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
