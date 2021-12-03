var num = [5,8,4,7,9]

console.log(`${num}`)
console.log(num)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.push(1)

console.log(`O vetor tem ${num.length} posições`)
console.log(`Vetor por ordem: ${num.sort()}`)
console.log(`${num}`)

//procurar um numero
let pos = num.indexOf(3)
if (pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}

