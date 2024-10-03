let a = 1;
let b = 5;
let c = 6;

// x => -2 atau -3

const x_one = (-b + (Math.sqrt(b**2 - (4*a*c)))) / (2*a);
const x_two = (-b - (Math.sqrt(b**2 - (4*a*c)))) / (2*a);

console.log(x_one, x_two);