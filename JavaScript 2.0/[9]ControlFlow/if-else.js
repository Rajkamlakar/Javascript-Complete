//if-statement

if (2 == "2") {
  console.log("yes");
}

if (2 === "2") {
  // === this also check the data type also therefor it wll not executed
  console.log("yes");
}

const score = 200;
if (score > 100) {
  const power = "fly";
  console.log(`user power :${power}`, power);
}
const balence = 1000;
if (balence > 500) {
  console.log("less-than");
} else if (balence > 750) {
  console.log("less");
} else {
  console.log("less than 2000");
}
