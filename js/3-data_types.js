'use strict';

var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;
calkowitaWyplata = wyplata + premia;
console.log(calkowitaWyplata);

var wyplataStr = "5000";
var premiaStr="2500";
var calkowitaWyplataStr;
calkowitaWyplataStr = wyplataStr + ' "dodajemy" ' + premiaStr;

console.log(calkowitaWyplataStr);
 var imieStudenta=" Michal ";
console.log(imieStudenta.indexOf("c"));
console.log(imieStudenta);
imieStudenta = imieStudenta.trim();
console.log(imieStudenta);

var czyJestSmog;
czyJestSmog = true;

if(czyJestSmog==false){
    console.log("JestSMOG")
}
else{
    console.log("Nie ma Smogu")
}
//calkowitaWyplata+=czyJestSmog;
//console.log(calkowitaWyplata);