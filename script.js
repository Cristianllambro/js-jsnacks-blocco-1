let check = document.querySelector('.check')


// esercizio numero 1

/*
let userNumberOne = parseInt(prompt('Inserisci un numero:'));
let userNumberTwo = parseInt(prompt('Inserisci un numero:'));

// let userNumberFirst = userNumberOne.valure;
// let userNumberSecond = userNumberTwo.value;

if (userNumberOne > userNumberTwo) {
    check.innerHTML = userNumberOne +  ' è maggiore di ' + userNumberTwo;
} else if (userNumberOne < userNumberTwo) {
    check.innerHTML = userNumberTwo + ' è maggiore di ' + userNumberOne;
}
*/




// esercizio numero 2

/* L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola piu' corta, poi quella piu' lunga. */

/* let wordUserOne = prompt('inserire parola');
let wordUserTwo = prompt('inserire seconda parola parola');
let check = document.querySelector('.check');


if (wordUserOne.length > wordUserTwo.length) {
    check.innerHTML = wordUserOne + ' parola più lunga di ' + wordUserTwo;
} else if (wordUserOne.length < wordUserTwo.length) {
    check.innerHTML = wordUserTwo + ' parola più lunga di ' + wordUserOne;
} else {
    check.innerHTML = 'Sono lunghe uguali.';
}
*/




//esercizio numero 3
/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

/*
let arrNumber = [];

for (i = 0; i < 10; i++) {
    let userRequest = parseInt(prompt('Inserisci un numero'));
    arrNumber.push(userRequest);
}

let sum = 0;

for (i = 0; i < arrNumber.length; i++) {
    sum += arrNumber[i];
}

check.innerHTML = sum;
*/




//esercizio numero 4

/*
let userParty = prompt('Il tuo nome:');
let arrUser = [
    'henri',
    'mauro',
    'gabriel',
    'alessandro',
    'cristian',
    'anna',
    'giulia'
]

let invited = false;

for (let i = 0; i < arrUser.length; i++) {
    if(userParty == arrUser[i]) {
        invited = true;
    }
} 

if (invited) {
    check.innerHTML = 'registrato alla festa';
} else{
    check.innerHTML = 'non puoi partecipare alla festa';
}
*/




//esercizio numero 5

/*
let arrNumber = [];

for (let i = 0; i < 6; i++) {
    let numberUser = parseInt(prompt('Inserisci un numero'));
    if(numberUser % 2 == 1) {
        arrNumber.push(numberUser)
    }
}
check.innerHTML = (arrNumber);

*/




//Esercizio numero 6

/*
let btnCheck = document.getElementById('btn-check');
let arrNumber = []
let sum = 0

function pippo (){
    sum = 0;
    arrNumber = [];
    let numberUser = document.getElementById('number').value;

    if(numberUser.length == 4) {
        numberUser = parseInt(numberUser);
        arrNumber = Array.from(String(numberUser), Number);

        for (let i = 0; i < arrNumber.length; i++) {
            sum += arrNumber[i];
        }

        check.innerHTML = 'La somma dei tuoi numeri è: ' + sum;
    } else {
        check.innerHTML = 'Non hai inserito 4 cifre';
    }

}
*/




// Esercizio numero 7

/*
let arr = [];
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
    check.innerHTML = sum;
}

sum/= 10;
check.innerHTML = sum;
*/




// Esercizio numero 8

/*
let sum = 0;

for (let i = 0; i < 5; i++) {
    let numberUser = parseInt(prompt('Inserisci un numero:'));
    sum += numberUser;
    check.innerHTML = sum;
}
*/

// variante while

let userNumber = parseInt(prompt('Inserisci un numero:'));
let sum = 0;
let i = 0;

while (i < userNumber) {
    sum += userNumber;
    console.log(sum)
}

