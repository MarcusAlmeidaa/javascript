function soma(num1 = 0, num2 = 0) { //parâmetros opcionais, caso na chamada não for passado um parâmetro, ele usa o valor pré-definido na definição da função.
    return num1 + num2
}

let sum = soma(16)
console.log(sum)