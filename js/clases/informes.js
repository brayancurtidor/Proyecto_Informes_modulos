//clases
//clase para los informes
class informe{
    constructor()
    {
        this.citas=[];

    }
    agregarinforme(informe)
    {
        this.citas=[...this.citas,informe] //agregando al array un objeto con un id diferente
        console.log(this.citas)
        
    }
    eliminarInforme(idborrar)// ya se le pasa el id cuando al boton se le da onclick al boton de borrar
    {
        this.citas=this.citas.filter(informeborrar=> informeborrar.id!==idborrar)
        console.log(this.citas)
    
    }
    editarinforme(informeactualizadao)
    {
        //map porque recorre el arreglo y me crea uno nuevo
        this.citas=this.citas.map(informeeditar=>informeeditar.id===informeactualizadao.id ? informeactualizadao : informeeditar) //si los ids coinciden entonces se va a reeescribir el informe de caso contrario no lo va a hacer si no s¿que se mantendra
        
    }
   

}
export default informe;