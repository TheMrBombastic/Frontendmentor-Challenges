/*------------Mobile navigation slide function---------------*/

var isActivated=false;
var menu=document.getElementById('menu');
var background=document.getElementById('blackbackground');
var hamburgerimage=document.getElementById('hamburger');
var ximage=document.getElementById('thex');


    /* in html
    hamburgerimage.addEventListener("onclick", activateslider());
    ximage.addEventListener("onclick", activateslider());*/

function activateslider(){
    if (isActivated==false){
        menu.style.zIndex="10";
        background.style.zIndex="3";
        menu.style.filter="opacity(1)";
        background.style.filter="opacity(0.75)";
        hamburgerimage.style.display="none";
        ximage.style.display="block";
        isActivated=true;}

    else{ 
        
        menu.style.filter="opacity(0)";
        background.style.filter="opacity(0)";
        /*braucht noch eine warten funtion, nach hinten setzen und Beginn der animation ist gleichzeitig*/
        menu.style.zIndex="-3";
        background.style.zIndex="-10";
        hamburgerimage.style.display="block";
        ximage.style.display="none";
        isActivated=false;
    }
        

}



