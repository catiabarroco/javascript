let amigo = {nome: 'jose', 
sexo:'M', 
peso: 85.4,
engordar(p=0){
    console.log('ENGORDOU')
    this.peso +=p
}}



console.log(typeof amigo)
console.log(amigo)

amigo.engordar(2)
console.log(`O ${amigo.nome} pesa ${amigo.peso} kg`)
