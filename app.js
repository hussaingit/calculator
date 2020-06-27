function getnumber(num){
    
    var result = document.getElementById("rslt")
    result.value += num

}
function clrResult(){
    var result = document.getElementById("rslt")
    result.value = ""
}

function calculation(){
    var result = document.getElementById("rslt")
    result.value = eval(result.value)
}