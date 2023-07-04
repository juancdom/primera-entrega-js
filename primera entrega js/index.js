const productos = [
    {nombre:"camiseta titular", precio: 20000},
{nombre:"camiseta suplente", precio: 18000},
{nombre:"camiseta arquero", precio: 15000},
{nombre:"pelota", precio: 10000},
{nombre:"mate", precio: 8000},];

let carrito =[]



let seleccion = prompt("Bienvenido, desea comprar algun producto? indicar abajo: si o no?")

while(seleccion != "si" && seleccion != "no"){alert("por favor ingrese si o no")
seleccion = prompt("hola, desea comprar algo, si o no?")
}

if(seleccion == "si"){alert("a continuacion nuestra lista de productos")
let todosLosProductos = productos.map ((producto)=>producto.nombre + " " + producto.precio + "$");
alert(todosLosProductos.join(" - "))
}
else if (seleccion = "no"){alert("gracias por su respuesta, saludos!")}

while (seleccion != "no"){ let producto = prompt ("agrega un producto a tu carrito")
let precio = 0

if(producto == "camiseta titular" || producto == "camiseta suplente" || producto == "camiseta arquero" || producto == "pelota" || producto == "mate"){
    switch (producto){
            case "camiseta titular":
            precio = 20000;
            break;
            case "camiseta suplente":
            precio = 18000;
            break;
            case "camiseta arquero":
            precio = 15000;
            break;
            case "pelota":
            precio = 10000;
            break;

            case "mate":
            precio = 8000;
            break;
            default:
                break;
        }
       
         unidades = parseInt(prompt("cuantas unidades desea comprar?"))
         while(Number.isNaN(unidades) || unidades === 0 || unidades <= 0){alert("debe ingresar una cantidad valida")
          unidades = parseInt(prompt("cuantas unidades desea comprar?"))}

        carrito.push({producto, unidades, precio}
            )
        console.log(carrito)
    }else{
            alert("no tenemos ese producto")
        }

        seleccion = prompt("desea seguir comprando?")

        while(seleccion === "no"){
            alert("gracias por su compra, hasta luego!")
            carrito.forEach((carritoFinal) => {
                console.log (`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
                
            })
            break;
        }
      
        

    }

    const total = carrito.reduce ((acc,el) => acc + el.precio * el.unidades , 0)
    console.log(`total a pagar: ${total}`)





 




