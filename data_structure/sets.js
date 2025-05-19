const set  = new Set();

set.add(1);
set.add(2); // Add values
const o = {a: 1, b: 2};
set.add(o);
console.log(set);

console.log(set.has(2)); // returns a true if the value is in the set

console.log(set.set);

