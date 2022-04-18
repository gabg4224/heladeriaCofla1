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
 let montoContainer = document.querySelector('#montoContainer')
 let botonPagar = document.querySelector('#botonPagar')


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

botonPagar.addEventListener('click',()=>{
    pagar(nombre,monto)
})

}

let mostrarHelados= (nombre,monto)=>{

msjBienvenida.innerHTML = `Buenos dias ${nombre}, por $${monto} te puedo ofrecer los siguientes helados:`

let contenedorHelados = helados.filter((e)=>{
return e[1] <= monto})


for (let i = 0; i < contenedorHelados.length; i++) {
let escrito = `<div class='helados'> ${i+1}. ${contenedorHelados[i][0]} por $${contenedorHelados[i][1]}</div>`
msjCuerpo.innerHTML+= escrito
}


msjCuerpo.addEventListener('click',(e)=>{
    e.preventDefault()
let escrito = e.target.innerText

let numero=  Number(escrito.slice(escrito.indexOf('$')+1))

let valor = Number(montoContainer.innerHTML) + numero

montoContainer.innerHTML = valor

})

}


let pagar = (nombre, monto)=>{
let cuenta = Number(montoContainer.innerHTML)
if(cuenta == 0){
alert(`no has llevado nada ${nombre} `)
}else if(monto < cuenta){
    alert(`lo siento ${nombre} no tienes suficiente dinero vuelve luego`)
    window.location.reload()
}else if(monto>cuenta){
    alert(`muchas gracias ${nombre} tu vuelto es de ${monto-cuenta}`)
    window.location.reload()
}

}



entrarTienda.addEventListener('click',()=>{
entrarTienda.classList.toggle('oculto')
comprarConteiner.classList.toggle('oculto')
montoContainer.classList.toggle('oculto')
botonPagar.classList.toggle('oculto')
})


comprar.addEventListener('click',()=>{
msjBienvenida.innerHTML=''
msjCuerpo.innerHTML=''
comprar.innerHTML= `otra compra`
montoContainer.innerHTML = Number(0)
iniciarCompra()
    })

    salirTienda.addEventListener('click',()=>{
        alert('vuelva pronto')
        window.location.reload()
    })



