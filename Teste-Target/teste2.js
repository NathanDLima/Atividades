let num = 233;
var fib1 = 0, fib2 = 1, fib3, i = 0;
var fibonacci = [0, 1];

function iteraFibonacci(){
    while(i < num && fib3 != num) {
        fib3 = fib1 + fib2;
        fibonacci.push(fib3);
        fib1 = fib2;
        fib2 = fib3;
        i++;
    }
}

fibonacci.forEach(iteraFibonacci);

console.log(fibonacci);

if(fibonacci.includes(num)){
    console.log(`O número ${num} está na tabela de Fibonacci`);
}else {
    console.log(`O número ${num} não está na tabela de Fibonacci`);
}

