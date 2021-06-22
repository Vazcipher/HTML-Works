var pattern="ABAB"

var dict={}

for(let char in pattern)
{
    if(!(char in dict)){
        dict[char]=1;
    }
    else{
        console.log(`First recursive charecter is ${char}`);
        break
    }
}
console.log(char);