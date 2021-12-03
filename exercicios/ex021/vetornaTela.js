var num = [8,1,7,4,2,9]

/*
for (var i = 0; i < num.length; i++ ){
    console.log(`O valor na posição [${i}] é : ${num[i]}`)
}*/

//------------- ou -------------

for (var i in num) {
    console.log(`O valor na posição [${i}] é : ${num[i]}`)
}