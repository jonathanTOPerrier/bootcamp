# Funktioner

Funktioner er et stykke kode der bliver udført når man kalder det på et bestemt tidspunkt, som f.eks. set neden under, der bliver funktions kaldet gemt i en variabel som gør at det bliver kaldt i console loggen.

Her der har funktionen to parametre, a og b. Som bliver brugt på en bestemt måde når funktionen bliver kaldt. Her der tjekker vi både om begge argumenter er til stede og om de begge to er tal.

Her der ville jeg forvente at der blev retuneret "10 gange med 2 er = 20" i consolen.

```javascript

function tjek(a, b) {
    if (a == undefined || b == undefined) {
        if (a == undefined) {
            return 'det første argument er ikke defineret';
        } else {
            return 'det andet argument er ikke defineret';
        }
    }

    if (isNaN(a) == true || isNaN(b) == true) {
        return 'Den ene er ikke et tal';
    } else {
        let z = a * b;
        return a + ' gange med ' + b + ' er = ' + z;
    }
}

let find = tjek(10, 2);

console.log(find);


```