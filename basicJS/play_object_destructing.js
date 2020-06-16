const person={
    name:'Chandra Nandan',
    age: 23,
    greet(){
        console.log(' Hi,I am '+this.name); //Here this refere to global variable
        
    }
}


const printName = ({ name })=> {
    console.log(name);
    
}

printName(person);

const printName1 = ({ greet })=> {
    console.log(greet);
    
}

printName1(person)


// Object Destructing

const {name,age}=person;
console.log(name,age);



const hobbies=['Sports','Cooking']
const[hobby1,hobby2]=hobbies;
console.log(hobby1,hobby2);

