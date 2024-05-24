currentslideId=1;
sliderelement=document.getElementById("slider")
totalslides=sliderelement.childElementCount
console.log(totalslides)
function next(){
    if(currentslideId<totalslides){
        currentslideId++;
        showslide()
    }
}
function previous(){
    if(currentslideId>1){
        currentslideId--;
        showslide()
    }
    
}

function showslide(){
    slides =document.getElementById('slider').getElementsByTagName('li')
    for(let index=0;index<totalslides;index++){
        const element=slides[index]
        if(currentslideId===index+1){
            element.classList.remove("hidden")
        }
        else{
            element.classList.add("hidden")
        }
    }
        
}