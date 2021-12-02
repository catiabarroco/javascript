function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#c08357'
    } else if (hora >=12 && hora < 19) {
        //boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#643639'
    } else {
        //boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#68578e'
        
    }
}
