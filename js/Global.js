import { MostrarDatosConfiguracion } from "/js/ConsultarJson.js";

export async function MostrarHTML() {
    const datos = await MostrarDatosConfiguracion();
    if (datos) {
       
        const navbarHtml = CrearNavbar(datos.navbar);
        const footerHtml = CrearFooter(datos.footer);
        
        document.getElementById("Navbar").innerHTML = navbarHtml;
        document.getElementById("Footer").innerHTML = footerHtml;
    }
    else
    console.log("ERROR")
}

function CrearNavbar(navbarData) {
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
    `;

    navbarData.forEach(element => {
        html += `
          <li class="${element.claseDeCss}">
            <a href="${element.enlace}">${element.nombre}</a>
          </li>
        `;
      });

    html += `
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-search"></i></a></li>
            </ul>
        </div>
    `;

    return html;
}


function CrearFooter(footerData) {
    let html = `
        <h3>Derechos de Autor de NoticiasTecnológicas</h3>
        <p>Sigue a NoticiasTecnológicas</p>
        <ul class="list-inline enlaces-pie" id="ListaFooter">
    `;

    footerData.forEach(item => {
        html += `
            <li><a href="${item.enlace}" class="${item.claseDeCss}">${item.nombre}</a></li>
        `;
    });

    html += `
          
        </ul>
    `;

    return html;
}
