let titulo = document.getElementById("titulo")
let nombre = document.getElementById("nombre")
let correo = document.getElementById("correo")
let mensaje = document.getElementById("mensaje")
let volver =document.getElementById("volver")
let responder = document.getElementById("responder")
let respuesta = document.getElementById('respuesta')
let contador = 0
if (window.localStorage.getItem("creador")=='true') {
    titulo.innerHTML= `Bienvenido ${window.localStorage.getItem("nombre_creador")}`
   nombre.innerHTML= window.localStorage.getItem("nombre_mensaje")
   correo.innerHTML= window.localStorage.getItem("correo_mensaje")
   mensaje.innerHTML= window.localStorage.getItem("mensaje")
   asunto.innerHTML = window.localStorage.getItem("asunto")
} 
else{

}

responder.addEventListener('click',()=>{
    if (contador==0){
        respuesta.removeAttribute("class","respuesta-v")
        contador=1
    }
    else{
        respuesta.setAttribute("class","respuesta-v")
        contador=0
    }
})
volver.addEventListener("click",()=>{
    window.location.href="../html/index.html"
})