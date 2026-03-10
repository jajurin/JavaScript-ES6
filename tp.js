function formatearNombre(nombre){

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
function contarLetras(texto){

    let letras = 0;
    for(let i=0;i< texto.length; i++){

        if(texto[i]!=""){
            letras++

        }
    }
    return letras
    
}

function maximo(a, b, c){
   let maximo= 0;


   let Numeros= [a,b,c]

    for(let i=0 ; i < Numeros.length; i++){

        if(Numeros[i] > maximo){

            maximo=Numeros[i]
        }

        

    }
   return maximo
}

function validarPassword(password){

let passwordVer=password
let tieneNum = false
if(passwordVer.length < 8)
    return false

for(let i = 0; i < passwordVer.length ; i++){
             
    if(passwordVer[i] <= 9 && passwordVer[i] >= 0 )
           
            tieneNum= true
    }
  
    return tieneNum

}



 function mostrarResultado() {
    console.log(formatearNombre("RAUL"))
    console.log(contarLetras("RAUL ES"))
    console.log(maximo(1, 2, 3))
    console.log(validarPassword("RAULESHERO9"))
  }