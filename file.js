/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/
console.log('all is ok!')

function getRandomNumber(min, max) {
    const range = max - min + 1
    return Math.floor(Math.random() * range) + min;
}


let lap = 5
let min = 1
let max = 1000
const time = 4
console.log(lap, min, max, time)


const containerNumberRandom = document.getElementById('random-game-number')


function getUniqueRandomNumbers(lap, min, max) {
    const numbers = [];

    while (numbers.length < lap) {

        const randomNumber = getRandomNumber(min, max);

        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }

    }

    return numbers;

}

let numbersRandom = getUniqueRandomNumbers(lap, min, max)

containerNumberRandom.innerHTML = (`<div class="py-3"><p> Ricorda I SEGUENTI NUMERI</p>   
                                            <p> ${numbersRandom}</p></div>`)



/*setTimeout(function () {
    console.log('Time');
    // nascondo i numeri
    containerNumberRandom.innerHTML = '';

    setTimeout(askAndCheckUserNumbers, 100);


}, time * 1000)*/


const timeToDisplay = document.getElementById('header-time')

timeToDisplay.innerHTML = (setTimeout(function () {
    console.log('Time');

    containerNumberRandom.innerHTML = '';

    setTimeout(checkUserNumbers, 50);


}, time * 1000))




function askNumberatUser() {
    const numberUser = []

    while (numberUser.length < lap) {
        const askNumber = parseInt(prompt('Inserisci i numeri che hai memeorizzato'))

    } if (!isNaN(askNumber) && !askNumberatUser.includes(askNumber)) {
        numberUser.push(askNumber)
    }


}

/*const numbersAskedUser = askNumberatUser()*/
function checkUserNumbers() {
    const numbersAskedUser = askNumberatUser()
    console.log(numbersAskedUser);
    let numberinsert = 0;
    for (let i = 0; i < numbersAskedUser.length; i++) {
        const userNumber = numbersAskedUser[i];
        if (numbersToGuess.includes(userNumber)) {
            console.log('Bravo Bella memoria', userNumber);
            numberinsert++;
        }

    }
}