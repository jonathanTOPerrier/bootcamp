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

// let i= pali.length-1;

// let comp ='';

// for(i=pali.length-1; i>=0; i--){
// 	comp+=pali[i];
// }
// if(comp==pali){
// 	console.log('ja det er et palindron');
// }else{
// 	console.log('nej det er ikke');
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


function ligEllerUlig(tallet) {

    if () {

    }

}

var resultat1 = ligEllerUlig(0);  // returnerer 0
var resultat2 = ligEllerUlig(1);  // returnerer 1
var resultat3 = ligEllerUlig(2);  // returnerer 0
var resultat4 = ligEllerUlig(3);  // returnerer 1

var resultat5 = ligEllerUlig(-1);  // returnerer 1
var resultat6 = ligEllerUlig(-2);  // returnerer 0
var resultat7 = ligEllerUlig(-3);  // returnerer 1

var resultat8 = ligEllerUlig(3.7);  // returnerer øh... Hvad synes du?


console.log(resultat1 + ' ' + resultat2 + ' ' + ' ' +)