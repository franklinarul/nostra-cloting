var img = document.querySelectorAll(".productimg")
var clickblack = document.getElementById("clickblack")
var clickgreen = document.getElementById("clickgreen")
var clickred = document.getElementById("clickred")
var clickwhite = document.getElementById("clickwhite")
var imgdiv1 = document.getElementById("img1")
var imgdiv2 = document.getElementById("img2")
var imgdiv3 = document.getElementById("img3")
var imgdiv4 = document.getElementById("img4")

// product image variation 1 ...............................................................//

clickblack.addEventListener("click",function(){
     img[0].remove()
     imgdiv1.innerHTML='<img class="productimg" src="./image/product-2.jpg" alt="">';

})
clickgreen.addEventListener("click",function(){
     img[0].remove()
     imgdiv1.innerHTML='<img class="productimg" src="./image/product-1.jpg" alt="">';

})
clickred.addEventListener("click",function(){
     img[0].remove()
     imgdiv1.innerHTML='<img class="productimg" src="./image/product-3.jpg" alt="">';

})
clickwhite.addEventListener("click",function(){
     img[0].remove()
     imgdiv1.innerHTML='<img class="productimg" src="./image/product-4.jpg" alt="">';

})

// product image-variation 2 ..................................................................//
var clickblack1 = document.getElementById("clickblack1")
var clickgreen1 = document.getElementById("clickgreen1")
var clickred1 = document.getElementById("clickred1")
var clickwhite1 = document.getElementById("clickwhite1")

clickblack1.addEventListener("click",function(){
     img[1].remove()
     imgdiv2.innerHTML='<img class="productimg" src="./image/product2-2.jpg" alt="">';

})
clickgreen1.addEventListener("click",function(){
     img[1].remove()
     imgdiv2.innerHTML='<img class="productimg" src="./image/peoduct2-1.jpg" alt="">';

})
clickred1.addEventListener("click",function(){
     img[1].remove()
     imgdiv2.innerHTML='<img class="productimg" src="./image/product2-3.jpg" alt="">';

})

// product image-variation3...................................................................//

var clickblack2 = document.getElementById("clickblack2")
var clickgreen2 = document.getElementById("clickgreen2")
var clickred2 = document.getElementById("clickred2")
var clickwhite2 = document.getElementById("clickwhite2")

clickblack2.addEventListener("click",function(){
     img[2].remove()
     imgdiv3.innerHTML='<img class="productimg" src="./image/product3-1.jpg" alt="">';

})
clickgreen2.addEventListener("click",function(){
     img[2].remove()
     imgdiv3.innerHTML='<img class="productimg" src="./image/prodcut3-2.jpg" alt="">';

})
clickred2.addEventListener("click",function(){
     img[2].remove()
     imgdiv3.innerHTML='<img class="productimg" src="./image/prodcut3-3.jpg" alt="">';

})
clickwhite2.addEventListener("click",function(){
     img[2].remove()
     imgdiv3.innerHTML='<img class="productimg" src="./image/product3-4.jpg" alt="">';

})

// product image variation 4...................................................................//
var clickblack3 = document.getElementById("clickblack3")
var clickgreen3 = document.getElementById("clickgreen3")
var clickred3 = document.getElementById("clickred3")
var clickwhite3 = document.getElementById("clickwhite3")


clickblack3.addEventListener("click",function(){
     img[3].remove()
     imgdiv4.innerHTML='<img class="productimg" src="./image/product-2.jpg" alt="">';

})
clickgreen3.addEventListener("click",function(){
     img[3].remove()
     imgdiv4.innerHTML='<img class="productimg" src="./image/product-1.jpg" alt="">';

})
clickred3.addEventListener("click",function(){
     img[3].remove()
     imgdiv4.innerHTML='<img class="productimg" src="./image/product-3.jpg" alt="">';

})
clickwhite3.addEventListener("click",function(){
     img[3].remove()
     imgdiv4.innerHTML='<img class="productimg" src="./image/product-4.jpg" alt="">';

})