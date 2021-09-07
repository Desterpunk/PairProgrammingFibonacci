var numero =parseInt(prompt("Ingrese un numero"));
var fib = [];
fib[0] = 0;
fib[1] = 1;
console.log(fib[0]);
console.log(fib[1]);
for(let i=2;i<numero;i++){
    fib[i]=fib[i-1]+fib[i-2];
    console.log(fib[i]);
};



