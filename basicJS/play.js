var name = 'Chandra Nandan';
var age = 29;
var hasHobbies = true;

age=30;

const summarizeUser = (userName,userAge,userHasHobby) => {
    return (
        `Name is ${userName}, age is ${userAge} and the user has hobbies: ${userHasHobby}`
    );
}


console.log(summarizeUser(name,age,hasHobbies));

const add =(a,b) => a+b; // one one  statement

console.log(add(1,2));


const addRandom =()=> 2+4;

console.log(addRandom());


