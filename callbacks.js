//øvelse 1

// function kaldDen(element) {
//     console.log(element);
// }


// let data = [1, 2, 3, 4, 5, 6];
// data.forEach(kaldDen);

// øvelse 2

let tekstStraenge = ['Hans', 'Har', 'En', 'Bondegård'];
let simpelTekst = 'Jeg hedder Jonathan';

function formData(tekst) {
    console.log('<p>' + tekst + '</p>');
}

function getData(tekst, next) {

    if (typeof tekst == 'string') {
        next(tekst)

    } else if (Array.isArray(tekst) == true) {
        for (let i = 0; i < tekst.length; i++) {
            next(tekst[i]);
        }
    }

}

getData(tekstStraenge, formData);
getData(simpelTekst, formData);

//øvelse 3

//funktionen getData defineres med to parametre

// function getData(dataURI, outputData) {

//     //det første der bliver udskrevet i consolen når funkitonen bliver kaldt

//     console.log('første linje i getData funktionen...');

//     //så bliver der sat en timout på en anonym funktion på to sekunder

//     let timer = setTimeout(function () {

//         // consolen siger der er gået 2 sek

//         console.log('Her der der gået 2 sekunder.');

//         //dataen der bliver sendt videre til den næste funktion

//         let dataArray = [12, 34, 56, 78, 90, 123, 456, 789];

//         //sender dataArray til en anden funktion som bliver Callbacked her

//         outputData(dataArray);
//     }, 2000);
// }

// function outputData(dataArray) {
//     //Funktionen udskriver dette i consolen når timeren løber ud
//     console.log('Dette er funktionen der udskriver det hentede data: ' + dataArray);
// }

// getData('http://www.domain.com/something', outputData);
// console.log("Denne kode linje burde være den sidste.");

