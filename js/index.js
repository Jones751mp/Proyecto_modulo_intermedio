let btn1 = document.getElementById("btn-1")
let container_menu = document.getElementById("container-menu")
let btn_menu = document.getElementById("btn-menu")
let slider = document.getElementById("slider")
let contador1= 0
let btne1= document.getElementById("btne-1")
let btne2= document.getElementById("btne-2")
let btne3= document.getElementById("btne-3")
let card1=document.getElementById("card1"),
card2=document.getElementById("card2"),
card3=document.getElementById("card3")
let nombre_mensaje = document.getElementById("nombre")
let correo_mensaje = document.getElementById("correo")
let mensaje= document.getElementById("mensaje")
let enviar = document.getElementById("enviar")
let enlace6 = document.getElementById("enlace6")
let asunto = document.getElementById("asunto")
let foto_perfil = document.getElementById("foto_perfil")
let body = document.querySelector('body')
let aaaa = document.getElementById('aaaa')
let aaaa2 = document.getElementById('aaaa3')
let aaaa3 = document.getElementById('aaaa2')
let enlace3 = document.getElementById('enlace3')


enlace3.addEventListener('click',()=>{
   if (window.localStorage.getItem('creador')=='true') {
    window.location.href='../html/enconstruccion.html'
   } else {
    window.location.href='../html/carrito.html'
   }
})
enlace6.addEventListener("click",()=>{
    window.location.href="../html/inicio.html";
    window.localStorage.setItem("validar","false")
    window.localStorage.setItem("creador","false")
})


btn1.addEventListener("click", ()=>{
   if (contador1==0) {
    container_menu.setAttribute("class", "container-menu")
    btn_menu.setAttribute("class", "btn-menu")
    contador1=1
   } 
})

btn_menu.addEventListener("click",()=>{
    if (contador1==1) {
        container_menu.setAttribute("class", "container-menu-d")
        btn_menu.setAttribute("class", "btn-menu-d")
        contador1=0
        setTimeout(()=>{
            container_menu.setAttribute("class", "container-menu-v")
            btn_menu.setAttribute("class", "btn-menu-v")
            slider.setAttribute("class","slider")
        },1000)
    }  
})

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);

btne1.addEventListener("click", ()=>{
    window.location.href = "../html/nissan.html"
})

btne2.addEventListener("click", ()=>{
    window.location.href = "../html/mustang.html"
})

btne3.addEventListener("click", ()=>{
    window.location.href = "../html/enconstruccion.html"
})
enviar.addEventListener("click",()=>{
    window.localStorage.setItem("nombre_mensaje",nombre_mensaje.value)
    window.localStorage.setItem("correo_mensaje",correo_mensaje.value)
    window.localStorage.setItem("mensaje",mensaje.value)
    window.localStorage.setItem("asunto",asunto.value)
})

if (window.localStorage.getItem("creador")=='true') {
    foto_perfil.setAttribute("class","img-p-a")
    foto_perfil.setAttribute("src","../Imagenes/IMG-20220613-WA0065.jpg")
    enlace3.innerHTML='<img src="../iconos/bar-chart-line.svg" class="img-cart"> Registro de ventas'
} else {
    enlace3.innerHTML='<img src="../iconos/cart.svg" class="img-cart"> Carrito'
    foto_perfil.setAttribute("class","img-p")
    foto_perfil.setAttribute("src","../iconos/person-circle.svg")
}

if (window.localStorage.getItem("dark-mode")=='true') {
    body.setAttribute('class','bg-dark text-light')
    aaaa.style.color="white"
    aaaa2.style.color="white"
    aaaa3.style.color="white"
    card1.style.border="1px solid white"
    card2.style.border="1px solid white"
    card3.style.border="1px solid white"
} else {
    
}