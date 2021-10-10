// input integer
// count every value from 1 up to given integer value
// check if there are integers that are divisible by 3 without remainder
// check if there are integers that are divisible by 5 without remainder
// check if there are integers that are divisible by 3 & 5 without remainder
// if divisible by 3 & 5 print 'FizzBuzz'
// if divisible by 3 print 'Fizz'
// if divisible by '5' print 'Buzz'

let n = 15;

let fizzBuzz = function() {
let output = [];

    for (let i = 1; i<=n; i++) {
        if (i%3 === 0 && i%5 === 0) {
            output.push('FizzBuzz');
        }
        else if (i%3 === 0) {
            output.push('Fizz');
        }
        else if (i%5 === 0) {
            output.push('Buzz');
        }
        else {
            output.push(i.toString());
        }
    }
    console.log(output);
};

fizzBuzz(n);