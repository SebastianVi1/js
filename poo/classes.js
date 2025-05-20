// -------------------------------------------------------
function Dog(name, age){
    let dog = Object.create(dogConstructor);
    dog.name = name;
    dog._age = age; // private property

    return dog;
}
//       How classes work

let dogConstructor =  {
    talk : function() {
        return 'guau'
    }
}
let dog = Dog('Sanson', 12);
console.log(dog.talk);
// ouput guau
// ---------------------------------------------------------

class Person {
    constructor(name) {
        this.name = name;
    }
    
    name() {
        console.log(this.name);
    }


}

const person = new Person('sebastian');
console.log(person.name);

