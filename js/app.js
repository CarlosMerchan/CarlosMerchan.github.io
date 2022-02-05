const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".abrir-menu");
const closeMenuBtn = document.querySelector(".cerrar-menu");
const optionSelecter = document.querySelectorAll(".optionMenu");
const validacionMenu = screen.width;




   
 

function toggleMenu(){
    menu.classList.toggle("menu-abierto");
    
}

openMenuBtn.addEventListener("click",toggleMenu);
closeMenuBtn.addEventListener("click",toggleMenu);
if(screen.width <= 950){
    for(let selector of optionSelecter){
    selector.addEventListener("click",toggleMenu);
    }
} 




let option = (opcion)=>{
    switch(opcion){
        case 1:
            window.location.href="presupuesto.html";
            break;

        case 2:
            window.location.href="https://github.com/CarlosMerchan/Aplicacion-presupuesto";
            break;        
        
    }
    
}