let a = 10;
let b = 20;

// update value
a = a + 30;
a = a - 5;
console.log(a); // 35

b = a;
console.log(b); // 35

a = -a; // -35 -> a = -1 * a
console.log(a);

b++; // b = b + 1
console.log(b);

++b; // b = b + 1
console.log(b);

b--; // b = b - 1
--b;
console.log(b) // 35

// b = b + 5
b += 5;

// b = b - 2
b -= 2;

// b = b * 4
b *= 4;

// b = b / 2
b /= 2;
console.log(b)

b %= 2;
console.log(b);

console.log(2**3);

