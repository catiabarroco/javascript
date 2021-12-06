var num = window.document.getElementById('fnum')
var lista = window.document.getElementById('flista')
var res = window.document.querySelector('div#res')
let valores = []


function isNumero(n) {
    if (Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inlista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        var item =document.createElement('option')
        item.text =`Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML=''
    } else{
        window.alert('Valor invalido ou já adicionado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        let soma = 0
        let media = 0

        for(var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores [pos]
            if (valores[pos] < menor)
                menor = valores [pos]
        }
        media = soma/tot

        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos <strong>${tot}</strong> numeros cadastrados</p>`
        res.innerHTML += `<p>O maior valor é <strong>${maior}</strong></p>`
        res.innerHTML += `<p>O menor valor é <strong>${menor}</strong></p>`
        res.innerHTML += `<p>A soma de todos os valore é = <strong>${soma}</strong></p>`
        res.innerHTML += `<p>A média de todos os valore é = <strong>${media}</strong></p>`
    }
}