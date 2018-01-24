//øvelse 1

// var navn = "";
// var alder = "";
// var adresse = "";

// var fejlbeskeder = ["Du skal udfylde navn feltet", "Du skal udfylde alder feltet","Du skal udfylde adresse feltet"];

// if (navn == "") {
// 	console.log(fejlbeskeder[0]);
// }

// if (alder == "") {
// 	console.log(fejlbeskeder[1]);
// }

// if (adresse == "") {
// 	console.log(fejlbeskeder[2]);
// }

//øvelse 2 fibo

// let a = 0;

// let b = 1;

// while(a<1600){
//     console.log(a + ' a');
//     console.log(b + ' b');

// 	a += b;
//     b+=a;
//  }

//øvelse 3 palindroner

// let pali = 'bob';

// let i = pali.length - 1;

// let comp = '';

// for (i = pali.length - 1; i >= 0; i--) {
//     comp += pali[i];
// }
// if (comp == pali) {
//     console.log('ja det er et palindron');
// } else {
//     console.log('nej det er ikke');
// }

//øvelse 4

// let i = 0;

// do{
//     i++;
//     console.log(i);
//     if(0==i%3){
//         console.log('plum')
//     }
//     if(0==i%5){
//         console.log('bus')
//     }
// }while(i<137);

//øvelse 5

// var brugernavn = "";
// var password = "";
// var email = "";

// var fejlbeskeder = [];

// if (brugernavn == "") {
// 	fejlbeskeder.push( "Du skal udfylde brugernavn feltet\n");
// }

// if (password == "") {
// 	fejlbeskeder.push( "Du skal udfylde password feltet\n");
// }

// if (email == "") {
// 	fejlbeskeder.push( "Du skal udfylde email feltet\n");
// }

// console.log (fejlbeskeder);

//øvelse 6

// function saetTekstSammen(a, b){

//     return a + ' ' + b;

// }
// let resultat = saetTekstSammen('Mickey', 'Mouse');

// console.log(resultat);

//øvelse 7


// let hoejde = 1.98;
// let vaegt = 96;
// let bmi = vaegt/(hoejde*hoejde);

// if(bmi<18.5){
//     console.log('Din BMI er '+bmi+ ' og du er undervægtig')
// }
// if(bmi>18.5 && bmi<24.9){
//     console.log('Din BMI er '+bmi+' og du er normaltvægtig')
// }
// if(bmi>24.9 && bmi<29.9){
//     console.log('Din BMI er '+bmi+' og du er overvægtig')
// }
// if(bmi>29.9 && bmi<39.9){
//     console.log('Din BMI er '+bmi+' og du er fed')
// }
// if(bmi>39.9){
//     console.log('Din BMI er '+bmi+' og du er svært overvægtig')
// }

//øvelse 8 valuta

// let tallet = 3435.5;
// let talletStr = String(tallet);
// let nummer = talletStr.indexOf('.')
// let foer ='kr. ';
// let efter ='';

// for(let i=0; i<talletStr.length; i++){

//     if(i<nummer){
//         foer+=talletStr[i];
//     }else if(i>nummer){
//         efter+=talletStr[i];
//     }else{
//         console.log(talletStr[i]+' dette burde være et punktum');
//     }
// }

// console.log(foer+','+efter);

//øvelse 9


// function fjernMellemrumFoerOgEfter(fjern){

//     let tja = String(fjern);

//    fjern = tja.trim();

// return fjern;
// }

// var tekst1 = fjernMellemrumFoerOgEfter ("Hej");      // returnerer "Hej"
// var tekst2 = fjernMellemrumFoerOgEfter (" Hej ");    // returnerer "Hej"
// var tekst3 = fjernMellemrumFoerOgEfter (". Hej .");  // returnerer ". Hej ."

// console.log(tekst1);
// console.log(tekst2);
// console.log(tekst3);

//øvelse 10


// function ligEllerUlig(tallet) {

//     if (tallet == Math.round(tallet)) {
//         return tallet % 2;
//     } else {
//         return 'hvad tror du selv';
//     }

// }

// var resultat1 = ligEllerUlig(0);  // returnerer 0
// var resultat2 = ligEllerUlig(1);  // returnerer 1
// var resultat3 = ligEllerUlig(2);  // returnerer 0
// var resultat4 = ligEllerUlig(3);  // returnerer 1

// var resultat5 = ligEllerUlig(-1);  // returnerer 1
// var resultat6 = ligEllerUlig(-2);  // returnerer 0
// var resultat7 = ligEllerUlig(-3);  // returnerer 1

// var resultat8 = ligEllerUlig(3.7);  // returnerer øh... Hvad synes du?


// console.log(resultat1);
// console.log(resultat2);
// console.log(resultat3);
// console.log(resultat4);
// console.log(resultat5);
// console.log(resultat6);
// console.log(resultat7);
// console.log(resultat8);

//øvelse 11

// function rouletteArray(tallet, arr) {
//     let tal = tallet % arr.length;

//     return arr[tal];
// }



// var farve1 = rouletteArray(0, ["rød", "grøn", "blå"]);  // returnerer "rød"
// var farve2 = rouletteArray(1, ["rød", "grøn", "blå"]);  // returnerer "grøn"
// var farve3 = rouletteArray(2, ["rød", "grøn", "blå"]);  // returnerer "blå"
// var farve4 = rouletteArray(3, ["rød", "grøn", "blå"]);  // returnerer "rød"
// var farve5 = rouletteArray(4, ["rød", "grøn", "blå"]);  // returnerer "grøn"

