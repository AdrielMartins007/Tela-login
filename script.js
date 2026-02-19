var corpo = document.querySelector('body')
var modclaro = document.getElementById('modo-claro')
var modescuro = document.getElementById('modo-escuro')

function escuro(){

    modescuro.style.display = 'none'
    modclaro.style.display = 'block'
    corpo.style.background = '#2c2f33'

}

function claro(){

    modclaro.style.display = 'none'
    modescuro.style.display = 'block'
    corpo.style.background = '#dee1e4'

}
