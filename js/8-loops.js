'use strict';

for( var i=0; i<4; i++)
    {
        console.log(i);
    }
var k=0;

while(k<4){
    console.log(k);
    k++;
}
for(var i=1; i<4;){
    console.log(i++);
}
console.log('-----');
for(var i=1; i<4;){
    console.log(++i);
}
console.log('-----');
for(var b=1; b<6; b++){
   if (b==3) {
       continue;
   }
    else{
        console.log(b);
    }
    console.log('-----');
}

