

//øvelse 2

function tjek(a, b) {
    if (isNaN(a) == true || isNaN(b) == true) {
        return 'Den ene er ikke et tal';
    } else {
        let z = a + b;
        return 'a+b er = ' + z;
    }
}

let find = tjek(10, 'henrik');

console.log(find);