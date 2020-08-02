var hawaiian, boerewors, bbq, periPeri, chickenTikka, vegTikka
function getInput(){
    hawaiian=document.getElementById("hawaiian").checked
    boerewors=document.getElementById("boerewors").checked
    bbq=document.getElementById("bbq").checked
    periPeri=document.getElementById("peri-peri").checked
    chickenTikka=document.getElementById("chicken-tikka").checked
    vegTikka=document.getElementById("veg-tikka").checked
}
function Totals(crust, size){
    this.crust=document.getElementsByClassName("crustCheckbox")
    this.size=document.getElementsByClassName("sizeCheckbox")
}
console.log(Totals)


