/*
    Zadanie 1 - "kalkulator"
*/

var a = 20;
var b = 10;
var add = a+b;
var sub = a-b;
var mul = a*b;
var div = a/b;
var mod = a%b;

// a)
console.log(add);
console.log("Wynik odejmowania to: "
+sub);


// b)
document.getElementById('addR').
innerHTML = add;
document.getElementById('subR').innerHTML = 'Wynik odejmowania '+a+' i '+b+' to '+sub; 