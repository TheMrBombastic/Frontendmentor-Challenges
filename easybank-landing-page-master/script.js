const hamburger=document.getElementById('hamburger');
const menu=document.querySelector('.menu');
const background=document.querySelector('.menuBackground');
const body= document.querySelector('body');
background.style.display="none";
menu.style.display="none";
hamburger.addEventListener("click", toggleMenu);


function toggleMenu(){
    if(menu.style.display==="none")
    {menu.style.display="block";
    hamburger.setAttribute("src", "images/icon-close.svg");
    background.style.display="block";
    body.style.overflow="hidden";
    
    return;}
    if(menu.style.display==="block")
    {menu.style.display="none";
    hamburger.setAttribute("src", "images/icon-hamburger.svg");
    background.style.display="none";
    body.style.overflow="unset";}
    }
