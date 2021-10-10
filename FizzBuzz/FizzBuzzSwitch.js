// Define n
// Create function
// Create an output array to store values
// Create values for Fizz and Buzz and set them to false
// Create a loop to count values from 1 to n
// Check if values for Fizz and Buzz have remainders.. if i%3 and/or i%5 has no remainder then it is true, else false
// Use switch statement to evalute if conditions are true to print either, FizzBuzz, Fizz, or Buzz
// Set default to print any non divisible numbers as strings

let n = 15;

let fizzBuzz = () => {
    let output = [];
    let Fizz = false;
    let Buzz = false;

    for (let i = 1; i<=n; i++) {
        Fizz = i%3 === 0;
        Buzz = i%5 === 0;
        switch(true) {
            case Fizz && Buzz :
                output.push("FizzBuzz");
                break;
            
            case Fizz :
                output.push("Fizz");
                break;

            case Buzz :
                output.push("Buzz");
                break;
            
            default : output.push(i.toString());
        }
    }
    console.log(output)
    return output;
}

fizzBuzz(n);