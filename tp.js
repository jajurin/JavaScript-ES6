function Ej1(nombre){

    let resultado= ""




for(let i = 0; i < nombre.length; i++){

    if( i==0){
        resultado+=nombre[0].toUpperCase()
    }else{
        resultado+=nombre[i].toLowerCase()
    }


}



return resultado
}

 function mostrarResultado() {
    console.log(Ej1("RAUL"))
  }