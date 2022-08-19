/*------------Mobile navigation slide function---------------*/

var isactivated=false;
var menu=document.getElementById('menu');
var background=document.getElementById('blackbackground');
var hamburgerimage=document.getElementById('hamburger');
var ximage=document.getElementById('thex');


function activateslider(){
    if (isactivated==false){
        menu.style.transform='translateX(0)';
        background.style.display="block";
        background.style.filter="opacity(0.75)";
        hamburgerimage.style.display="none";
        ximage.style.display="block";
        isactivated=true;
       
    }
    else
        {menu.style.transform='translateX(50em)'; 
        background.style.filter="opacity(0)";
        hamburgerimage.style.display="block";
        ximage.style.display="none";
         isactivated=false;}
        

}

/*-----------------------------------------------------------------*/
/*--------------Mobile navigation linklist and picture control-----*/
/*-----------------------------------------------------------------*/
var features=document.getElementById('lw1');
var featuresactive=false;

var arrowup1=document.getElementById('arrowup1');
var arrowdown1=document.getElementById('arrowdown1');

function activatefeatures(){

    if (featuresactive==false)
        {features.style.display="block";
        featuresactive=true;
        arrowup1.style.display="inline-block";
        arrowdown1.style.display="none";}
    else{
        features.style.display="none";
        featuresactive=false;
        arrowup1.style.display="none";
        arrowdown1.style.display="inline-block";}
}

var company=document.getElementById('lw2');
var companyactive=false;

var arrowup2=document.getElementById('arrowup2');
var arrowdown2=document.getElementById('arrowdown2');

function activatecompany(){
    if (companyactive==false)
        {company.style.display="block";
        companyactive=true;
        arrowup2.style.display="inline-block";
        arrowdown2.style.display="none";}
    else{
        company.style.display="none";
        companyactive=false;
        arrowup2.style.display="none";
        arrowdown2.style.display="inline-block";}
}


/*Close Slider on resize and emliminating the bug: having used slider once and resize to desktop */

function closeslider(){
    var width= window.outerWidth;

    if(isactivated==true &&width<760)
        {menu.style.transform='translateX(50em)'; 
        background.style.filter="opacity(0)";
        hamburgerimage.style.display="block";
        ximage.style.display="none";
         isactivated=false;}

    if(width<760)
        {hamburgerimage.style.display="block";
    }

    if(width<760 && isactivated==false)

    {menu.style.transform='translateX(50em)';}
         
    if(width>760){
        background.style.display="none";
        hamburgerimage.style.display="none";
        menu.style.transform='translateX(0)';
    }     

}


/*makes a line break on the h1 if possible, looks better*/


function checkbrake(){
    var h1=document.getElementById('heading').innerHTML;
    
    var width=window.outerWidth;
    if(width>1050)
    {document.getElementById('heading').innerHTML="Make <br> remote work";}
    if(width<1050)
    {document.getElementById('heading').innerHTML="Make remote work";}


}