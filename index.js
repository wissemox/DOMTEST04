


let d = "color mawjdo"


let addd =   document.querySelectorAll(".add")
let delll = document.querySelectorAll(".del")
let mop = document.querySelectorAll(".product0 input")


//remve 
let delet =document.querySelectorAll(".product0 ion-icon ")

for(let i =0 ; i<delet.length ; i++) { 
  delet[i].addEventListener("click",function(){ 
    delet[i].parentElement.remove()
  })
} 
//img color 
let colorr =  document.querySelectorAll(".omg")
for(let i=0 ; i<colorr.length ; i++) { 
  
  colorr[i].addEventListener("click",function(){
    if(d=="color mawjdo") { 
      colorr[i].style.filter="grayscale(0%)" 
      d="colormoch"
    } else if(d=="colormoch") { 
      colorr[i].style.filter="grayscale(100%)" 
      d="color mawjdo"
    }
  })
}

for (let i = 0; i < addd.length; i++) {
  addd[i].addEventListener('click', function () {
    addd[i].nextElementSibling.innerText++;
    total()
  });
}

for (let i = 0; i < delll.length; i++) {
  delll[i].addEventListener('click', function () {
    if(delll[i].previousElementSibling.innerText>0){
      delll[i].previousElementSibling.innerText--; 
      total()
    }
    
    
  });
} 

function total() {
  // total chaque elem
  let productQuantityTotal = document.getElementsByClassName('morgd');
  // qté
  let productQuantity = document.querySelectorAll('.moh');
  // prix
  let productPrice = document.querySelectorAll('.morg');
  // total
  let totalprice = document.getElementById('wisse');
  // sum
  let sum = 0; 

   for (let i = 0; i < productQuantity.length; i++) {
    productQuantityTotal[i].innerText =   productQuantity[i].innerText * productPrice[i].innerText;
    sum += parseInt(productQuantityTotal[i].innerText);
  }  
  return (totalprice.innerText = sum);
}