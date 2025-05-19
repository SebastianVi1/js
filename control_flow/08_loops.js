// For loop

let string = "";

for (let i=0; 10; i++){
    string += i.toString;
}
console.log(string);
// output: [0,1,2,3,4,5,6,7,8,9]


let obj = {
    'name': 'sebastian',
    'age' : 20,

}

for (property in obj) {
    console.log(property, obj[property]); // name sebastian...
}

// For in (iterates on the property of an array)
let array = [1,2,3,4,5];
for (const number in array) {
    console.log(number);

} //print every number

//For each

array.forEach((number, index, array) => console.log(number)); //easy way to iterate an array

// do while 
let counter = 0;

do {
    console.log('hello');

} while (counter < 10) {
    if (couter === 5) {
        console.log('Hello world');
    }
    counter++;

}
// while loop 

let counter2 = 0;
while(counter2 < 10) {
    console.log(counter2);
    counter2++;
} // print numbers from 0 to 9