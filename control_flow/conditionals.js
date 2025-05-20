// if (condition) {block} else {block}

let a = 10;
let b = 100;

if (a > b){
    console.log("a is bigger");
} else if (a == b) {
    console.log('same number');
}else {
    console.log('a is minor');
}

// conditional simplified

//if (condition) code to execute if condition is (true) else  execute this

if (a  < b ) console.log("a is minor"); else console.log('hello');

//Switch case 

const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
