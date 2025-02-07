const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
const { firstName, lastName, age } = profile;
console.log(firstName, lastName, age);

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [,, thirdFood, fourthFood] = favorites;

console.log(thirdFood);
console.log(fourthFood);

let a = 1;
let b = 2;
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

[a, b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
