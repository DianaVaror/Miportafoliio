function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//realizamos una funcion que reduzca el codigo donde creamos una condicional
function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado = "Piedra"
    } else if(jugada == 2) {
        resultado = "Papel"
    } else if(jugada == 3) {
        resultado = "Tijera"
    } else {
        resultado = "MAL ELEGIDO"
    }
    return resultado

}
//1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
//Creamos un numero aleatorio para el pc
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1,3)
    jugador = prompt("Elige una opcion: 1 para piedra, 2 para papel, 3 para tijera")

    alert("PC elige: " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))

    //COMBATE
    if(pc == jugador) {
        alert("EMPATE")
    } else if(jugador == 1 && pc == 3) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if(jugador == 2 && pc == 1) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if(jugador == 3 && pc == 2) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else {
        alert("PERDISTE")
        perdidas = perdidas + 1
    }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")

//Creamos una condicional, esto funcina igual que la funcion aleatorio
//if(jugador == 1) {
   // alert("Elegiste piedra")
//} else if(jugador == 2) {
   // alert("Elegiste papel")
//} else if(jugador == 3) {
    //alert("Elegiste tijera")
//} else {
    //alert("Elegiste PERDER")
//}
//if(pc == 1) {
    //alert("PC elige piedra")
//} else if(pc == 2) {
    //alert("PC elige papel")
//} else if(pc == 3) {
    //alert("PC elige tijera")
//}


 