// var style1 = rouletteArray(0, [".bright", ".dark"]);  // returnerer ".bright"
// var style2 = rouletteArray(1, [".bright", ".dark"]);  // returnerer ".dark"
// var style3 = rouletteArray(2, [".bright", ".dark"]);  // returnerer ".bright"
// var style4 = rouletteArray(3, [".bright", ".dark"]);  // returnerer ".dark"

// console.log(farve1);
// console.log(farve2);
// console.log(farve3);
// console.log(farve4);
// console.log(farve5);

// console.log(style1);
// console.log(style2);
// console.log(style3);
// console.log(style4);


// function vinkel360(v) {

//     if (v >= 360) {
//         return v % 360;
//     }
//     if (v < 360 && v >= 0) {
//         return v
//     }
//     if (v < 0) {
//         return 360 + v;
//     }
// }

// var vinkel1 = vinkel360(0);  // returnerer   0
// var vinkel2 = vinkel360(360);  // returnerer   0
// var vinkel3 = vinkel360(720);  // returnerer   0

// var vinkel4 = vinkel360(10);  // returnerer  10
// var vinkel5 = vinkel360(-10);  // returnerer 350
// var vinkel6 = vinkel360(365);  // returnerer   5
// var vinkel7 = vinkel360(725);  // returnerer   5

// console.log(vinkel1);
// console.log(vinkel2);
// console.log(vinkel3);
// console.log(vinkel4);
// console.log(vinkel5);
// console.log(vinkel6);
// console.log(vinkel7);



// function afstand2d(x1, y1, x2, y2) {

//     if (x1 == x2) {
//         return y2 - y1;
//     } else if (y1 == y2) {
//         return x2 - x1;
//     } else if (x1 < 0) {
//         let a = (x1 * -1) + x2;
//         let b = (y1 * -1) + y2;
//         let c = Math.pow(a, 2) + Math.pow(b, 2);
//         return Math.sqrt(c);
//     } else {
//         let a = x2 - x1;
//         let b = y2 - y1;
//         let c = Math.pow(a, 2) + Math.pow(b, 2);
//         return c = Math.sqrt(c);
//     }

// }

// var afstand1 = afstand2d(0, 0, 1, 0);  // returnerer 1
// var afstand2 = afstand2d(0, 0, 5, 0);  // returnerer 5
// var afstand3 = afstand2d(2, 0, 5, 0);  // returnerer 3

// var afstand4 = afstand2d(0, 0, 1, 1);  // returnerer 1.414
// var afstand5 = afstand2d(1, 1, 2, 2);  // returnerer 1.414
// var afstand6 = afstand2d(2, 2, 3, 3);  // returnerer 1.414

// var afstand7 = afstand2d(0, 0, 2, 2);  // returnerer 2.828
// var afstand8 = afstand2d(-1, -1, 1, 1);  // returnerer 2.828

// console.log(afstand1);
// console.log(afstand2);
// console.log(afstand3);
// console.log(afstand4);
// console.log(afstand5);
// console.log(afstand6);
// console.log(afstand7);
// console.log(afstand8);

// function bøde(farten) {

//     let kontrol = (farten / 50) - 1;

//     if (kontrol < 0.3) {
//         return 'fartbøde';
//     } else if (kontrol < 0.6 && kontrol > 0.3) {
//         return 'fartbøde + klip i kørrekortet';
//     } else if (kontrol > 0.6 || farten == 160 || farten >= 200) {
//         return 'fartbøde + betinget frakendelse';
//     }


// }


// let fart1 = bøde(60);
// let fart2 = bøde(70);
// let fart3 = bøde(80);
// let fart4 = bøde(180);

// console.log(fart1);
// console.log(fart2);
// console.log(fart3);
// console.log(fart4);

// function spiritusKoersel(promille) {

//     let fraken = [' betinget frakendelse og køreselsforbud (dvs. nyt køreselskursus skal bestås)',
//         ' ubetinget frakendelse i min. 3 år og køreselsforbud (dvs. nyt køreselskursus skal bestås)',
//         ' fængsel i 20 dage og køreselsforbud (dvs. nyt køreselskursus skal bestås)'];
//     let bøde = [' * med månedslønnen', ' * månedsløn'];
//     let hvilkenFra = 0;

//     if (promille <= 1.2 && promille > 0.51) {
//         return 'Da promillen ligger på ' + promille + ' får køren en' + fraken[0] + ' af kørrekortet og en bøde på ' + promille + bøde[0];
//     } else if (promille > 1.2 && promille < 2) {
//         return 'Da promillen ligger på ' + promille + ' får køren en' + fraken[1] + ' af kørrekortet og en bøde på ' + promille
//             + bøde[0];
//     } else if (promille >= 2) {
//         return 'Da promillen ligger på ' + promille + ' får køren en' + fraken[2] + ' af kørrekortet og en bøde på ' + promille + bøde[1];
//     } else {
//         return 'Promillen ligger på ' + promille + ' og det er ikke højt nok til at udløse en bøde eller straf';
//     }

// }

// let prom = spiritusKoersel(0.4);

// console.log(prom);