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


2) Pari e Dispari
- seleziono l'input dell'utente che conterrà il numero
- seleziono il bottone che farà partire il controllo
- seleziono i bottoni pari e dispari per la scelta dell'utente
- creo una funzione che generi un numero random da 1 a 5
    FUNCTION: 
        - uso solo math.random() con un limite da 1 a 5 e restituisco il valore, non mi serve alcun parametro;
- al click del bottone: 
    - creo una variabile che contenga la somma tra il numero generato dal pc randomicamente e quello scelto dall'utente;
    - creo una funzione che controlli se un numero è pari o dispari
        FUNCTION: 
            - deve ricevere un parametro
            ? SE il resto della divisione tra parametro e 2 è maggiore di 0
                °V1: Il numero è pari quindi la funzione restituisce true;
            : ALTRIMENTI 
                °F1: Il numero è dispari quindi la funzione restituisce false;
    ? SE: l'utente ha scelto pari e la somma è pari
        °V1: Stampa che ha vinto l'utente
    :? ALTRIMENTI SE l'utente ha scelto dispari e la sommma è dispari
        °V1: Stampa che ha vinto l'utente
    : ALTRIMENTI
        °F1: Stampa che ha vinto il PC;
*/


// CODE

const inputEl = document.getElementById('word');
const btnEl = document.getElementById('check-pali');
const outputEl = document.getElementById('output-pali');

btnEl.addEventListener('click', function(){
    if(checkPali(inputEl.value)){
        outputEl.innerText = 'È palindroma!';
    } else{
        outputEl.innerText = 'Non è palindroma.';
    }
});













/* *********** FUNCTIONS ************ */
/**
 * Controlla se la parola inserita come parametro è palindroma
 * @param {string} word
 * @returns {boolean} true | false
 */
// PAROLA PALINDROMA
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


