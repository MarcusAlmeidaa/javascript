function fatorial(n) {
    let fat = 1
    for(let cont = n; cont > 1; cont--) {
        fat *= cont
    }
    return fat
}

let res = fatorial(6)
console.log(`O fatorial é ${res}`)
