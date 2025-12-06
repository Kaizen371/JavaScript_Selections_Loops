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
