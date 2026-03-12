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
const usuario = {

 nombre: "Ana",

 edad: 20,

 activo: false
 }
 const productos = [

{nombre:"Mouse", precio:10},

{nombre:"Teclado", precio:25},

{nombre:"Monitor", precio:200}

]

const usuarios = [

{nombre:"Ana", edad:17},

{nombre:"Juan", edad:25},

{nombre:"Pedro", edad:30}

]
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

let tieneNum = false
if(password.length < 8)
    return false

for(let i = 0; i < password.length ; i++){
             
    if(password[i] <= 9 && password[i] >= 0 )
           
            tieneNum= true
    }
  
    return tieneNum

}

function sumarArray(numeros){



let total = numeros.reduce((Acum, Num) => Acum + Num, 0)

return total
    }

function mayorNumero(numeros){

let mayorNum= 0

for(let i = 0; i < numeros.length; i++){
         
    if(numeros[i]>mayorNum){
            mayorNum=numeros[i]
      }
   

      }
      return mayorNum
        }

        function obtenerPares(numeros){

        let pares= []
        let j = 0
  for(let i = 0; i < numeros.length; i++){
         
    if(numeros[i] % 2 == 0){
   pares[j]=numeros[i]
        j++
      }
      


  }
  return pares
}
function descripcionUsuario(usuario){
         
return `${usuario.nombre} tiene ${usuario.edad} años`


  }

 function activarUsuario(usuario){
 usuario.activo=true

 return usuario.activo

      }

      function calcularPrecioTotalProductos(productos){
        let total=0

     for(let i = 0; i < productos.length; i++){

        total+=productos[i].precio
         


  }
  return total

        }

        function usuariosSoloNombre(usuarios){

            nombreUs = []
    for(let i = 0; i < usuarios.length; i++){

          
        nombreUs[i]=usuarios[i].nombre
         


  }
  return nombreUs

            }
 function mostrarResultado() {
    console.log(formatearNombre("RAUL"))
    console.log(contarLetras("RAUL ES"))
    console.log(maximo(1, 2, 3))
    console.log(validarPassword("RAULESHERO9"))
    console.log(sumarArray([1,2,3,4,5]))
    console.log(mayorNumero([1,2,3,4,5]))
   console.log(obtenerPares([1,2,3,4,5]))
   console.log(descripcionUsuario(usuario))
   console.log(activarUsuario(usuario))
   console.log(calcularPrecioTotalProductos(productos))
    console.log( usuariosSoloNombre(usuarios))
   
  }