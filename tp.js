function formatearNombre(nombre){

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
const producto = {

nombre:"Notebook",

precio:1000

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

            let nombreUs = []
    for(let i = 0; i < usuarios.length; i++){

          
        nombreUs[i]=usuarios[i].nombre
         


  }
  return nombreUs

            }

  function usandoFilter(usuarios){
       
     let mayores = usuarios.filter(usuario => usuario.edad >= 18)
     
     
                    return mayores
                }

    function usandoReduce(usuarios){

          let total = usuarios.reduce((Acum,usuarios)=>Acum+usuarios.edad,0 )
             return total
         }

         function usandoDestructing({nombre, precio}){

            return `${nombre} vale ${precio} `



            }

          const productoStockSpreadOperator = {

           ...producto,
              stock: 5
          }

          function usandoSpreadOperator(producto, productoStockSpreadOperator){

            return [producto, productoStockSpreadOperator]

            
          }

         function buscarProducto(productos, nombre){
            let productoCor = productos.find( productos => productos.nombre == nombre)

            
       return productoCor
            
         }

         function productosCarosDevolver(productos){
            let productosCaros = productos.filter(productos => productos.precio >= 50)

            return productosCaros
            

         }

         function promedio(numeros) {
            let promedio = numeros.reduce((acum,num) => acum + num / numeros.length,0)

      
       return promedio
         }
         const usuariosFin = [

{id:1, nombre:"Ana", edad:20},

{id:2, nombre:"Juan", edad:15},

{id:3, nombre:"Pedro", edad:30}

]

function obtenerUsuarios(usuariosFin) {
    return usuariosFin

}
function obtenerUsuarioPorId(usuariosFin, id) {
let usuarioId = usuariosFin.filter(usuariosFin => usuariosFin.id == id )
return usuarioId

}
function obtenerMayores(usuariosFin, edad) {
    let usuarioEdad = usuariosFin.filter(usuario => usuario.edad >= edad)
    return usuarioEdad
}

function crearUsuario(nombre, edad){
    usuariosFin.push({nombre, edad})
    return usuariosFin
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
    console.log(usandoFilter(usuarios))
     console.log(usandoReduce(usuarios))
     console.log(usandoDestructing(producto))
     console.log(usandoSpreadOperator(producto, productoStockSpreadOperator))
      console.log(buscarProducto(productos, "Teclado"))
     console.log(productosCarosDevolver(productos))
     console.log(promedio([1,2,3,4,5]))
     console.log(obtenerUsuarios(usuariosFin))
     console.log(obtenerUsuarioPorId(usuariosFin,1))
     console.log(obtenerMayores(usuariosFin,18))
     console.log(crearUsuario("Damian",13))

          
   
  }