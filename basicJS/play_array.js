const hobbies=['Sports','Cooking'];

// for(let hobby of hobbies){
//     console.log(hobby);
    
// }

// console.log(hobbies.map(hobby => 'Hobby:' +hobby)); // new array and takes function

// console.log(hobbies.map(hobby => {
//     return 'Naive: ' + hobby;
// }));


const copiedArray =hobbies.slice();
console.log(copiedArray);

const copiedArray1 = [hobbies];
console.log(copiedArray1);

const  copiedArray2=[...hobbies];
console.log(copiedArray2)


const person={
    name:'Chandra Nandan',
    age: 23,
    greet() {
        console.log(' Hi,I am '+this.name); //Here this refere to global variable
        
    }
}

// Note the {} here for object
const person1={...person};
console.log(person1);




// Note the REST Operator

const toArray =(...args)=> {
    return args;
}

console.log(toArray(1,2,3,4));


