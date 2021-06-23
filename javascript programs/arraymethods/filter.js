// var arr=[2,3,1,5,6,8]

// var even=arr.filter(num=>num%2==0)
// console.log(even);

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

// var below_fifty=products.filter(item=>item.mrp<50)
// console.log(below_fifty);

//print 30-50 product
//print out of stock products

var range_products=products.filter(item=>item.mrp>=30&item.mrp<=50)
console.log(range_products);



var out_of_stock=products.filter(item=>item.aval_qty==0)
ouOfStock=console.log(out_of_stock);