const score = 200;
console.log(score);
const balence = new Number(300);
console.log(balence);
console.log(balence.toFixed(2)); //output is 300.00
console.log(balence.toString());
console.log(typeof balence);

//-----------MATH-----------

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.65));
console.log(Math.random());
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //it gives value bet 10 above and below 20 //Math.floor round of the decimal number and gives int
