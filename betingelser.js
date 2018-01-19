//opgave 2 boleans

var tjek = true;

if(tjek===true){
console.log('bøllebob');
}

//øvelse 3
var ranTal = Math.random()*10;

if(ranTal<2){
    console.log('under 2');
}else if(ranTal<5){
    console.log('mellem 2 og 5');
}else{
    console.log(ranTal);
}
//øvelse 4

var result = tjek? 'rigtigt' : 'forkert' ;

console.log(result);



//øvelse 5

var laeskedrik = 'Faxe Kondi';

if(laeskedrik === 'cola'){
    console.log('Cola er sort');
}else if(laeskedrik === 'sprite'){
    console.log('Sprite er nice!');
}else if(laeskedrik === 'Faxekondi'||laeskedrik === 'Faxe Kondi'){
    console.log('Faxe er bedst!!!');
}else{
    console.log('dette er ikke en læskedrik');
}

//øvelse 6

switch(laeskedrik){

    case 'cola':
        console.log('Cola mister brusen hurtigt');
    break;
    case 'sprite':
        console.log('Sprite er okay');
    break;
    case 'Faxe Kondi':
        console.log('Faxe Kondi er gud');
    break;
}

