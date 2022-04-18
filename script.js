/*

HISTORIA COFLA 1

HELADERIA, REALIZAR UNA TIENDA DE HELADOS, QUE TENGAS, TE MUESTRE QUE HELADOS PUEDES COMPRAR, E INDICAR EL VUELTO QUE RESTARIA

-NOMBRE, MONTO
-MOSTRAR HELADOS DISPONIBLES Y CUALES PUEDES COMPRAR
-INDICAR EL VUELTO

*/

 let entrarTienda =document.querySelector('#entrarTienda')
 let comprarConteiner =document.querySelector('#comprarConteiner')
 let comprar = document.querySelector('#comprar')
 let salirTienda = document.querySelector('#salirTienda')
 let msjBienvenida = document.querySelector('#bienvenida')
 let msjCuerpo = document.querySelector('#cuerpo')



 let helados = [
    ['frambuesa',150],
    ['7 sabores',300],
    ['berenjenas',25],
    ['chocolate',120]
]




let iniciarCompra = ()=>{
    
let nombre = prompt(`buen dia como te llamas?`)
let monto = prompt(`cuanto dinero traes?`)
let heladoBarato =helados.map((e)=>{return e[1]})


if(Math.min(...heladoBarato)> monto){
    alert(`saquense chamacos puercos con $${monto} no compran nada`)
    window.location.reload()
}else{
    mostrarHelados(nombre,monto)
}


}

let mostrarHelados= (nombre,monto)=>{
msjBienvenida.innerHTML = `Buenos dias ${nombre}, por $${monto} te puedo ofrecer los siguientes helados:`

let contenedorHelados = helados.filter((e)=>{
return e[1] <= monto})


for (let i = 0; i < contenedorHelados.length; i++) {
let escrito = `<div>${contenedorHelados[i][0]} por $${contenedorHelados[i][1]}</div>`
msjCuerpo.innerHTML+= escrito
}



}






entrarTienda.addEventListener('click',()=>{
entrarTienda.classList.toggle('oculto')
comprarConteiner.classList.toggle('oculto')
})


comprar.addEventListener('click',()=>{
msjBienvenida.innerHTML=''
msjCuerpo.innerHTML=''
iniciarCompra()
comprar.innerHTML= `otra compra`
    })

    salirTienda.addEventListener('click',()=>{
        alert('vuelva pronto')
        window.location.reload()
    })



