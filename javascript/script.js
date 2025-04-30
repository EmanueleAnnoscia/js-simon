// prelevo il form
const formElem = document.getElementById("numbersequence");

// prelevo tutti gli input

const numberInput = document.querySelectorAll(".right-number");

// prelevo gli elementi da compilare

const numberElem = document.getElementById("number");

const randomString = document.getElementById("numeri-random")

const formsectionElem = document.getElementById("form-section")

const scoreParElem = document.getElementById("score-par")
// genero i 5 numeri casuali in pagina
const randomArr = [] ;


function randomNumber(){
    for(let i =0; i<=4; i++){
        const randomNum = Math.floor(Math.random()*98 + 1);
        if (!randomArr.includes(randomNum)) {
        randomArr.push(randomNum);
        }
    }

}

randomNumber();
// console.log(randomArr)

// stampo i 5 numeri in pagina
randomString.innerText = randomArr.join(" ");

// far scomparire i numeri dopo 30 secondi e far comparire il form
setTimeout (function(){
    randomString.innerText = "0";
    formsectionElem.classList.remove("d-none");

}, 3000);

// inserire il click del bottone che avvia l'evento
formElem.addEventListener("submit", handleForm);

function handleForm(event){
    event.preventDefault(); //prevengo il refresh del form

    // prelevo i valori degli input
    const numeroUtente = [];

    //eseguo il controllo sul numero
    for(let i = 0; i < numberInput.length; i++){
        const val = parseInt(numberInput[i].value);
        if(isNaN (val) || val <= 0) {
            alert("Inserisci un numero valido (un numero intero positivo)");
            return;
        }
        numeroUtente.push(val);
    }

    // eseguo la verifica dei numeri inseriti sui numeri generati
    let score = 0 ;

    for(let i=0; i<numeroUtente.length; i++ ){
        if(randomArr.includes(numeroUtente[i])){
            score ++ ;

        }

    }
       
    // scoreParElem.innerText = `Hai indovinato ${} numeri! (${})`
    scoreParElem.innerText = `Hai indovinato ${score} numeri!`;

    // quando clicco il bottone mi restituisce il punteggio
    scoreParElem.classList.remove("d-none");

    // resetto tutti i campi del form
     formElem.reset();
}


