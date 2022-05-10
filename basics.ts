function add(num1:number, num2:number, resultPhrase:string, state:boolean){
    const result = num1 + num2
    if (state) return resultPhrase + result;
    else console.log("State is false");
    
}

let number1:number;
number1 = 2
const number2 = 2.3
const resultPhrase = "The result is : ";
let state = true

const result = add(number1, number2, resultPhrase, state);
console.log(result);
