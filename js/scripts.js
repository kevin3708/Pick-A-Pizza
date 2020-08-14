var flavor
   function getFlavors(){
      if(document.getElementById("hawaiian").checked===true){
         flavor="Hawaiian"
      }else if(document.getElementById("boerewors").checked===true){
         flavor="Boerewors"
      }else if(document.getElementById("bbq").checked===true){
         flavor="BBQ"
      }else if(document.getElementById("peri-peri").checked===true){
         flavor="Peri"
      }else if(document.getElementById("chickentikka").checked===true){
         flavor="Chicken"
      }else if(document.getElementById("vegtikka").checked===true){
         flavor="Vegetable"
      }
      console.log(flavor)
      return (flavor)
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
   if(document.getElementById("hawaiian").checked===true){
     alert("Total=800")
   }else if(document.getElementById("boerewors").checked===true){
      alert("Total=700")
   }else if(document.getElementById("bbq").checked===true){
      alert("Total=800")
   }else if(document.getElementById("peri-peri").checked===true){
      alert("Total=1000")
   }else if(document.getElementById("chickentikka").checked===true){
      alert("Total=800")
   }else if(document.getElementById("vegtikka").checked===true){
      alert("Total=900")
   }
}
function delivery(){
   prompt("Enter your current location")
   alert("Your order will be delivered to your current location")
}


