import { MostrarHTML } from "/js/Global.js"
import { MostrarCard } from "/js/Card.js"
import {ObtenerDatosConfiguracion, ObtenerDatosApiRick} from "/js/Servicios_Config.js"
///Componentes ->
document.addEventListener('DOMContentLoaded', ev => {
    MostrarHTML()
    ObtenerDatosConfiguracion()
    ObtenerDatosApiRick()
    MostrarCard()

})

