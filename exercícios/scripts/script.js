function carregar() {
var msg = document.getElementById('msg')
var foto = document.getElementById('imagem')

var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

if (hora >=0 && hora < 12) {
    foto.src = 'imagens/foto-manha.png'
    msg.innerText = `Agora são ${hora}:${min}. Bom dia!`
    document.body.style.background = 'skyblue'
} else if (hora >= 12 && hora < 18) {
    foto.src = 'imagens/foto-tarde.png'
    msg.innerText = `Agora são ${hora}:${min}. Boa tarde!`
    document.body.style.background = '#ff7b55'
} else {
    foto.src = 'imagens/foto-noite.png'
    msg.innerText = `Agora são ${hora}:${min}. Boa noite!`
    document.body.style.background = '#8470ff'
}
}