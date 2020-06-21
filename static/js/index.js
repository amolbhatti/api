let flag=0;
const menuBtn=document.querySelector('.menu-button');
const navlinks=document.querySelector('.nav-links')
let menuOpen=false;
menuBtn.addEventListener('click',()=>{
if(!menuOpen){
    menuBtn.classList.add('open');
    navlinks.classList.add('myopen')
    menuOpen=true;

}else{
    menuBtn.classList.remove('open');
    navlinks.classList.remove('myopen')
    menuOpen=false;
}
});

function myFunction(){
    let element =document.querySelector('#display');
    if(window.innerWidth<=870 && flag==0){
        
        element.removeAttribute("class");
        flag=1;
        console.log(flag);
    }else{
        flag=0;
        element.setAttribute("class","row");
        console.log(flag)
    }
    }