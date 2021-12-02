function calcular(){
    var inicio = Number(window.document.getElementById('txtin').value)
    var fim =  Number(window.document.getElementById('txtfim').value )
    var passo = Number(window.document.getElementById('txtpass').value) 
    var res = window.document.getElementById('res')

    var c = inicio
    while (c<=fim){
        res.innerHTML += (`${c} 👉`)
        c = c + passo
    }


/*
    for (var c =1 ; c<=10 ; c++) {
        res.innerHTML = (`Teste ${c}`)
    }*/
}

