var leftArrow=document.querySelectorAll('.arrowLeft');
var rightArrow=document.querySelectorAll('.arrowRight');

leftArrow[0].addEventListener("click", turnLeft);
leftArrow[1].addEventListener("click", turnLeft);
rightArrow[0].addEventListener("click", turnRight);
rightArrow[1].addEventListener("click", turnRight);
var textSliderList=document.querySelectorAll('.textSlider');
var slidersText= Array.from(textSliderList);
var backgroundImage=document.querySelector('.pictureHeader');

var sliderCounter=0;
console.log(slidersText);

function turnLeft(){
    if(sliderCounter==0){
       return;}
    slidersText[sliderCounter].classList.add('notDisplayed');
    sliderCounter--;
    slidersText[sliderCounter].classList.remove('notDisplayed');
    if(window.innerWidth<600){

        if(sliderCounter==0){
            backgroundImage.setAttribute('style', 'background-image: url(images/mobile-image-hero-1.jpg');
        }
        if(sliderCounter==1){
            backgroundImage.setAttribute('style', 'background-image: url(images/mobile-image-hero-2.jpg');
        }
        if(sliderCounter==2){
            backgroundImage.setAttribute('style', 'background-image: url(images/mobile-image-hero-3.jpg');
        }
    }
    
    else {

        if(sliderCounter==0){
            backgroundImage.setAttribute('style', 'background-image: url(images/desktop-image-hero-1.jpg');
        }
        if(sliderCounter==1){
            backgroundImage.setAttribute('style', 'background-image: url(images/desktop-image-hero-2.jpg');
        }
        if(sliderCounter==2){
            backgroundImage.setAttribute('style', 'background-image: url(images/desktop-image-hero-3.jpg');
        }  
    }
}


function turnRight(){
    if(sliderCounter==2){
        return;}
        slidersText[sliderCounter].classList.add('notDisplayed');
        sliderCounter++;
        slidersText[sliderCounter].classList.remove('notDisplayed');


        if(window.innerWidth<600){

            if(sliderCounter==0){
                backgroundImage.setAttribute('style', 'background-image: url(images/mobile-image-hero-1.jpg');
            }
            if(sliderCounter==1){
                backgroundImage.setAttribute('style', 'background-image: url(images/mobile-image-hero-2.jpg');
            }
            if(sliderCounter==2){
                backgroundImage.setAttribute('style', 'background-image: url(images/mobile-image-hero-3.jpg');
            }
        }
        
        else {

            if(sliderCounter==0){
                backgroundImage.setAttribute('style', 'background-image: url(images/desktop-image-hero-1.jpg');
            }
            if(sliderCounter==1){
                backgroundImage.setAttribute('style', 'background-image: url(images/desktop-image-hero-2.jpg');
            }
            if(sliderCounter==2){
                backgroundImage.setAttribute('style', 'background-image: url(images/desktop-image-hero-3.jpg');
            }  
        
        }
}
