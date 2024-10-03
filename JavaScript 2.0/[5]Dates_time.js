//it calculates in mili second and start form 1970
let myDate = new Date();
console.log(myDate); //it gives that type of output=>2024-08-26T16:31:30.865Z
console.log(myDate.toString()); //output=>Mon Aug 26 2024 09:32:44 GMT-0700 (Yukon Time)
console.log(myDate.toDateString()); //output=>Mon Aug 26 2024
console.log(myDate.toLocaleString()); //=>26/8/2024, 9:35:21 am
console.log(myDate.toLocaleDateString()); //=>26/8/2024
console.log(typeof myDate); //=>object

const mycreateddate = new Date(2024, 0, 26);
console.log(mycreateddate);
