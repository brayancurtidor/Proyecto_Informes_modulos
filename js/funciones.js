import informe from './clases/informes.js'; //se debe poner el nombre de la clase
import interfazusuario from './clases/interfazUsuario.js' //se debe de poner el nombre de la clase
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
    ContenedorinformesF}from './selectores.js'  //recomendado
//instanacias globales
const instanciainterfaz= new interfazusuario()
const administradorinforme=new informe();

let editando;
//objeto con los datos del cliente
const informeOBJETO={
    identificacion:'',
    nombres:'',
    apellidos:'',
    correo:'',
    telefono:'',
    fecha:'',
    hora:'',
    direccion:'',
    servicios:''
}
//funcion para llenar un objeto
export function datosInfromes(e)
{
//console.log(e.target.name); //tomar el valor que se escribe
//llenar el objeto
informeOBJETO[e.target.name]=e.target.value;

console.log(informeOBJETO)

}

//funcion para avalidar y agregar nuevos infiormes
export function nuevoinforme(e)
{
    e.preventDefault();
    //extraer la informacion del objeto de informes
    const { identificacion,nombres,apellidos,correo,telefono,fecha,hora,direccion,servicios}=informeOBJETO

    //validar la informacion del objeto ya que esta lleno el objeto
    if(identificacion===''||nombres===''||apellidos===''||correo===''||telefono===''||fecha===''||hora===''||direccion===''||servicios==='')
    {
       instanciainterfaz.ImprimirAlerta('odos los campos son requeridos','error');
        
        return;
    }

    if(editando)
    {
        console.log('Modo Edicion')
        instanciainterfaz.ImprimirAlerta('Edicion Guadada correctamente','correctoss');
        //pasar el objeto  al informe

        administradorinforme.editarinforme({...informeOBJETO})



        formularioF.querySelector('button[type="submit"]').textContent='Crear informe';
        formularioF.querySelector('button[type="submit"]').classList.remove('btn','btn-warning');
        formularioF.querySelector('button[type="submit"]').classList.add('btn','btn-success');
        editando=false; //esto para volver a modo crear 
    }
    else{
        instanciainterfaz.ImprimirAlerta('correcto','correctoss');
    //generar un id unico agregar un nuevo campo al objeto
    informeOBJETO.id=Date.now();
    //console.log(informeOBJETO)
        //usaremos a instancia para agregar objetos dentro un el array 
    //administradorinforme.agregarinforme(informeOBJETO); //el problema es que se ingresa al aarray pero se duplican los datos ya que se pasa el objeto global  
    administradorinforme.agregarinforme({...informeOBJETO}); //solucion pegamos la copia
       //mostrar los informes seguns e van agregando
    
        console.log('Modo nuevos')
    }
    instanciainterfaz.Imprimirinformes(administradorinforme); //usamos este parametro ya el tiene el array


    

    
    reiniciar(); //se tiene que reiniciar por que dejaba agregar objetos cuando los inputs estabana vacios
    formularioF.reset();
 
    

}

//funcion para reiniciar objeto, ya que me dejaba agregar mas objetos aun cuando los campos estuviesen vacios
export function reiniciar()
{
    informeOBJETO.identificacion='';
    
    informeOBJETO.nombres='';
    
    informeOBJETO.apellidos='';
    
    informeOBJETO.correo='';
    
    informeOBJETO.telefono='';
    
    informeOBJETO.fecha='';
    
    informeOBJETO.hora='';
    
    informeOBJETO.direccion='';
    
    informeOBJETO.servicios='';
    
  
}
export function eliminarinforme(ids)
{
    //eliminar el un informe o el objeto del array
    administradorinforme.eliminarInforme(ids)

    //mostrar mensaje
    instanciainterfaz.ImprimirAlerta('se elimino el informe con exito!!!','correcto');

    //refrescar los informes

    instanciainterfaz.Imprimirinformes(administradorinforme)
  

}
//carga los datos y el modo edicion
export  function cargaredicion(array_informes)
{

//destructuring para llenar el los inputs
const { identificacion,nombres,apellidos,correo,telefono,fecha,hora,direccion,servicios,id}=array_informes
/*llenar el objeto ya que almoneto de darle al boton editar
y despues al botonde agregar da un error (campos vacios )
aunque tengainformacion
solucion: llenar el objeto
*/
informeOBJETO.identificacion=identificacion;
informeOBJETO.nombres=nombres;
informeOBJETO.apellidos=apellidos;
informeOBJETO.correo=correo;
informeOBJETO.telefono=telefono;
informeOBJETO.fecha=fecha;
informeOBJETO.hora=hora;
informeOBJETO.direccion=direccion;
informeOBJETO.servicios=servicios;
informeOBJETO.id=id;


//llenar los inputs
identificacionFor.value=identificacion;
nombresFor.value=nombres;
apellidosFor.value=apellidos;
correoFor.value=correo;
telefonoFor.value=telefono;
fechaFor.value=fecha;
horaFor.value=hora;
direccionFor.value=direccion;
serviciosFor.value=servicios;





//cambiar el color del boton para editar
formularioF.querySelector('button[type="submit"]').textContent='Confirmar edicion';
formularioF.querySelector('button[type="submit"]').classList.add('btn','btn-warning');
editando=true;

}



