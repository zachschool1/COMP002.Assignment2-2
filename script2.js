// 2. Write code that prints all of the numbers from 1 to 100 with three exceptions: [1] For numbers that are divisible by 3, print “Fizz” instead of the number,  [2] for numbers that are divisible by 5, print “Buzz” instead of the number, and [3] for numbers that are divisible by both 3 and 5, print “FizzBuzz” instead of the number.
// Example output:
// 1
// 2
// Fizz
// 4
// Buzz
// ...
// 14
// FizzBuzz
// ...


for(let i = 1; i <= 100; i++){
    //order matters, i think start with fizzbuzz? if i % 5 and i % 3 console.log fizbuzz, else if i % 3 do fizz, else if 1 % 5 do buzz, else console.log i

    if (i % 5 == 0 && i % 3 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//had one error where i didnt do the == 0 and all the answers were backwards, but this one was pretty easy actually, i hope i did it right though