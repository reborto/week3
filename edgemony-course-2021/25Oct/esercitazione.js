/*  
  ESERCIZI SULLO SCOPE
  ATTENZIONE: provare prima a dare prima la risposta e solo dopo testare il codice!!
  Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'.
*/

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log?
// RISPOSTA: pensavo che dovesse dare true, però poi mi sono reso conto che, essendo 3.14 maggiore di 3 allora ambedue i console.log dovevano ritornare il valore

const PI = 3.14;

console.log(PI);

if (PI >= 3) {
  console.log(PI);
}

// Es. 2: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: 
//Il mio colore preferito è: violet
//ci sono 12 mesi in un anno;

var favColour = "violet";
let monthsInAYear = 12;

if (true) {
  var favColour = "violet";
  console.log("Il mio colore preferito è:", favColour);
}

console.log("Ci sono", monthsInAYear, "mesi in un anno.");

// Es. 3: Dato il seguente, qual è il risultato dei console.log?
// RISPOSTA:
//Sugo di pomodoro freschissimo, 
//
function makePizza(moreIngredients) {
  let theSecond = "Sugo di pomodoro freschissimo"; /*let vale dentro il block code*/
  // { ... }
  console.log(theSecond + ", " + moreIngredients);
  return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!)
}

if (true) {
  makePizza("rucola, prosciutto crudo e scaglie di grana.");
  console.log("Il secondo ingrediente necessario: ", theSecond); /*qui dà l'errore è perché let theSecond non viene letto, essendo dentro il block code*/
}
