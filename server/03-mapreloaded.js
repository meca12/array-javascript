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


//parar agregar  un nuevo elemento al  objeto de array usaremos la forma del map reloaded, que evitara alteremos el, array original de datos 

const userOrders = orders.map((item) => 
  item.customerName
)

console.log(userOrders); 

/*supongamos que yo quiero agregar  un nuevo elemento a nuestro objeto, 
pero  al hacerlo dentro del map,  alteraria el array original de  datos 
recordemos que map es inmutable, para evitar esa alteración  tenemos que disponer 
de el map  reloaded  que  gerara   una  referencia en memoria del array de  datos 
y agregarle  el nuevo elemento sin alterar el original 
*/


const taxesUser = orders.map(order => {
  return {
    ...order,
    taxes: 0.19,
  }
})


console.log('agregando taxes', taxesUser); 