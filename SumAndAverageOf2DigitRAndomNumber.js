console.log("Five Random digit are ");
for (let i=1; i < 5; i++)
{
    let randomNumber =( Math.floor(Math.random() * 100) % 99) ;
    console.log("Random 2 digit numbers is :-"+randomNumber);
    sumOfRandomDiceNumber +=randomNumber;
}
 console.log("Sum of all Random Numbers is :- "+sumOfRandomDiceNumber);

let averageOfNumber = sumOfRandomDiceNumber / 5;

console.log("Average of Sum of all Random Numbers is :- "+averageOfNumber);