const person={
    name:'Chandra Nandan',
    age: 23,
    greet:()=>{
        console.log(' Hi,I am '+this.name); //Here this refere to global variable
        
    }
}

person.greet();


const person1={
    name:'Mrigank Nandan',
    age: 15,
    greet(){
        console.log(' Hi,I am '+this.name); //Here this refere to variable of that function
        
    }
}

person1.greet();