
const letters = ["a", "b", "c", "d", "f", "g"]; 
const newArray = [];

for (let i = 0; i < letters.length; i++){
    const elements = letters[i]; 

 newArray.push(elements,"h")
  
    
}


console.log("new array", newArray); 
console.log("old array ", letters);

//con map
const newLetters = letters.map(item => item +',' + "h");
console.log("with map", newLetters); 

const numbers = [2, 4, 5, 6, 8]; 

const newNumber = numbers.map(item => item * 2); 
console.log("new number", newNumber)

const pepole = [
    
    {
        id: 1,
        name: "james",
        age: 33,
        city: "London"

    },
    {
        id: 2,
        name: "alejandra",
        age: 23,
        city: "Mexico"
    },
    {
        id: 3,
        name: "paulo",
        age: 30,
        city: "barzil"
    }
]; 

pepole.map((user) =>{
    console.log(user.name, user.city, user.age);
})