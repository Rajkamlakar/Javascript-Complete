const month = 3;
switch (month) {
  case 1:
    console.log("jan");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("mar");
    break;
  case 4:
    console.log("apr");
    break;
}

//falsy values=>false,0,-0,BigInt,"",null,undefind,NaN"

//nullish coalescing operator(??):null undefind
let val1;
val1 = 5 ?? 10;
console.log(val1);
let val2;
val2 = null ?? 10 ?? 20;
console.log(val2);

//terniary operator
//condition ? true : false;
