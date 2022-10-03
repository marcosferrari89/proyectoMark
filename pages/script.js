const user = "user1";
const pass_comprador = "pass1234";


function  solicitarDatos(){

    let usuario = prompt("Ingrese su usuario");
    let pass = prompt ("Ingrese su contraseña");


    if (validarDatos (usuario,pass)){

        iniciarCarrito();


    }else{

        alert("Usuario y/0 contraseña invalida");
    }
}

function validarDatos(usuario,pass){

    if (usuario ===  user && pass === pass_comprador ){
        return true ;

    }else {
        return false ;

    }
}


function iniciarCarrito(){


    let lista = "" ;

    let finalizar_carrito = false ;


    while (!finalizar_carrito){


        let cod = prompt("Ingrese codigo de producto");
        let producto = obtenerProducto(cod);


        if (producto){

            console.log("producto agregado con exito :"+producto);
            lista += "\n"+producto;


        }else{

            if (cod === null){

                finalizar_carrito = true ;


            }else {


                alert("Ingrese un codigo de producto valido");
            
            }

        }

    }

    if (lista != ""){

        let resp = confirm ("Desea concretar la compra de :"+lista);
        if (resp){

            alert("Gracias por comprar en nuestra tienda online");
        }

    }

}


function obtenerProducto(cod){ 

    let producto  ;
    switch(cod){

        case "1" : 
                    producto = "Libro de Marketing";
                    break;
        case "2" : 
                    producto = "Curso de posicionamiento WEB";
                    break;
        case "3" : 
                    producto = "Curso de Trade Marketing" ;
                    break;
        case "4" : 
                    producto = "Curso de redes sociales"
                    break;       
        case "5" : 
                    producto = "Curso de E-commerce" ;
                    break;

         default :
                    producto = false;           

    }

   return producto ;  

}

document.addEventListener('DOMContentLoaded', function() {
    solicitarDatos();
});

