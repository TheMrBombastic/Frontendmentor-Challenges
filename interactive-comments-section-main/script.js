
let jsonFile;
fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {console.log(json);
                    jsonFile=json;
                    builtPage(json);
                    }
    );


function builtPage(json){

    //for each comment
    json['comments'].forEach(element => {
        builtComment(element)
     });
    builtCommentBox();
    localStorage.clear();
    

}

//builds comments on pageload
function builtComment(element){
    
    let commentBox=document.createElement('div');
    document.querySelector('.wrapperMain').appendChild(commentBox);
    commentBox.classList.add('commentBox');
   
    //desktop counter
    let desktopCounter=document.createElement('div');
    commentBox.appendChild(desktopCounter);
    desktopCounter.classList.add('desktopCounter');

    let iconPlus=document.createElement('img');
    desktopCounter.appendChild(iconPlus);
    iconPlus.classList.add("iconPlus");
    iconPlus.setAttribute("src","images/icon-plus.svg");
    iconPlus.setAttribute("alt","plus" );

    let counterSpan=document.createElement('span');
    desktopCounter.appendChild(counterSpan);
    counterSpan.innerHTML=element.score;

    let iconMinus=document.createElement('img');
    desktopCounter.appendChild(iconMinus);
    iconMinus.classList.add('iconMinus');
    iconMinus.setAttribute("src","images/icon-minus.svg");
    iconMinus.setAttribute("alt","minus" );

    //right area

        //heading
    let rightArea=document.createElement('div');
    commentBox.appendChild(rightArea);
    rightArea.classList.add('rightArea');

    let heading=document.createElement('div');
    rightArea.appendChild(heading);
    heading.classList.add('heading');

    let leftSection=document.createElement('div');
    heading.appendChild(leftSection);
    leftSection.classList.add('left');

    let avatar=document.createElement('img');
    leftSection.appendChild(avatar);
    avatar.setAttribute("src", element.user.image.png);
    avatar.setAttribute("alt", element.user.username);

    let name=document.createElement('p');
    leftSection.appendChild(name);
    name.classList.add('name');
    name.innerHTML=element.user.username;

    if( jsonFile.currentUser.username===element.user.username){
        let you=document.createElement('p');
        leftSection.appendChild(you);
        you.innerHTML="you";
        you.classList.add('you');
  
        let date=document.createElement('p');
        leftSection.appendChild(date);
        date.classList.add('date');
        date.innerHTML=element.createdAt;

        let rightSection=document.createElement('div');
        heading.appendChild(rightSection);
        rightSection.classList.add('right');
        rightSection.classList.add('desktopReply');
        rightSection.setAttribute("data-displayedReplybox", false);

        let divDelete=document.createElement('div');
        rightSection.appendChild(divDelete);
        divDelete.addEventListener("click", deleteComment);

        let delIcon=document.createElement('img');
        divDelete.appendChild(delIcon);
        delIcon.setAttribute("src", "images/icon-delete.svg");

        let delText=document.createElement('p');
        divDelete.appendChild(delText);
        delText.innerHTML="Delete";
        delText.classList.add('replyRed');
        delText.classList.add('reply');

        let divEdit=document.createElement('div');
        rightSection.appendChild(divEdit);
        divEdit.addEventListener("click", editComment);
        divEdit.style.marginLeft="1.5em";

        let editIcon=document.createElement('img');
        divEdit.appendChild(editIcon);
        editIcon.setAttribute("src", "images/icon-edit.svg");

        let editText=document.createElement('p');
        divEdit.appendChild(editText);
        editText.innerHTML="Edit";
        editText.classList.add('reply');
    }

        else{
                let date=document.createElement('p');
                leftSection.appendChild(date);
                date.classList.add('date');
                date.innerHTML=element.createdAt;

                let rightSection=document.createElement('div');
                heading.appendChild(rightSection);
                rightSection.classList.add('right');
                rightSection.addEventListener("click", addTextArea);
                rightSection.setAttribute("data-displayedReplybox", false);

                let replyImage=document.createElement('img');
                rightSection.appendChild(replyImage);
                replyImage.classList.add('desktopReply');
                replyImage.setAttribute("src","images/icon-reply.svg");

                let replyText=document.createElement('p');
                rightSection.appendChild(replyText);
                replyText.classList.add('desktopReply', 'reply');
                replyText.innerHTML="Reply";
            }

            
    let commentText=document.createElement('p');
    rightArea.appendChild(commentText);
    commentText.innerHTML=element.content;

    //mobile section
    let mobileSection=document.createElement('div');
    rightArea.appendChild(mobileSection);
    mobileSection.classList.add('mobileSection');

    let mobileCounter=document.createElement('div');
    mobileSection.appendChild(mobileCounter);
    mobileCounter.classList.add('mobileCounter');

    let iconPlusMobile=document.createElement('img');
    mobileCounter.appendChild(iconPlusMobile);
    iconPlusMobile.classList.add("iconPlus");
    iconPlusMobile.setAttribute("src","images/icon-plus.svg");
    iconPlusMobile.setAttribute("alt","plus" );

    let counterSpanMobile=document.createElement('span');
    mobileCounter.appendChild(counterSpanMobile);
    counterSpanMobile.innerHTML=element.score;

    let iconMinusMobile=document.createElement('img');
    mobileCounter.appendChild(iconMinusMobile);
    iconMinusMobile.classList.add('iconMinus');
    iconMinusMobile.setAttribute("src","images/icon-minus.svg");
    iconMinusMobile.setAttribute("alt","minus" )


    let mobileSectionRight=document.createElement('div');
    mobileSection.appendChild(mobileSectionRight);
    mobileSectionRight.classList.add('right');
    mobileSectionRight.setAttribute("data-displayedReplybox", false);
        
    if( jsonFile.currentUser.username===element.user.username){
        let divDeleteMobile=document.createElement('div');
        rightSection.appendChild(divDeleteMobile);
        divDeleteMobile.addEventListener("click", deleteComment);

        let delIconMobile=document.createElement('img');
        divDeleteMobile.appendChild(delIconMobile);
        delIcon.setAttribute("src", "images/icon-delete.svg");

        let delTextMobile=document.createElement('p');
        divDeleteMobile.appendChild(delTextMobile);
        deltTexMobile.innerHTML="Delete";
        deltTexMobile.classList.add('replyRed');
        deltTexMobile.classList.add('reply');

        let divEditMobile=document.createElement('div');
        mobileSectionRight.appendChild(divEdit);
        divEditMobil.addEventListener("click", editComment);
        divEditMobil.style.marginLeft="1.5em";

        let editIconMobile=document.createElement('img');
        divEditMobile.appendChild(editIcon);
        editIconMobile.setAttribute("src", "images/icon-edit.svg");

        let editTextMobile=document.createElement('p');
        divEditMobile.appendChild(editText);
        editTextMobile.innerHTML="Edit";
        editTextMobile.classList.add('reply');
    }

    else{

    let replyImageMobile=document.createElement('img');
    mobileSectionRight.appendChild(replyImageMobile);
    replyImageMobile.classList.add('mobileReply');
    replyImageMobile.setAttribute("src","images/icon-reply.svg" );
    replyImageMobile.setAttribute("alt", "reply");
    mobileSectionRight.addEventListener("click", addTextArea);

    let replyMobile=document.createElement('p');
    mobileSectionRight.appendChild(replyMobile);
    replyMobile.classList.add('mobileReply', 'reply');
    replyMobile.innerHTML="Reply";
    }
    element.replies.forEach( element => builtReply(element));


}
    


