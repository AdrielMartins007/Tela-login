var corpo = document.querySelector('body')
var modclaro = document.getElementById('modo-claro')
var modescuro = document.getElementById('modo-escuro')
var caixa = document.getElementById('form1')

function escuro(){

    modescuro.style.display = 'none'
    modclaro.style.display = 'block'
    corpo.style.background = '#2c2f33'
    caixa.style.backgroundImage = "url(imagens/escuro.png)"
    caixa.style.backgroundSize = 'cover'
    caixa.style.backgroundPosition = 'center center'

}

function claro(){

    modclaro.style.display = 'none'
    modescuro.style.display = 'block'
    corpo.style.background = '#dee1e4'
    caixa.style.backgroundImage = "url(imagens/claro.png)"
    caixa.style.backgroundSize = 'cover'
    caixa.style.backgroundPosition = 'center center'

}
