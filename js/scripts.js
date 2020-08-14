var flavor, price
   function getFlavors(){
      if(document.getElementById("hawaiian").checked===true){
         flavor="Hawaiian"
         price=800
      }else if(document.getElementById("boerewors").checked===true){
         flavor="Boerewors"
         price=750
      }else if(document.getElementById("bbq").checked===true){
         flavor="BBQ"
         price=800
      }else if(document.getElementById("peri-peri").checked===true){
         flavor="Peri-Peri"
         price=1000
      }else if(document.getElementById("chickentikka").checked===true){
         flavor="ChickenTikka"
         price=1100
      }else if(document.getElementById("vegtikka").checked===true){
         flavor="VegetableTikka"
         price=1200
      }
   }
   var crust=function(){
      if(document.getElementsByName("crust1").checked===true){
         crust="Crispy"
      }else if(document.getElementsByName("crust2").checked===true){
         crust="Stuffed"
      }else if(document.getElementsByName("crust3").checked===true){
         crust="GlutenFree"
      }
   }
  var size=function(){
      if(document.getElementsByName("size1").checked===true){
         size="Small"
      }else if(document.getElementsByName("size2").checked===true){
         size="Medium"
      }else if(document.getElementsByName("size3").checked===true){
         size="Large"
      }
   }
function calculateTotal(){
 var Flavour=getFlavors()
 alert("You have ordered"+" "+ flavor)
alert("Your total is"+ price) 
}
function delivery(){
   prompt("Enter your current location")
   alert("Your order will be delivered to your current location")
}



