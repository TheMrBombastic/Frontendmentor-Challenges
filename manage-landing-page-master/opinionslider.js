let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;


const sliderbox = document.getElementById('opinionbox');
sliderbox.addEventListener("touchstart", touchstart);
sliderbox.addEventListener("touchend", touchend);

function touchstart(event){

    touchstartX=event.touches[0].screenX;
    touchstartY=event.touches[0].screenY;
 
    console.log('touchstart is:', touchstartX, touchstartY);
}

function touchend(event){

    touchendX=event.changedTouches[0].screenX;
    touchendY=event.changedTouches[0].screenY;
 
    console.log('touchend is:', touchendX , touchendY);

    setnewslider();
}



let slidercounter=1;

function setnewslider(){  
    var displayslider=document.getElementById('opinion'+slidercounter);
    displayslider.style.display="none";
    var displaycircle=document.getElementById('sb'+slidercounter);
    displaycircle.style.backgroundColor="white";
    const deltaX=touchstartX-touchendX;
    if(deltaX<-50){
        console.log('right swiped');
        slidercounter++;}
       
    if(deltaX>50){
        console.log('left swiped');
        slidercounter--;}
        
    if(slidercounter==0){
        slidercounter=4;}

    if(slidercounter==5){
        slidercounter=1;} 
      console.log(slidercounter);

      
      var activeslider=document.getElementById('opinion'+slidercounter);
      activeslider.style.display="block";
      var activecircle=document.getElementById('sb'+slidercounter);
      activecircle.style.backgroundColor="var(--cl-brightred)";
      

    
}

