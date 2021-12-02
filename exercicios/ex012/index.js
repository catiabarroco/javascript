var agora = new Date()
var hora = agora.getHours()
console.log(`Agora, são exatamente ${hora}h horas.`)
if (hora > 5 && hora <= 12) {
    console.log(`Bom dia, são ${hora}h horas.`)
} else if (hora > 12 && hora <=18){
    console.log(`Boa tarde, são ${hora}h horas.`)
}else if (hora >0 && hora <=5) {
    console.log(`Boa madrugada, são ${hora}h horas.`)
}else {
    console.log(`Boa noite, são ${hora}h horas.`)
}
    
