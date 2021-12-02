function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'imagens/bebe_h.png')

            }else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'imagens/jovem_h.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto_h.png')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/idoso_h.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'imagens/bebe_m.png')
            }else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'imagens/jovem_m.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto_m.png')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/idoso_m.png')
            }
        }
    res.style.textAlign ='center'
    res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
    res.appendChild(img)
    }
}

