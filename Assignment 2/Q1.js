function print(num1) {
    return function (num2) {
        console.log(num1 + num2);
    }
}

let innerFunction1 = print(5);
let innerFunction2 = print(5);
innerFunction1(10)
innerFunction2(20)
 
