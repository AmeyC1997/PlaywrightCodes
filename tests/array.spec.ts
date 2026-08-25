let num =[1,2,3,4,5,6];

console.log(num);

for(let number of num)
{
   console.log(number); 
}

console.log('=============');
let arrayofArray =[[1,2,3],[4,5,6],[7,8,9],[10,11,12]];

for(let number1 of arrayofArray)
{
   console.log(number1[0]); 
   console.log(number1[1]); 
   console.log(number1[2]); 
   console.log(number1[3]); 
}

console.log('=============');
for(let [number1,num2,num3] of arrayofArray)
{
   console.log(number1,num2,num3); 

}

console.log('======JSON Product   =======');
let product ={
  productname: 'Sauce Labs Backpack',
  price :'$29.99'
}
let {productname,price} =product;

console.log(productname);
console.log(price);

console.log('======JSON Credentials  =======');


let credentials ={
    userN :'standard_user',
    password:'secret_sauce',
    url :'https://www.saucedemo.com/'
}
let {userN,password,url} =credentials;

console.log(userN);
console.log(url);



//Array of JSON
let products = [
  {
    productname: 'Sauce Labs Backpack',
    price: '$29.99'
  }, // <-- Added missing comma
  {
    productname: 'Sauce Labs Bike Light',
    price: '$9.99'
  },
  {
    productname: 'Sauce Labs Bike Light',
    price: '$9.99'
  },
  {
    productname: 'Sauce Labs Bolt T-Shirt',
    price: '$15.99'
  }, // <-- Added missing comma
  {
    productname: 'Sauce Labs Fleece Jacket',
    price: '$49.99'
  }
];

for (let pro of products)
{
   console.log(pro)
}

for(let {productname,price} of products){

  console.log(productname+" : " +price);

}