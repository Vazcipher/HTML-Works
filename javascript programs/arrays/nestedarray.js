
var employees=[
                [100,"ram",20000,"developer"],
                [101,"ravi",22000,"developer"],
                [102,"raju",25000,"qa"],
                [103,"nithin",22000,"qa"]

        ]

// for(let emp of employees){
//     console.log(emp[1]);
    
// }


// for(let emp of employees){
//     if(emp[3]=="developer"){
//         console.log(emp);
//     }
// }


for(emp of employees){
    if(emp[2]>210000){
        console.log(emp);
    }
    
}


var products=[
    [100,"ricepowder",30,10],
    [101,"oreo",35,100],
    [102,"darkfantacy",40,50],
    [103,"fifty",20,5],
    [104,"horlicks",200,5],
    [105,"complan",190,0],
    [106,"boost",250,10]
]
// prnt no of products in this shop
// print no of items in this stock
// print costly product
// print low cost product
//is there any item available under rs 10
//print detail of boost