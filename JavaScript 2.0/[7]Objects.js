//constructor pasun object banala tar Singleton hotay nahitar other kashyat hot nahi
//this is the method to create object from constrouctor ="object.create"( and in this method literals are created)

//object literals
const jsuser = {
  name: "raj",
  "full name": "raj kamlakar",
  age: 20,
  email: "raj@gmail.com",
  day: ["mon", "sun"],
};

console.log(jsuser["full name"]);
console.log(jsuser.email);
console.log(jsuser["email"]);
// part2------------------------------------------------------------------//
const tinderuser = {};

tinderuser.id = "123abc";
tinderuser.name = "raj";
tinderuser.isloggedin = false;

console.log(tinderuser);
console.log(Object.keys(tinderuser)); //=>[ 'id', 'name', 'isloggedin' ]
console.log(Object.values(tinderuser)); //=>[ '123abc', 'raj', false ]
console.log(Object.entries(tinderuser)); //=>[ [ 'id', '123abc' ], [ 'name', 'raj' ], [ 'isloggedin', false ] ]

//merge objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

//const obj3={obj1,obj2}
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

//another best method spred operator
const obj4 = { ...obj1, ...obj2 };
console.log(obj4);
