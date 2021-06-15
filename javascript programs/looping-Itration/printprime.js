
var low=21,high=40;

for(let num=low;num<=high;num++){
    let flag=0;
    for(j=2;j<num;j++){
        if(num%2==0){
            flag+=1;
            break;
        }
    }
    if(flag==0){
        console.log(num);
    }
}