const array = [1, 2, 3, 4, 5, 6]; 

// for  tradicional 

for(let i = 0; i < array.length; i++){
    const element = array[i]; 
    console.log("for",element);
    
}

//con metodo  foreach 

array.forEach(item => { console.log("foreach",item) });