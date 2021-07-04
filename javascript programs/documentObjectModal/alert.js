function checkSlot() {
    var ag=document.querySelector("#age").value
    if(ag<18){
        result.innerHtml=`<p style=color:red>Eligible</p>`
    }
    else{
        result.innerHtml=`<p style=color:green>Eligible</p>`
    }
}