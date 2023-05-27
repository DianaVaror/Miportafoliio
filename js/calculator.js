//lo primero que hacemos es crear una variable o constante con los valores que va a tener html para que javascript los pueda utilizar
//creamos una constante que va a utilizar un metodo que nos va a traer todos los elementos que tenga data  de html y asi js los pueda reconocer

const botonNumero = document.querySelectorAll('[data-numero]')
const botonOperador = document.querySelectorAll('[data-operador]')
const botonIgual = document.querySelector('[data-igual]')
const botonBorrarTodo = document.querySelector('[data-borrar-todo]')
const botonBorrar = document.querySelector('[data-borrar]')
const textoValorSuperior = document.querySelector('[data-valor-superior]')
const textoValorInferior = document.querySelector('[data-valor-inferior]')


class Calculadora {
    constructor(textoValorInferior, textoValorSuperior){
        this.textoValorInferior = textoValorInferior
        this.textoValorSuperior = textoValorSuperior
        this.ValorInferior = ''
        this.ValorSuperior = ''
        this.operador = undefined
    }

    agregarNumero(numero) {
    this.valorInferior = this.valorInferior + numero
    }
    imprimirDisplay() {
        this.textoValorInferior.innerText = this.valorInferior
    }
}

const calculadora = new Calculadora (textoValorInferior, textoValorSuperior)


botonNumero.forEach(boton => {
    boton.addEventListener('click', () => {
        calculadora.agregarNumero(boton.innerText)
        calculadora.imprimirDisplay()
    })
    
})