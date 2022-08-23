let num = [5, 8, 6, 2, 9]
console.log(num)
console.log(`O vetor tem ${num.length} posições`) 
console.log(`O vetor ordenado: ${num.sort()}`) 

num.push(1) //adiciona o elemento 1 no fim do vetor
console.log(num)

console.log(`O vetor ordenado: ${num.sort()}`)

for(var pos = 0; pos < num.length; pos++) {
    console.log(` Valor da posição ${pos} do vetor: ${num[pos]}`)
}

console.log('--------------------------------------------------------------------------')

for(let pos in num) { // outra forma de fazer imprimir na tela os valores do vetor num
    console.log(` Valor da posição ${pos} do vetor: ${num[pos]}`)
}

console.log('--------------------------------------------------------------------------')
console.log(num)

let posi = num.indexOf(6)

if (posi == -1){
    console.log(`O elemento não está no vetor.`)
}
else {
    console.log(`O elemento está na posição ${num.indexOf(6)}`)
}
