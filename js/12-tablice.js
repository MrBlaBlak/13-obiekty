'use strict';
var imiona = ['Monika','Krystian', 'Łukasz'];
imiona[3]='Tania';
imiona[2]='Ela';
var k=imiona.push('Geralt');
console.log(imiona);
console.log(k);
imiona.pop();
console.log(imiona);
console.log(imiona.unshift('Robert'));
console.log(imiona);
console.log(imiona.shift('Robert'));
console.log(imiona);
for(var i=0; i<imiona.length; i++){
    console.log(imiona[i]);
}
imiona.forEach(function (element, i){
    console.log('Element nr' + i + '=' +element);
})
console.log( imiona.join('-'));
imiona.reverse();
console.log(imiona);
imiona.sort();
console.log(imiona);

var imionaMeskie = ['Robert', 'Mariusz', 'Andrzej'];
var zbiorImion =  imionaMeskie.concat(imiona);
console.log(zbiorImion);

console.log(zbiorImion.indexOf('Mariusz'));
console.log( Array.isArray(zbiorImion));
console.log( zbiorImion.slice(2,5));
zbiorImion.splice(2,3,"Julek", "Krzysiek");
console.log(zbiorImion);
