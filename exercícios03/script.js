function contar() {
    var ini = document.getElementById('textInic')
    var iniNum = Number(ini.value)

    var fim = document.getElementById('txtFim')
    var fimNum = Number(fim.value)

    var passo = document.getElementById('txtPasso')
    var passoNum = Number(passo.value)

    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Preencha os campos!')
    } else {
        if (iniNum < fimNum) {
            while (iniNum <= fimNum) {
                iniNum += passoNum
            }

        } else if (iniNum > fimNum) {
            while (iniNum >= fimNum) {
                iniNum -= passoNum
            }

        } else {
            res.innerText = 'O número inicial é igual ao número final!'
        }

    }

    // if (iniNum < fimNum) {
    //     while (iniNum <= fimNum) {
    //         res.innerText = iniNum
    //         iniNum += passoNum   
    //     }

    // } else if (iniNum > fimNum){
    //     while (iniNum >= fimNum) {
    //         res.innerText = iniNum
    //         iniNum -= passoNum 
    //     }

    // } else {
    //     res.innerText = 'O número inicial é igual ao número final!'
    // }

    //if(ini.length == 0 || fim.length == 0 ) {
    //     alert('Valor faltando!')
    // }

    // if(passoNum == 0 || passoNum.length == 0) {
    //     passoNum = 1
    //     if (iniNum < fimNum) {
    //         while (iniNum <= fimNum) {
    //             alert(iniNum)
    //             iniNum += passoNum 
    //         }

    //     } else if (iniNum > fimNum){
    //         while (iniNum >= fimNum) {
    //             alert(iniNum)
    //             iniNum -= passoNum
    //         }

    //     } else {
    //         alert('O número inicial é igual ao número final!')
    //     }
    // }     
}
