function contar() {
    var ini = document.getElementById('txti')
    var iniNum = Number(ini.value)

    var fim = document.getElementById('txtf')
    var fimNum = Number(fim.value)

    var passo = document.getElementById('txtp')
    var passoNum = Number(passo.value)

    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Preencha todos os campos!'
    } else {
        res.innerHTML = 'Contando: <br>'

        if (passoNum == 0) {
            res.innerText = 'Passo inválido! Considerando passo = 1'
            passoNum = 1
        }

        if (iniNum < fimNum) {
            for (let cont = iniNum; iniNum <= fimNum; cont += passoNum){
                res.innerHTML += `${cont} `
            }
        } else {
            for (let cont = iniNum; iniNum >= fimNum; cont -= passoNum ){
                res.innerHTML += `${cont} `
            }
        }

        }
 }
          
