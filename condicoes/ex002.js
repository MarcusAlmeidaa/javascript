var horario = new Date()
var hora = horario.getHours()
var min = horario.getMinutes()
console.log(`Agora são ${hora}:${min}`)

if (hora < 12) {
    console.log('Bom dia!')
}
else if (hora < 18) {
    console.log('Boa tarde!')
}
else {
    console.log('Boa noite!')
}

