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

/*
    Zadanie 2
*/

let s1=3;
let s2=4;
let s3=5;
// powinno wyjść 6

// a)
let p = (s1+s2+s3) /2;
let area = Math.sqrt(p*(p-s1)*(p-s2)*(p-s3))
console.log(area);

// b) wynik + wyjaśnienia
document.getElementById('strony').innerHTML = 'Dla 3-kąta z stronami a, b i c pole ='+area;


/*
    Zadania 3 - losowanie liczb
*/


