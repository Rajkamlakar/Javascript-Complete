const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
arr.push(86);
arr.push(54);
arr.pop();
console.log(arr);
arr.unshift(1, 9); //it add the elements in the starting of the arrays
console.log(arr);
//slice operation tevadhych point madhlya element badhalya part la ghetoy
//splice operation tevadha part delete karato ani bakicha part print karato

let marvel = ["thor", "ironman"];
let dc = ["superman", "batman"];
marvel.push(dc);
console.log(marvel); //=>[ 'thor', 'ironman', [ 'superman', 'batman' ] ]
marvel.concat(dc);
console.log(marvel); //=>[ 'thor', 'ironman', [ 'superman', 'batman' ] ]
const allhero = marvel.concat(dc);
console.log(allhero); //=>[ 'thor', 'ironman', [ 'superman', 'batman' ], 'superman', 'batman' ]
