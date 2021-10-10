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