// var arr=[3,4,2,5,4]

// var total=arr.reduce((num1,num2)=>num1+num2)
// console.log(total);

// var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
// console.log(max);

// var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
// console.log(min);

var products=[
    {code:1000,name:"garlic",mrp:120,aval_qty:10},
    {code:1001,name:"chilly",mrp:80,aval_qty:5},
    {code:1002,name:"tomatto",mrp:35,aval_qty:20},
    {code:1003,name:"onion",mrp:40,aval_qty:37},
    {code:1004,name:"potatto",mrp:45,aval_qty:40},
    {code:1005,name:"banana",mrp:55,aval_qty:60},
    {code:1006,name:"brinjal",mrp:43,aval_qty:2},
    {code:1007,name:"beetroot",mrp:38,aval_qty:5},
    {code:1008,name:"carrot",mrp:60,aval_qty:0},
    {code:1009,name:"bittergod",mrp:50,aval_qty:5},
]

var costly_product=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item1:item2)
console.log(costly_product);

var low_cost=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item2:item1)
console.log(low_cost);