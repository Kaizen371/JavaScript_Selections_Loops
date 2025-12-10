console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i <= 100; i++){
    if(i % 2 != 0)
    {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 1; i <= 100; i++ ){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else(i % 5 == 0)
    {
        console.log("Buzz");
    }
}
console.log("-------------");

let number = 1;

while(number < 100){
    if(number % 2 !=0)
    {
        console.log(number);
    }
    number++;
}

let i = 1;
do{
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else(i % 5 == 0)
    {
        console.log("Buzz");
    }
    
    i++; 
}
while(i < 100);

console.log("---------");


let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(let i = 0; i <= n; i++){
    if(i == value){
        console.log("Found Value!")
        break;
    }
    else if(i == n){
        console.log("Did not find value")
    } 
}

console.log("-------------")

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let m = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i = start; i <= m; i++){
  if(i % fizzDivisor == 0 && i % buzzDivisor == 0){
        console.log("FizzBuzz");
    }
    else if(i % fizzDivisor == 0){
        console.log("Fizz");
    }
    else(i % buzzDivisor == 0)
    {
        console.log("Buzz");
    }
}


