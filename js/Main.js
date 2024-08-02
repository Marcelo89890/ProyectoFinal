console.log("Funciona")

///Componentes ->
document.addEventListener('DOMContentLoaded', ev => {
    MostrarHTML()
})

///0-
function MostrarHTML() {

    let navbar = document.getElementById("Navbar").innerHTML= CrearNavbar();
    // let footer;
    
    // let Noticias;
    
}

//1-Navbar

function CrearNavbar() {
    let html = `
     <a class="navbar-brand" href="#">
        <img src="img/1-Logo.png" alt="Logo NoticiasTecnológicas" class="navegacion-principal__marca">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="ListaNavbar">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li>
          <li class="nav-item"><a class="nav-link" href="#Noticias">Noticias</a></li>
          <li class="nav-item"><a class="nav-link" href="#Banner1">Banner1</a></li>
          <li class="nav-item"><a class="nav-link" href="#Banner2">Banner2</a></li>
         
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-search"></i></a></li>
        </ul>
      </div>

    `

    return html
}

//2- Footer
function CrearFooter() {

    let html = `
    
      <h3>Derechos de Autor de NoticiasTecnológicas</h3>
      <p>Sigue a NoticiasTecnológicas</p>
      <ul class="list-inline enlaces-pie" id="ListaFooter">
        <!-- Aquí se insertarán los elementos del pie de página <li>términos condiciones</li> -->
        <a href="https://facebook.com" class="mx-2"><i class="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com" class="mx-2"><i class="fab fa-twitter"></i></a>
        <a href="https://linkedin.com" class="mx-2"><i class="fab fa-linkedin"></i></a>
      </ul>

    `

    return html
}

//Main -Secciones 1 Noticias 
function CrearTarjetaNoticias() {
    let html = `

     <section class=" banner  col-lg-4 ">
          <div class="card h-100">
            <img src="img/1-Noticia.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Lorem ipsum dolor.</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#" class="btn btn-primary">Más información <i class="fas fa-angle-double-right"></i></a>
            </div>
          </div>
        </section>

    `

    return html
}