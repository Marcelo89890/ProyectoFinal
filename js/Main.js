document.addEventListener('DOMContentLoaded', () => {
    MostrarHTML();
  
  });


   function MostrarHTML() {
    const Navbar = document.getElementById("Navbar").innerHTML = CrearNavbar()
    const Footer =document.getElementById("Footer").innerHTML  = CrearFooter()
    const Noticias = document.getElementById("Noticias").innerHTML =CrearTarjetasNoticias()
     
    
            
  }

  function CrearNavbar() {
    return `<p>hola</p>`
  }