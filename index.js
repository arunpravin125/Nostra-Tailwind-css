// ad exit
let adBtn=document.getElementById("Ad-close")
let adflex=document.getElementById("Ad-flex")

adBtn.addEventListener("click",function(){
    adflex.style.display="none"
})
// menu bar
let menubar=document.getElementById("menuicon")
let phonenav=document.getElementById("phoneNav")
let phoneExit=document.getElementById("phoneNavBtn")

menubar.addEventListener("click",function(){
    phonenav.style.right="0"
})

phoneExit.addEventListener("click",function(){
    phonenav.style.right="-50%"
})
// new arrivals
let flexArrival=document.getElementById("new arrivalDetail")
let navArrival=document.getElementById("new arrival")

navArrival.addEventListener("click",function(){
    if(navArrival==flexArrival){
        
    }
})