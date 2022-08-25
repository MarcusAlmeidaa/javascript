function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var formAno = document.getElementById('textAno')
    var resp = document.getElementById('res')

    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        alert('Dado incorreto. Tente novamente!')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var foto = document.createElement('img') //cria uma tag <img>
        foto.setAttribute('id','imagem') // <img> com id="imagem"  <img id="imagem">


        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                foto.setAttribute('src','imagens/bebe-masc.png') //caminho em que o arquivo de imagem está
            } else if (idade < 21) {
                foto.setAttribute('src','imagens/jovem-masc.png')
            } else if (idade < 50) {
                foto.setAttribute('src','imagens/adulto-masc.png')
            } else {
                foto.setAttribute('src','imagens/idoso-masc.png')
            }

        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                foto.setAttribute('src','imagens/bebe-fem.png')
            } else if (idade < 21) {
                foto.setAttribute('src','imagens/jovem-fem.png')
            } else if (idade < 50) {
                foto.setAttribute('src','imagens/adulta-fem.png')
            } else {
                foto.setAttribute('src','imagens/idosa-fem.png')
            }
        }
         res.style.textAlign = 'center'
         res.appendChild(foto)
         res.innerText = `Idade calculada: ${idade} anos. Gênero: ${genero}`
    }
}