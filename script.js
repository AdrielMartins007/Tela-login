var corpo = document.querySelector('body')
var modclaro = document.getElementById('modo-claro')
var modescuro = document.getElementById('modo-escuro')
var caixa = document.getElementById('form1')
var entrada = document.getElementById('form2')
var titulo = document.getElementById('titulo')
var tituloCadastro = document.getElementById('tituloCadastro')
var botao = document.getElementById('botao')
var botaoCadastro = document.getElementById('botaoCadastro')
var txt1 = document.getElementById('txt1')
var txt2 = document.getElementById('txt2')
var main = document.querySelector('main')
var cxCadastro = document.getElementById('cadastro')
var cxEntrada = document.getElementById('entrada')

function escuro() {

    modescuro.style.display = 'none'
    modclaro.style.display = 'block'
    titulo.style.color = 'white'
    tituloCadastro.style.color = 'white'
    corpo.style.background = '#2c2f33'
    entrada.style.background = '#474b4b'
    caixa.style.backgroundImage = "url(imagens/escuro.png)"
    caixa.style.backgroundSize = 'cover'
    caixa.style.backgroundPosition = 'center center'
    botao.style.backgroundColor = '#dee1e4'
    botaoCadastro.style.backgroundColor = '#dee1e4'
    botao.style.color = 'black'
    botaoCadastro.style.color = 'black'
    txt1.style.color = 'white'
    txt2.style.color = 'white'
    main.style.boxShadow = '0px 0px 9px white'
    links.forEach(function(link){
        link.style.color = 'white'
    })

}

function claro() {

    modclaro.style.display = 'none'
    modescuro.style.display = 'block'
    titulo.style.color = 'black'
    tituloCadastro.style.color = 'black'
    corpo.style.background = '#dee1e4'
    entrada.style.background = '#dee1e4'
    caixa.style.backgroundImage = "url(imagens/claro.png)"
    caixa.style.backgroundSize = 'cover'
    caixa.style.backgroundPosition = 'center center'
    botao.style.backgroundColor = '#2c2f33'
    botaoCadastro.style.backgroundColor = '#2c2f33'
    botao.style.color = 'white'
    botaoCadastro.style.color = 'white'
    txt1.style.color = 'blue'
    txt2.style.color = 'blue'
    main.style.boxShadow = '0px 0px 9px black'
    links.forEach(function(link){
        link.style.color = 'blue'
    })
}

function mudar(){
    cxCadastro.style.display = 'block'
    cxEntrada.style.display = 'none'
}
