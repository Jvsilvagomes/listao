let calculadora = soma;
let numb1 = 10
let numb2 = 10

switch(calculadora){
    case `soma`:
        console.log(numb1 + numb2);
        break;
    case `subtração`:
        console.log(numb1 - numb2)
        break;
    case `multipliacação`:
        console.log(numb1 * numb2);
        break;
    case `divisão`:
        console.log(numb1 / numb2);
        break;
default:
        console.log(`Operação inválida!`)
}
// joao victor da silva gomes 03/04/2025 21:01