//builts replys on pageload
function builtReply(element){


    let commentBox=document.createElement('div');
    document.querySelector('.wrapperMain').appendChild(commentBox);
    commentBox.classList.add('commentBox');
    commentBox.classList.add('commentBoxReply');
   
    //desktop counter
    let desktopCounter=document.createElement('div');
    commentBox.appendChild(desktopCounter);
    desktopCounter.classList.add('desktopCounter');

    let iconPlus=document.createElement('img');
    desktopCounter.appendChild(iconPlus);
    iconPlus.classList.add("iconPlus");
    iconPlus.setAttribute("src","images/icon-plus.svg");
    iconPlus.setAttribute("alt","plus" );

    let counterSpan=document.createElement('span');
    desktopCounter.appendChild(counterSpan);
    counterSpan.innerHTML=element.score;

    let iconMinus=document.createElement('img');
    desktopCounter.appendChild(iconMinus);
    iconMinus.classList.add('iconMinus');
    iconMinus.setAttribute("src","images/icon-minus.svg");
    iconMinus.setAttribute("alt","minus" );

    //right area

        //heading
    let rightArea=document.createElement('div');
    commentBox.appendChild(rightArea);
    rightArea.classList.add('rightArea');

    let heading=document.createElement('div');
    rightArea.appendChild(heading);
    heading.classList.add('heading');

    let leftSection=document.createElement('div');
    heading.appendChild(leftSection);
    leftSection.classList.add('left');

    let avatar=document.createElement('img');
    leftSection.appendChild(avatar);
    avatar.setAttribute("src", element.user.image.png);
    avatar.setAttribute("alt", element.user.username);

    let name=document.createElement('p');
    leftSection.appendChild(name);
    name.classList.add('name');
    name.innerHTML=element.user.username;

    if( jsonFile.currentUser.username===element.user.username){
        let you=document.createElement('p');
        leftSection.appendChild(you);
        you.innerHTML="you";
        you.classList.add('you');
  
        let date=document.createElement('p');
        leftSection.appendChild(date);
        date.classList.add('date');
        date.innerHTML=element.createdAt;

        let rightSection=document.createElement('div');
        heading.appendChild(rightSection);
        rightSection.classList.add('right');
        rightSection.classList.add('desktopReply');
        rightSection.setAttribute("data-displayedReplybox", false);

        let divDelete=document.createElement('div');
        rightSection.appendChild(divDelete);
        divDelete.addEventListener("click", deleteComment);

        let delIcon=document.createElement('img');
        divDelete.appendChild(delIcon);
        delIcon.setAttribute("src", "images/icon-delete.svg");

        let delText=document.createElement('p');
        divDelete.appendChild(delText);
        delText.innerHTML="Delete";
        delText.classList.add('replyRed');
        delText.classList.add('reply');

        let divEdit=document.createElement('div');
        rightSection.appendChild(divEdit);
        divEdit.addEventListener("click", editComment);
        divEdit.style.marginLeft="1.5em";

        let editIcon=document.createElement('img');
        divEdit.appendChild(editIcon);
        editIcon.setAttribute("src", "images/icon-edit.svg");

        let editText=document.createElement('p');
        divEdit.appendChild(editText);
        editText.innerHTML="Edit";
        editText.classList.add('reply');
    }

        else{
                let date=document.createElement('p');
                leftSection.appendChild(date);
                date.classList.add('date');
                date.innerHTML=element.createdAt;

                let rightSection=document.createElement('div');
                heading.appendChild(rightSection);
                rightSection.classList.add('right');
                rightSection.addEventListener("click", addTextArea);
                rightSection.setAttribute("data-displayedReplybox", false);

                let replyImage=document.createElement('img');
                rightSection.appendChild(replyImage);
                replyImage.classList.add('desktopReply');
                replyImage.setAttribute("src","images/icon-reply.svg");

                let replyText=document.createElement('p');
                rightSection.appendChild(replyText);
                replyText.classList.add('desktopReply', 'reply');
                replyText.innerHTML="Reply";
            }
            
    let commentText=document.createElement('p');
    rightArea.appendChild(commentText);
    commentText.innerHTML=element.content;

    //mobile section
    let mobileSection=document.createElement('div');
    rightArea.appendChild(mobileSection);
    mobileSection.classList.add('mobileSection');

    let mobileCounter=document.createElement('div');
    mobileSection.appendChild(mobileCounter);
    mobileCounter.classList.add('mobileCounter');

    let iconPlusMobile=document.createElement('img');
    mobileCounter.appendChild(iconPlusMobile);
    iconPlusMobile.classList.add("iconPlus");
    iconPlusMobile.setAttribute("src","images/icon-plus.svg");
    iconPlusMobile.setAttribute("alt","plus" );

    let counterSpanMobile=document.createElement('span');
    mobileCounter.appendChild(counterSpanMobile);
    counterSpanMobile.innerHTML=element.score;

    let iconMinusMobile=document.createElement('img');
    mobileCounter.appendChild(iconMinusMobile);
    iconMinusMobile.classList.add('iconMinus');
    iconMinusMobile.setAttribute("src","images/icon-minus.svg");
    iconMinusMobile.setAttribute("alt","minus" )

    let mobileSectionRight=document.createElement('div');
    mobileSection.appendChild(mobileSectionRight);
    mobileSectionRight.classList.add('right');
    mobileSectionRight.setAttribute("data-displayedReplybox", false);
        
    if( jsonFile.currentUser.username===element.user.username){
        let divDeleteMobile=document.createElement('div');
        mobileSectionRight.appendChild(divDeleteMobile);
        divDeleteMobile.addEventListener("click", deleteComment);

        let delIconMobile=document.createElement('img');
        divDeleteMobile.appendChild(delIconMobile);
        delIconMobile.setAttribute("src", "images/icon-delete.svg");

        let delTextMobile=document.createElement('p');
        divDeleteMobile.appendChild(delTextMobile);
        delTextMobile.innerHTML="Delete";
        delTextMobile.classList.add('replyRed');
        delTextMobile.classList.add('reply');

        let divEditMobile=document.createElement('div');
        mobileSectionRight.appendChild(divEditMobile);
        divEditMobile.addEventListener("click", editComment);
        divEditMobile.style.marginLeft="1.5em";

        let editIconMobile=document.createElement('img');
        divEditMobile.appendChild(editIconMobile);
        editIconMobile.setAttribute("src", "images/icon-edit.svg");

        let editTextMobile=document.createElement('p');
        divEditMobile.appendChild(editTextMobile);
        editTextMobile.innerHTML="Edit";
        editTextMobile.classList.add('reply');
    }

    else{

    let replyImageMobile=document.createElement('img');
    mobileSectionRight.appendChild(replyImageMobile);
    replyImageMobile.classList.add('mobileReply');
    replyImageMobile.setAttribute("src","images/icon-reply.svg" );
    replyImageMobile.setAttribute("alt", "reply");
    mobileSectionRight.addEventListener("click", addTextArea);

    let replyMobile=document.createElement('p');
    mobileSectionRight.appendChild(replyMobile);
    replyMobile.classList.add('mobileReply', 'reply');
    replyMobile.innerHTML="Reply";
    }

}

