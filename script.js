// esercizio numero 1

/* L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola piu' corta, poi quella piu' lunga. */

/* let wordUserOne = prompt('inserire parola');
let wordUserTwo = prompt('inserire seconda parola parola');
let result = document.querySelector('.result');


if (wordUserOne.length > wordUserTwo.length) {
    result.innerHTML = wordUserOne + ' parola più lunga di ' + wordUserTwo;
} else if (wordUserOne.length < wordUserTwo.length) {
    result.innerHTML = wordUserTwo + ' parola più lunga di ' + wordUserOne;
} else {
    result.innerHTML = 'Sono lunghe uguali.';
}
*/


//esercizio numero 2
/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/
let arrNumber = [];

for (i = 0; i < 10; i++) {
    let userRequest = parseInt(prompt('Inserisci un numero'));
    arrNumber.push(userRequest);
}

let somma = 0;

for (i = 0; i < arrNumber.length; i++) {
    somma += arrNumber[i];
}

alert(somma);  //non riesco ad usare innerHTML


