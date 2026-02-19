var corpo = document.querySelector('body')
var modclaro = document.getElementById('modo-claro')
var modescuro = document.getElementById('modo-escuro')
var caixa = document.getElementById('form1')
var entrada = document.getElementById('form2')
var titulo = document.getElementById('titulo')
var botao = document.getElementById('botao')

function escuro() {

    modescuro.style.display = 'none'
    modclaro.style.display = 'block'
    titulo.style.color = 'white'
    corpo.style.background = '#2c2f33'
    entrada.style.background = '#2c2f33'
    caixa.style.backgroundImage = "url(imagens/escuro.png)"
    caixa.style.backgroundSize = 'cover'
    caixa.style.backgroundPosition = 'center center'
    botao.style.backgroundColor = 'white'
    botao.style.color = 'black'
}

function claro() {

    modclaro.style.display = 'none'
    modescuro.style.display = 'block'
    titulo.style.color = 'black'
    corpo.style.background = '#dee1e4'
    entrada.style.background = '#dee1e4'
    caixa.style.backgroundImage = "url(imagens/claro.png)"
    caixa.style.backgroundSize = 'cover'
    caixa.style.backgroundPosition = 'center center'
    botao.style.backgroundColor = 'black'
    botao.style.color = 'white'

}
