var num1=0, num2=1,sum=0;


while(i<21){
    sum=num1+num2;
    num1=num2;
    num2=sum;
    console.log(sum);
}