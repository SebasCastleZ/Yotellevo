document.addEventListener('DOMContentLoaded',function(){
  let menu = document.getElementById("hamburger");

menu.addEventListener("click", ()=>{
    let list = document.getElementById("menu");
    list.classList.toggle("mostrar");
    menu.classList.toggle("cambio");
}); 
});

