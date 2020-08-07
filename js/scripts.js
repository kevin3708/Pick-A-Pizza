var flavor
if(document.getElementById("hawaiian").is(":checked")){
    flavor="Hawaiian"
}else if(document.getElementById("boerewors").is(":checked")){
    flavor="Boerewors"
}else if(document.getElementById("bbq").is(":checked")){
    flavor="BBQ"
}else if(document.getElementById("peri-peri").is(":checked")){
    flavor="PeriPeri"
}else if(document.getElementById("chickentikka").is(":checked")){
    flavor="ChickenTikka"
}else if(document.getElementById("vegtikka").is(":checked")){
    flavor="VegTikka"
}
var pizza=flavor
console.log(pizza)


var crispy, stuffed, glutenFree
var crust=function getInput(){
    crispy=document.getElementsByName("crust1").checked
    stuffed=document.getElementsByName("crust2").checked
    glutenFree=document.getElementsByName("crust3").checked
}
var small, medium, large
function getInput(){
    small=document.getElementsByName("size1").checked
    medium=document.getElementsByName("size2").checked
    large=document.getElementsByName("size3").checked
}


