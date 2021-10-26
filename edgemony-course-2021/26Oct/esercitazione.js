/* 
    Sulla base di quanto detto a lezione, creare una calcolatrice capace di svolgere diverse operazioni
    (più ne mettete meglio è!).
    La scelta dell'operazione da effettuare (per esempio somma)
    e la scelta dei numeri, deve essere specificata dell'utente.
    A tal fine, potrete utilizzare la funzione 'prompt()' per catturarne i dati.
    
    ATTENZIONE:
    L'utilizzo delle callbacks, delle arrow function e dello spread operator
    sono elementi fondamentali di questa esercitazione, mi raccomando.
    Potete chiaramete controllare il codice scritto a lezione, ma cercate di non copiare.
*/

/* Esercizio avanzato:
    Oltre alle classici funzioni somma, moltiplicazione, ecc... provate ad implementare
    l'operazione potenza e l'operazione radice quadrata.
    SUGGERIMENTO: esistono delle funzioni della libreria Math (vista a lezione).
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/


//operazione=funzione
const sum = (numOne, numTwo) => numOne + numTwo;
const mult = (numOne, numTwo) => numOne * numTwo;
const division = (numOne, numTwo) => numOne / numTwo;
const sub = (numOne, numTwo) => numOne - numTwo;


if (operationChoice === "somma" || "+") {
  calculator(sum, parsedNumbers);
}
if (operationChoice === "moltiplicazione" || "*") {
    calculator(mult, parsedNumbers);
}
if (operationChoice === "divisione" || "/") {
    calculator(division, parsedNumbers);
}
if (operationChoice === "sottrazione" || "-") {
    calculator(sub, parsedNumbers);
}

function calculator(operation, numbers) {
    let totOperation = 0;
    totOperation = operation(...numbers);
    return totOperation;
}

let operationChoice = prompt("Inserisci operazione: ");
let numbersChoiche = prompt("Inserisci numeri: ");
const numbers = numbersChoiche.split(","); /*lo split ritorna un array*/

const parsedNumbers = [];
for (x of numbers) {
    parsedNumbers.push(parseInt(x));
  }
calculator(operationChoice, parsedNumbers);
console.log(calculator(operationChoice, parsedNumbers));  