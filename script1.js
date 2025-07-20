var search = document.getElementById("search")
var prodcutlist1 = document.querySelectorAll(".productlist1")
var prodcutlist2 = document.querySelectorAll(".productlist2")




search.addEventListener("keyup",function(){
   var value = event.target.value.toUpperCase()
   for(count=0;count<prodcutlist1.length;count=count+1){
     if(prodcutlist1[count].textContent.toUpperCase().includes(value)){
        prodcutlist1[count].style.display="grid"
     }else{
        prodcutlist1[count].style.display="none"
     }
   }
})

search.addEventListener("keyup",function(){
   var value1 = event.target.value.toUpperCase()
   for(count=0;count<prodcutlist2.length;count=count+1){
     if(prodcutlist2[count].textContent.toUpperCase().includes(value1)){
        prodcutlist2[count].style.display="grid"
     }else{
        prodcutlist2[count].style.display="none"
     }
   }
})