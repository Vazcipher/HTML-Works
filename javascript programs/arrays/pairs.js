var arr=[1,2,3,4]

var element=6;

for(let num1 of arr){
    for(let num2 of arr){
      
        let total=num1+num2;
        if(total==element & num1!=num2){
            console.log(`paris are:${num1},${num2}`);
            break;
        }


    }
}