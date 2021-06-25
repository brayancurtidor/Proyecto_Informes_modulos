import {datosInfromes,nuevoinforme} from '../funciones.js' 
import {
    identificacionFor,
    nombresFor,apellidosFor,
    correoFor,telefonoFor,
    fechaFor,
    horaFor,
    direccionFor,
    serviciosFor,
    expresionregular,
    formularioF,
    ContenedorinformesF}from '../selectores.js'  //recomendado

 class inicio{
    constructor(){
        this.Initapp();
       
    }
    Initapp() //lo ponemos en este metodo ya que tienen eventos
    {
        identificacionFor.addEventListener('input',datosInfromes); //change puedo tomar el valor del input para validarlos cada vez qeu se sale
        nombresFor.addEventListener('input',datosInfromes);
        apellidosFor.addEventListener('input',datosInfromes);
        correoFor.addEventListener('input',datosInfromes);
        telefonoFor.addEventListener('input',datosInfromes);
        fechaFor.addEventListener('input',datosInfromes);
        horaFor.addEventListener('input',datosInfromes);
        direccionFor.addEventListener('input',datosInfromes);
        serviciosFor.addEventListener('input',datosInfromes);
        //formulario para nuevas citas
        formularioF.addEventListener('submit',nuevoinforme); //validaciones y agregar informes
    }
}
export default inicio;