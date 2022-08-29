let displayNumber=document.querySelector('.number').innerHTML;
let savedNumber;
let arithmetic;
let buttonArray=document.querySelectorAll('button');


for (x=0;x<=17;x++)
    {buttonArray[x].addEventListener("click", buttonClicked);
    }

function buttonClicked(){


    if(this.classList[0]=='button7'){
        if(parseInt(displayNumber)>=Math.pow(10,12)){
            return;}

        displayNumber=displayNumber*10+7;
        document.querySelector('.number').innerHTML=displayNumber;
    }

    if(this.classList[0]=='button8'){
        if(parseInt(displayNumber)>=Math.pow(10,12)){
            return;}

        displayNumber=displayNumber*10+8;
        document.querySelector('.number').innerHTML=displayNumber;
    }

    if(this.classList[0]=='button9'){
        if(parseInt(displayNumber)>=Math.pow(10,12)){
            return;}

        displayNumber=displayNumber*10+9;
        document.querySelector('.number').innerHTML=displayNumber;
    }

    if(this.classList[0]=='button4'){
        if(parseInt(displayNumber)>=Math.pow(10,12)){
            return;}

        displayNumber=displayNumber*10+4;
        document.querySelector('.number').innerHTML=displayNumber;
    }

    if(this.classList[0]=='button5'){
        if(parseInt(displayNumber)>=Math.pow(10,12)){
            return;}

        displayNumber=displayNumber*10+5;
        document.querySelector('.number').innerHTML=displayNumber;
    }

    if(this.classList[0]=='button6'){
        if(parseInt(displayNumber)>=Math.pow(10,12)){
            return;}

        displayNumber=displayNumber*10+6;
        document.querySelector('.number').innerHTML=displayNumber;
    }

    if(this.classList[0]=='button1'){
        if(parseInt(displayNumber)>=Math.pow(10,12)){
            return;}

        displayNumber=displayNumber*10+1;
        document.querySelector('.number').innerHTML=displayNumber;
    }

    if(this.classList[0]=='button2'){
        if(parseInt(displayNumber)>=Math.pow(10,12)){
            return;}

        displayNumber=displayNumber*10+2;
        document.querySelector('.number').innerHTML=displayNumber;
    }

    if(this.classList[0]=='button3'){
        if(parseInt(displayNumber)>=Math.pow(10,12)){
            return;}

        displayNumber=displayNumber*10+3;
        document.querySelector('.number').innerHTML=displayNumber;
    }

    if(this.classList[0]=='button0'){
        if(parseInt(displayNumber)>=Math.pow(10,12)){
            return;}

        displayNumber=displayNumber*10;
        document.querySelector('.number').innerHTML=displayNumber;
    }

    if(this.classList[0]=='buttonDel'){
        let intDisplayNumber=parseInt(displayNumber);
        intDisplayNumber=intDisplayNumber/10;
        intDisplayNumber=Math.trunc(intDisplayNumber);
        displayNumber=intDisplayNumber.toString();
        document.querySelector('.number').innerHTML=displayNumber;
    }

    if(this.classList[0]=='buttonPlus'){
        let intDisplayNumber=parseInt(displayNumber);
        savedNumber=intDisplayNumber;
        document.querySelector('.number').innerHTML='0';
        displayNumber='0';
        arithmetic='plus';
    }

    if(this.classList[0]=='buttonMinus'){
        let intDisplayNumber=parseInt(displayNumber);
        savedNumber=intDisplayNumber;
        document.querySelector('.number').innerHTML='0';
        displayNumber='0';
        arithmetic='minus';
    }

    if(this.classList[0]=='buttonDivision'){
        let intDisplayNumber=parseInt(displayNumber);
        savedNumber=intDisplayNumber;
        document.querySelector('.number').innerHTML='0';
        displayNumber='0';
        arithmetic='division';
    }

    if(this.classList[0]=='buttonMultiplikation'){
        let intDisplayNumber=parseInt(displayNumber);
        savedNumber=intDisplayNumber;
        document.querySelector('.number').innerHTML='0';
        displayNumber='0';
        arithmetic='multiplikation';
    }

    
    if(this.classList[0]=='buttonEquals'){
        let intDisplayNumber=parseInt(displayNumber);
        
        if(arithmetic==='plus'){
            console.log('plus');
            intDisplayNumber=savedNumber+intDisplayNumber;
            displayNumber=intDisplayNumber.toString();
            document.querySelector('.number').innerHTML=displayNumber;
        }

        if(arithmetic==='minus'){
            intDisplayNumber=savedNumber-intDisplayNumber;
            displayNumber=intDisplayNumber.toString();
            document.querySelector('.number').innerHTML=displayNumber;
        }

        if(arithmetic==='division'){
            intDisplayNumber=savedNumber/intDisplayNumber;
            displayNumber=intDisplayNumber.toString();
            document.querySelector('.number').innerHTML=displayNumber;
        }

        if(arithmetic==='multiplikation'){
            intDisplayNumber=savedNumber*intDisplayNumber;
            displayNumber=intDisplayNumber.toString();
            document.querySelector('.number').innerHTML=displayNumber;
        }

        if(parseInt(displayNumber)>=Math.pow(10,12)){
            document.querySelector('.number').innerHTML='too long';
            savedNumber='0';
            displayNumber='0';
            arithmetic=null;}


    }
    
    if(this.classList[0]=='buttonReset'){
        savedNumber='0';
        displayNumber='0';
        document.querySelector('.number').innerHTML='0';
        arithmetic=null;
    }


}