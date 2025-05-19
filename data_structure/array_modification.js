let array = [
    "string",
    100,
    ['embed', 200],
    'hello world',

]

let fruits = [
    'apple',
    'orange',
    'mango',
    'watermelon',
]

console.log(array);
array.push('newElement'); //add a value at the end of the array
array.string = 'newString'; //modify the string in the array
console.log('array length ' + array.length); // length of the array
console.log(array);

array.pop(); // delete the last element
array.unshift('1'); //add value on first position
console.log(array);
array.shift(); // delete the first element in the array
array.indexOf(100); // get the index of the element in the array

//get a slice of the array 
let vegetables = ["Repollo", "Nabo", "Rábano", "Zanahoria"];
console.log(vegetables);
let elementosEliminados = vegetables.splice(1, 2);
// ["Nabo", "Rabano"]