function addTextArea(){
    //just add textbox if there isnt one
    if(this.getAttribute("data-displayedReplybox")==='false'){

        let replyBox=document.createElement('div');
        this.parentElement.parentElement.parentElement.parentElement.insertBefore(replyBox, this.parentElement.parentElement.parentElement.nextSibling);
        replyBox.classList.add('replyBox');

        let avatar=document.createElement('img');
        replyBox.appendChild(avatar);
        avatar.setAttribute("src", jsonFile['currentUser'].image.png);
        avatar.setAttribute("alt", "user");

        let textArea=document.createElement('textarea');
        replyBox.appendChild(textArea);
        textArea.value="Add a comment...";

        let submitButton=document.createElement('button');
        replyBox.appendChild(submitButton);
        submitButton.classList.add('submitButton');
        submitButton.innerHTML="SEND";

    if (this.parentElement.parentElement.parentElement.classList.contains('commentBoxReply')===true){
                replyBox.classList.add('commentBoxReply');
            }

        submitButton.addEventListener("click", postComment);
        this.setAttribute('data-displayedReplybox', true);
    }
}

function postComment(){
    
    let commentBox=document.createElement('div');
    this.parentElement.parentElement.insertBefore(commentBox, this.parentElement);
    
    commentBox.classList.add('commentBox');
   
    if(this.parentElement.classList.contains('commentBoxReply')===true){
        commentBox.classList.add('commentBoxReply');
    }

    //desktop counter
    let desktopCounter=document.createElement('div');
    commentBox.appendChild(desktopCounter);
    desktopCounter.classList.add('desktopCounter');

    let iconPlus=document.createElement('img');
    desktopCounter.appendChild(iconPlus);
    iconPlus.classList.add("iconPlus");
    iconPlus.setAttribute("src","images/icon-plus.svg");
    iconPlus.setAttribute("alt","plus" );

    let counterSpan=document.createElement('span');
    desktopCounter.appendChild(counterSpan);
    counterSpan.innerHTML='0';

    let iconMinus=document.createElement('img');
    desktopCounter.appendChild(iconMinus);
    iconMinus.classList.add('iconMinus');
    iconMinus.setAttribute("src","images/icon-minus.svg");
    iconMinus.setAttribute("alt","minus" );

    //right area

        //heading
    let rightArea=document.createElement('div');
    commentBox.appendChild(rightArea);
    rightArea.classList.add('rightArea');

    let heading=document.createElement('div');
    rightArea.appendChild(heading);
    heading.classList.add('heading');

    let leftSection=document.createElement('div');
    heading.appendChild(leftSection);
    leftSection.classList.add('left');

    let avatar=document.createElement('img');
    leftSection.appendChild(avatar);
    avatar.setAttribute("src", jsonFile.currentUser.image.png);
    avatar.setAttribute("alt", jsonFile.currentUser.username);

    let name=document.createElement('p');
    leftSection.appendChild(name);
    name.classList.add('name');
    name.innerHTML=jsonFile.currentUser.username;

    let you=document.createElement('p');
    leftSection.appendChild(you);
    you.innerHTML="you";
    you.classList.add('you');

    let date=document.createElement('p');
    leftSection.appendChild(date);
    date.classList.add('date');
    date.innerHTML="now";

    let rightSection=document.createElement('div');
    heading.appendChild(rightSection);
    rightSection.classList.add('right');
    rightSection.classList.add('desktopReply');
    rightSection.setAttribute("data-displayedReplybox", false);
    
    let divDelete=document.createElement('div');
    rightSection.appendChild(divDelete);
    divDelete.addEventListener("click", deleteComment);

    let delIcon=document.createElement('img');
    divDelete.appendChild(delIcon);
    delIcon.setAttribute("src", "images/icon-delete.svg");

    let delText=document.createElement('p');
    divDelete.appendChild(delText);
    delText.innerHTML="Delete";
    delText.classList.add('replyRed');
    delText.classList.add('reply');

    let divEdit=document.createElement('div');
    rightSection.appendChild(divEdit);
    divEdit.addEventListener("click", editComment);
    divEdit.style.marginLeft="1.5em";


    let editIcon=document.createElement('img');
    divEdit.appendChild(editIcon);
    editIcon.setAttribute("src", "images/icon-edit.svg");

    let editText=document.createElement('p');
    divEdit.appendChild(editText);
    editText.innerHTML="Edit";
    editText.classList.add('reply');
   

    let commentText=document.createElement('p');
    rightArea.appendChild(commentText);
    commentText.innerHTML=this.previousSibling.value;

    //mobile section
    let mobileSection=document.createElement('div');
    rightArea.appendChild(mobileSection);
    mobileSection.classList.add('mobileSection');

    let mobileCounter=document.createElement('div');
    mobileSection.appendChild(mobileCounter);
    mobileCounter.classList.add('mobileCounter');

    let iconPlusMobile=document.createElement('img');
    mobileCounter.appendChild(iconPlusMobile);
    iconPlusMobile.classList.add("iconPlus");
    iconPlusMobile.setAttribute("src","images/icon-plus.svg");
    iconPlusMobile.setAttribute("alt","plus" );

    let counterSpanMobile=document.createElement('span');
    mobileCounter.appendChild(counterSpanMobile);
    counterSpanMobile.innerHTML='0';

    let iconMinusMobile=document.createElement('img');
    mobileCounter.appendChild(iconMinusMobile);
    iconMinusMobile.classList.add('iconMinus');
    iconMinusMobile.setAttribute("src","images/icon-minus.svg");
    iconMinusMobile.setAttribute("alt","minus" )

    let mobileSectionRight=document.createElement('div');
    mobileSection.appendChild(mobileSectionRight);
    mobileSectionRight.classList.add('right');
    mobileSectionRight.setAttribute("data-displayedReplybox", false);
    
    let divDeleteMobile=document.createElement('div');
    mobileSectionRight.appendChild(divDeleteMobile);
    divDeleteMobile.addEventListener("click", deleteComment);

    let delIconMobile=document.createElement('img');
    divDeleteMobile.appendChild(delIconMobile);
    delIconMobile.setAttribute("src", "images/icon-delete.svg");

    let delTextMobile=document.createElement('p');
    divDeleteMobile.appendChild(delTextMobile);
    delTextMobile.innerHTML="Delete";
    delTextMobile.classList.add('replyRed');
    delTextMobile.classList.add('reply');

    let divEditMobile=document.createElement('div');
    mobileSectionRight.appendChild(divEditMobile);
    divEditMobile.addEventListener("click", editComment);
    divEditMobile.style.marginLeft="1.5em";

    let editIconMobile=document.createElement('img');
    divEditMobile.appendChild(editIconMobile);
    editIconMobile.setAttribute("src", "images/icon-edit.svg");

    let editTextMobile=document.createElement('p');
    divEditMobile.appendChild(editTextMobile);
    editTextMobile.innerHTML="Edit";
    editTextMobile.classList.add('reply');
    

    //new Textbox if very bottom textbox was used

    if(this.parentElement===this.parentElement.parentElement.lastChild){
        builtCommentBox();
    }
    
    //delete TextBox, set attribute to be able to comment again
    this.parentElement.previousSibling.previousSibling.querySelectorAll('div[data-displayedreplybox]').forEach( element => element.setAttribute("data-displayedreplybox",false));
    this.parentElement.remove();


}


