import{eliminarinforme,cargaredicion}from '../funciones.js'
import{ContenedorinformesF}from '../selectores.js'
//clase para la interfaz grafica
class interfazusuario{
    ImprimirAlerta(mensaje,tipomensaje)
    {
        //console.log(mensaje)
        //creando div de error
        const viderror=document.createElement('div');
        viderror.classList.add('text-center','alert','d-block','col-12');
        //agregar clase en base de tipo de eeror
        if(tipomensaje==='error')
        {
            viderror.classList.add('alert-danger');

        }
        else{
            viderror.classList.add('alert-success');
            //reiniciando objeto
            
        }
        viderror.innerHTML=mensaje;

        //ya que esta creado el div de error
        //en donde lo tenemos que mostrar en algun lugar
        document.querySelector('#contenido').insertBefore(viderror,document.querySelector('.agregar-cita'))
        setTimeout(() => {
            viderror.remove();
           
        }, 3000);

    }
    Imprimirinformes(informesImprimir) 
    {
        this.limpiarHtml();
        const{citas}=informesImprimir;//acceder de forma mas directa al arreglo del objeto
        //console.log(citas);
        citas.forEach(citasrecorrido => {
            const { identificacion,nombres,apellidos,correo,telefono,fecha,hora,direccion,servicios,id}=citasrecorrido;
          
        
            const vidiarrayinformes=document.createElement('div');
            vidiarrayinformes.classList.add('cita','p-3');
            vidiarrayinformes.dataset.id=id;
            //scriptin de kos elemenentos de  los ionformes
            const indentificacionParrafo=document.createElement('h2')
            indentificacionParrafo.classList.add('card-title','font-weight-bolder');
            indentificacionParrafo.textContent=`identificacion: ${identificacion}` ;
             //insertra nombres al div
             const nombresParrafo=document.createElement('p')
             nombresParrafo.innerHTML=`<span class="font-weight-bolder">Nombres: </span> ${nombres}` ;

             const apellidosParrafo=document.createElement('p')
             apellidosParrafo.innerHTML=`<span class="font-weight-bolder">Apellidos: </span> ${apellidos}` ;
             
             const correoParrafo=document.createElement('p')
             correoParrafo.innerHTML=`<span class="font-weight-bolder">Correo: </span> ${correo}` ;
            
             const telefonoParrafo=document.createElement('p')
             telefonoParrafo.innerHTML=`<span class="font-weight-bolder">telefono: </span> ${telefono}` ;
            
             const fechaParrafo=document.createElement('p')
             fechaParrafo.innerHTML=`<span class="font-weight-bolder">fecha Instalacion: </span> ${fecha}` ;
            
             const horaParrafo=document.createElement('p')
             horaParrafo.innerHTML=`<span class="font-weight-bolder">hora: </span> ${hora}` ;
            
             const direccionParrafo=document.createElement('p')
             direccionParrafo.innerHTML=`<span class="font-weight-bolder">direccion: </span> ${direccion}` ;
            
             const serviciosParrafo=document.createElement('p')
             serviciosParrafo.innerHTML=`<span class="font-weight-bolder">servicios: </span> ${servicios}` ;
             
            //boton de eliminar informe
            const btnEliminar=document.createElement('button');
            btnEliminar.classList.add('btn','btn-danger','mr-2')
            btnEliminar.innerHTML='Borrar <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>'; 
            btnEliminar.onclick=() => eliminarinforme(id); // el id del structuring

            //se añade al html o el boton de editar

            const btneditar=document.createElement('button');
            btneditar.classList.add('btn','btn-warning','mr-2')
            btneditar.innerHTML='editar <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>'; 
            btneditar.onclick=() => cargaredicion(citasrecorrido); // tomamos la varibel del foreach ya que esta recorre a cada eleemnto del array
    

            //agregar los parrafos al vid informes
            vidiarrayinformes.appendChild(indentificacionParrafo);
            vidiarrayinformes.appendChild(nombresParrafo);
            vidiarrayinformes.appendChild(apellidosParrafo);
            vidiarrayinformes.appendChild(correoParrafo);
            vidiarrayinformes.appendChild(telefonoParrafo);
            vidiarrayinformes.appendChild(fechaParrafo);
            vidiarrayinformes.appendChild(horaParrafo);
            vidiarrayinformes.appendChild(direccionParrafo);
            vidiarrayinformes.appendChild(serviciosParrafo);
            vidiarrayinformes.appendChild(btnEliminar);
            vidiarrayinformes.appendChild(btneditar)

            //agregar los informes a los html
            ContenedorinformesF.appendChild(vidiarrayinformes)

        });
  
    }
    limpiarHtml()
    {
        while (ContenedorinformesF.firstChild)
        {
            ContenedorinformesF.removeChild(ContenedorinformesF.firstChild)
        }
    }
    //sicronizar con storage
}

export default interfazusuario;