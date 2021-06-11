var num1=10,num2=80,num3=50;

if(num1>num2 & num1>num3){
    console.log(`largest is ${num1}`);
}
else if(num2>num1 & num2>num3){
    console.log(`${num2} is largest}`);
}
else if(num3>num1 & num3>num2){
    console.log(`${num3} is largest`);
}
else if(num1===num2 & num1===num3){
    console.log("equal");
}

//second largest number
//sort accenting or decenting
//read age=num, health_issue=true / false
//age>65 is eligble
//age 18-65 and helth issue elligible for vaccination
//else not eligible