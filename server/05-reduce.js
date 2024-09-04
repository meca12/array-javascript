const totals = [10, 32, 44, 160]; 

let sum = 0; 

for (let index = 0; index < totals.length; index++){
    const element = totals[index]; 
    sum = sum + element;
}

console.log(sum);

//usando reduce 

const rta = totals.reduce((sum, item) => 
    sum + item, 0
); 

console.log('rta', rta);