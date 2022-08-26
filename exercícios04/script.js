function tabuada() {
    var num = document.getElementById('textNum')
    var numero = Number(num.value)
    var tab = document.getElementById('seltab')
    var mult = 1
    var cont = 1

    if (num.value.length == 0) {
        window.alert('Digite um número!')
    } else {
        tab.innerHTML = ''
        while (cont <= 10)  {
            let item = document.createElement('option')
            mult = cont * numero
            item.text = `${numero}x${cont} = ${mult}`
            tab.appendChild(item)
            cont++
        }
    }


    

}