let tal = [34, 23, 12, 45, 9, 1, 24, 137, 142];

console.log(tal);

function sorter(arr) {
    let laengde = arr.length;

    //kører gennem arrayet

    for (let i = (laengde - 1); i > 0; i--) {
        //sammenligner nummeret med det forrige, ved at loope igennem arrayet med det nummer
        for (let nuv = (laengde - i); nuv > 0; nuv--) {
            //bytter om på numrerne ved at gemme det nuværende med det før i arrayet
            if (tal[nuv] < tal[nuv - 1]) {
                //byt nummeret
                //gemmer nummeret til at sætte den før til den nuværende
                let midlertidig = tal[nuv];
                //sætter nuværende til den før, hvis den før er størrer
                tal[nuv] = tal[nuv - 1];
                //sætter den før til den nuværende
                tal[nuv - 1] = midlertidig;
            }
        }

    }

}
sorter(tal);
console.log(tal);

let navne = ['Bent', 'Henrik', 'Jens', 'Søren', 'Maria', 'Albert'];

console.log(navne);

function sorterNavn(arr) {
    let laengde = arr.length;

    //kører gennem arrayet

    for (let i = (laengde - 1); i > 0; i--) {
        //looper igennem arrayet og ned, starter fra index nummer 1 og kører op til det sidste element og kører baglens til det første
        for (let nuv = (laengde - i); nuv > 0; nuv--) {
            //sammenligner character koden med hinanden for at sikre
            if (navne[nuv].charCodeAt(0) < navne[nuv - 1].charCodeAt(0)) {
                //til at bytte navnene
                //gemmer navnet til at sætte den før til den nuværende
                let midlertidig = navne[nuv];
                //sætter nuværende til den før, hvis den før er har en større charcode
                navne[nuv] = navne[nuv - 1];
                //sætter den før til den nuværende, igen kun hvis charcoden på den nuværende er højere end den før
                navne[nuv - 1] = midlertidig;
            }
        }

    }

}
sorterNavn(navne);
console.log(navne);