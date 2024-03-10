var icon=document.querySelector(".icon");
var ul = document.querySelector("ul");

icon.addEventListener('click',()=>{
    ul.classList.toggle('showData');
    
    if(ul.className=="showData"){
        document.getElementById("bar").className="fa-solid fa-square-xmark";
    }else{
        document.getElementById("bar").className="fa-solid fa-bars";
    }
});

function showModel(){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.login-form').classList.add('showlogin-form');

}
var btnlogin= document.querySelector('.logsig-btn');
btnlogin.addEventListener('click',showModel);

function closeModel(){
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.login-form').classList.remove('showlogin-form');

}
var close=document.querySelector('span');
close.addEventListener('click',closeModel);


