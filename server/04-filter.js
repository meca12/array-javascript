// filtar con for 

const words = ['spray', 'limit', 'elite', 'exuberante']; 
const newArray = []; 
for (let index = 0; index < words.length; index++){
    const word = words[index];
    if (word.length > 6) {
        newArray.push(word)
           
       }
    
}

//filtrando con  filter 

const words2 = ['spray', 'limit', 'elite', 'exuberante'];
const result2 = words2.filter(word => word.length > 6);

//filter ejemplo de un search 

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const rta = orders.filter(item => item.delivered && item.total >= 100); 
console.log('rta', rta); 
const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

search('b');