function deleteComment(){

    this.parentElement.parentElement.parentElement.parentElement.remove();

}



//equals addTextArea() with the same content as the post
function editComment(){
    let pArray=this.parentElement.parentElement.parentElement.parentElement.querySelectorAll('p');
    let contentComment=pArray[5].innerHTML;
    
    //just add textbox if there isnt one
    if(this.parentElement.getAttribute("data-displayedReplybox")==='false'){
        let replyBox=document.createElement('div');


        this.parentElement.parentElement.parentElement.parentElement.parentElement.insertBefore(replyBox, this.parentElement.parentElement.parentElement.parentElement);
       
       
        replyBox.classList.add('replyBox');

        let avatar=document.createElement('img');
        replyBox.appendChild(avatar);
        avatar.setAttribute("src", jsonFile['currentUser'].image.png);
        avatar.setAttribute("alt", "user");

        let textArea=document.createElement('textarea');
        replyBox.appendChild(textArea);
        textArea.value=contentComment;

        let submitButton=document.createElement('button');
        replyBox.appendChild(submitButton);
        submitButton.classList.add('submitButton');
        submitButton.innerHTML="SEND";

        if (this.parentElement.parentElement.parentElement.parentElement.classList.contains('commentBoxReply')===true){
                    replyBox.classList.add('commentBoxReply');
                }

        submitButton.addEventListener("click", postComment);
       
    }
    this.parentElement.parentElement.parentElement.parentElement.remove();

}


function builtCommentBox(){
    

    let replyBox=document.createElement('div');
    replyBox.classList.add('replyBox');
    let wrapperMain=document.querySelector('.wrapperMain');
    wrapperMain.appendChild(replyBox);

    let avatar=document.createElement('img');
    replyBox.appendChild(avatar);
    avatar.setAttribute("src", jsonFile['currentUser'].image.png);
    avatar.setAttribute("alt", "user");

    let textArea=document.createElement('textarea');
    replyBox.appendChild(textArea);
    textArea.value="Add a comment...";

    let submitButton=document.createElement('button');
    replyBox.appendChild(submitButton);
    submitButton.classList.add('submitButton');
    submitButton.innerHTML="SEND";
    submitButton.addEventListener("click", postComment);







}