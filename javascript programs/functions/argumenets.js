function sum(...args){
    let res=0;
    for(num of args){
        res=res+num;
    }
    return res;
}

console.log(sum(10,30,29));