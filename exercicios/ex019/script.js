function calcular() {
    var numero = window.document.getElementById('txtnum')
    var tab = window.document.getElementById('seltab')

    if (numero.value.length == 0){
        window.alert('[ERRO] valor inválido')
    } else {
        var num = Number(numero.value)
        tab.innerHTML = ''
        for(var c = 1 ; c <= 10 ; c = c+1) {
            var item = document.createElement('option')
            item.text =`${num} x ${c} = ${num*c}`
            item.value = `tab${c}` //serve para outras linguagens para JS é indiferente, é para saber qual a option selecionada
            tab.appendChild(item) 
        }
        
    }
}
