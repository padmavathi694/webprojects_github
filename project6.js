//the value of variable is 293
const kelvin=293;
//the value of celsius is kelvin -273
const celsius=kelvin-273;
//covert celsius to fahrenheit and round the float value using math.floor
let fahrenheit=Math.floor((celsius*(9/5)+32));
//convert celsius to newton and round the float value using math.floor
let newton=Math.floor((celsius*(33/100)));
//print the temprature in console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);
