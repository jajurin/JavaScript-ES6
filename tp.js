function Ej1(nombre){

    let resultado= ""




for(let i = 0; i < nombre.length; i++){

    if( i==0){
        resultado+=nombre[0].toUpperCase()
    }else{
        resultado+=nombre[i].toLowerCase()
    }
return resultado

}
}
function Ej2(texto){

    let letras = 0;
    for(let i=0;i< texto.length; i++){

        if(texto[i]!=""){
            letras++

        }
    }
    return letras
    
}





 function mostrarResultado() {
    console.log(Ej1("RAUL"))
    console.log(Ej2("RAUL ES"))
  }