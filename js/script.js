// CONSEGNA: 

// 1) Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 2) Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// PSEUDOCODICE
/*
1) Palidroma

- seleziono l'input dell'utente che conterrà la mia stringa
- seleziono il bottone che farà partire il controllo 
- creo una funzione che restituisca true se la parola è palindroma, viceversa false
    FUNCTION: 
        - prendo la stringa dell'utente e la trasformo in array di caratteri 
        - inverto il loro ordine 
        - creo una nuova stringa con l'ordine dei caratteri invertito (primo=ultimo)
        ? SE stringa utente = stringa invertita
            °V1: Parola palindroma;
        : ALTRIMENTI
            °F1: Parola non palindroma;
- richiamo la funzione e la faccio eseguire solo al click del bottone
- stampo il risultato in un div di output

*/


// CODE

const inputEl = document.getElementById('word');
const btnEl = document.getElementById('check-pali');
const outputEl = document.getElementById('output');

btnEl.addEventListener('click', function(){
    if(checkPali(inputEl.value)){
        outputEl.innerText = 'È palindroma!';
    } else{
        outputEl.innerText = 'Non è palindroma.';
    }
});













/* *********** FUNCTIONS ************ */
function checkPali(word){
    // nel caso l'utente inserisca una frase con degli spazi prima elimino gli spazi
    let wordReverse = word.replace(/\s+/g, '');

    // creo una nuova stringa invertendo tutti i caratteri della parola data come parametro
    wordReverse = wordReverse.split('');
    wordReverse = wordReverse.reverse().join('');
    
    // controllo se la parola iniziale (senza spazi) è uguale a quella invertita
    if(word.replace(/\s+/g, '')===wordReverse){
        return true;
    }else{
        return false;
    }
}
