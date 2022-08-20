/*------------Mobile navigation slide function---------------*/

var isactivated=false;
var menu=document.getElementById('menu');
var background=document.getElementById('blackbackground');
var hamburgerimage=document.getElementById('hamburger');
var ximage=document.getElementById('thex');

    /*is in html
    hamburgerimage.addEventListener("onclick", activateslider());
    ximage.addEventListener("onclick", activateslider());*/

function activateslider(){
    if (isactivated==false){
        menu.style.display="block";
        background.style.display="block";
        background.style.filter="opacity(0.75)";
        hamburgerimage.style.display="none";
        ximage.style.display="block";
        isactivated=true;}

    else
        {menu.style.display="none"; 
        background.style.filter="opacity(0)";
        hamburgerimage.style.display="block";
        ximage.style.display="none";
        isactivated=false;
    }
        

}



