var agora = new Date()
var diaSem = agora.getDay()


/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = QUarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/

switch (diaSem) {
    case 0:
        console.log('Bom Domingo')
        break
    case 1:
        console.log('Boa Segunda-feira')
        break
    case 2:
        console.log('Boa Terça-feira')
        break
    case 3:
        console.log('Boa Quarta-feira')
        break
    case 4:
        console.log('Boa Quinta-feira')
        break
    case 5:
        console.log('Boa Sexta-feira')
        break
    case 6:
        console.log('Bom Sabado')
        break
    default:
        console.log('[ERRO] Dia inválido')
        break
}