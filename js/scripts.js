var flavor1, flavor2, flavor3, flavor4, flavor5, flavor6 
function getInput(){
    flavor1=(document.getElementsById("flavour1").value)
    flavor2=(document.getElementsById("flavour2").value)
    flavor3=(document.getElementsById("flavour3").value)
    flavor4=(document.getElementsById("flavour4").value)
    flavor5=(document.getElementsById("flavour5").value)
    flavor6=(document.getElementsById("flavour6").value)
}
console.log(flavor1)
var crispy, stuffed, glutenFree
function getInput(){
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


//function Totals(crust, size){
  //  this.crust=document.getElementsByClassName("crustCheckbox")
    //this.size=document.getElementsByClassName("sizeCheckbox")
//}
//if ($('#check_id').is(":checked"))


