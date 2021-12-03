function calcular() {
    var inicio = window.document.getElementById('txtin')
    var fim =  window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpass') 
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO] Faltam valores')
        res.innerHTML = 'Impossivel Contar'
    } else {
        res.innerHTML = 'Contando:...<br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p<=0) {
            window.alert('Passo inválido Considerando passo [1]')
            p = 1
        }

        if (i<f) {
            //contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += (`${c} \u{1F449}`)
            }
        }else {
            //contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += (`${c} \u{1F449}`)
            }
            
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

    
/*
        var c = i
        while (c<=f){
            res.innerHTML += (`${c} 👉`)
            c = c + pas */




