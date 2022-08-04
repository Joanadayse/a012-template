 const bool1 = false
 const bool2 = true 
 const bool3 = true

// crie um if para verificar se o bool1 é true e um else caso nao seja
 if (bool1) {
     alert("entrei no if, sou true")

 } else {
     alert ("entrei no else, sou false")

 }

// criando uma terceira variavel e verificando se são iguais entre si
 if (bool3 === bool2 ) {
     alert ("1 e 2 são iguais")

 } else if ( bool2 === bool3){
     alert ("2 e 3 são iguais")

 } else if (bool1 === bool3) {
     alert ("1 e 3 são iguais")

 } else {
     alert ("nenhum das condições foi atendidas ")
 }







// const idade = 60

 //pode emitir o titulo pessoas com 18 ou mais, pessoas menores que 18 nao.
 if (idade>= 18) {
    alert ("Pode e deve emitir o titulo")

 } else {
     alert ("nao pode emitir o titulo")
 }


 //casos facultativos , pessoas com 60 anos, pessoas com idade entre 16 e 17
 if (idade >= 60){
     alert("o voto é facultativo")

 } else if ( idade >= 16 && idade <18){
  alert ("o voto é facultativo")

 } else if (idade >= 18){
     alert ("pode e deve emitir o titulo")

 } else {
     alert ("não pode emitir o titulo")
 }

// SE O NUMERO FOR 1 EU FAÇO ALGO
// SE NAO, SE O NUMERO FOR 2 EU FAÇO ALGO
//SE NAO EU NAO FAÇO NADA


const media = prompt ("qual a sua nota?")

if (media >= 5) {
    alert ( "aprovada") 

} else if (media >= 3){
    alert ( "recuperação")


}else if (media <3){    
    alert ( "reprovada")
 
} else {
    alert ("dado invalido")
}

// else {
//    alert ( "reprovada")
// }