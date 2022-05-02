// Analise os 10 comandos 'if' a seguir e tente prever o que será exibido na tela. Se será exibido a letra A, ou se será exibido a letra B.
// Fique à vontade de rodar o código para verificar se suas respostas estão corretas. 

let variavel1 = 10
let variavel2 = true
let variavel3 = []
let variavel4 = [1,2,3,4]
let variavel5 = "Nome"

//1 A
if (variavel1 == 10) {
    console.log("A");
} else {
    console.log("B");
}
//2 B
if (variavel1 > 10) {
    console.log("A");
} else {
    console.log("B");
}
//3 A
if (variavel1 <= 10) {
    console.log("A");
} else {
    console.log("B");
}
//4 A
if (variavel2 == true) {
    console.log("A");
} else {
    console.log("B");
}
//5 A
if (variavel2) { // undefined, null, NaN, 0, "", false -> false
    console.log("A");
} else {
    console.log("B");
}
//6 A
if (variavel3) {
    console.log("A");
} else {
    console.log("B");
}
//7 A
if (variavel4) {
    console.log("A");
} else {
    console.log("B");
}
//8 A
if (variavel4[0] == 1) {
    console.log("A");
} else {
    console.log("B");
}
//9 B
if (variavel4[1] == 1) {
    console.log("A");
} else {
    console.log("B");
}
//10 A
if (typeof(variavel5) == 'string') {
    console.log("A");
} else {
    console.log("B");
}
