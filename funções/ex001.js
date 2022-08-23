function parImp(n) {
    if (n % 2 == 0) {
        return 'O número é par.'
    } else {
        return 'O número é ímpar.'
    }
}

let res = parImp(10)
console.log(res)