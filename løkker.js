//øvelse 2

// let i=0;

// for(i=0; i<26; i++){
//     console.log(i)
// }



// while(i<25){
//     i++;
//     console.log(i);
// }

// do{
//     i++;
//     console.log(i);
// }while(i<25);

//øvelser 3

// let per = 16;


// do{
// per++;
// console.log(per);
// }while(per<30);

//øvelse 4

// let aar = 2017;
// for(aar=2017; aar>1917; console.log(aar)){
//     aar--;
// }

//øvelse 5

// let ugeDage = ['mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag', 'søndag'];
// let i=0;
// for(i=0; i<ugeDage.length; i++){
//     console.log(ugeDage[i]);
// }


//øvelser 7

// let navne = ['jens', 'jack', 'henrik', 'richard', 'paul', 'rica', 'havannah', 'fiona'];
// navne.forEach(function(navne){console.log(navne)});

//øvelser 8 

// let kunst = ['mozart', 'beethoven', 'bach', 'amadeus'];

// kunst.forEach(function(kunst, index){

//     console.log(kunst + ' har placeringen '+ index);

// });

//øvelser 9

let tal = [2, 5, 6, 8, 10, 12, 14, 16, 27, 28];

tal.forEach(function(tjo, index, arr){
    if(arr[index+1]!= undefined){
console.log(tjo + ' er mindrer end '+arr[index+1]);
    }else{
        console.log('Ha du stoppede');
    }
});