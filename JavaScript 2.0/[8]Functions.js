function addtwonum(num1, num2) {
  console.log(num1 + num2);
}
addtwonum(3, 7);
addtwonum(3, "7");
//----------------------------------------------------------
//spread operator is also colled rest operator

function Calculate1(...num1) {
  return num1;
}
console.log(Calculate1(200, 399, 474));
//-----------------------------------------------------
function Calculate2(val1, val2, ...num1) {
  return num1;
}
console.log(Calculate2(200, 399, 474, 123, 478));
//-------------------------------------------------------
