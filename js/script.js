// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// chiedo all'utente la difficolta
let numeroUtente = (prompt('inserisci la difficolta con un numero da 1 a 3'));

let difficult = 100;
let nome = null;
if (numeroUtente == 1) {
    difficult = 100;
    nome = 'facile';
}

if (numeroUtente == 2) {
    difficult = 81;
    nome = 'medio';
}

if (numeroUtente == 3) {
    difficult = 49;
    nome = 'difficile';
}


//Array con i numeri randomici delle caselle con bomba
let bombe = []; 
for (var i = 0; i < 16; i++){
    //Estrazione casuale di num compreso tra 0 e la difficolta
    var numBomba =Math.floor(Math.random()*difficult)
    //inserisco il numero estratto nell'array
    console.log( numBomba);
    bombe.push(numBomba)
}

// creo un ciclo for per la difficolta' 1


for (let i = 0; i < difficult; i++) {
    //console.log(i);
    let nodo = document.createElement('div');
    nodo.addEventListener("click", function(){
        if(bombe.includes(i)){
            nodo.classList.add('bomba');
        } else {
            nodo.classList.add('click');
        }
        
    })
    nodo.classList.add('square');
    nodo.classList.add(nome);
    nodo.innerText = i;
    document.querySelector('#grid').append(nodo);
}

//per il punteggio

let punteggio = 0;

document.getElementById('punteggio').innerHTML = punteggio;

var elements = document.getElementsByClassName("square");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(){
        punteggio = punteggio + 1;
        document.getElementById('punteggio').innerHTML = punteggio;
    });
}



