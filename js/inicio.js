var nombre = document.getElementById("nombre")
var correo = document.getElementById("correo")
var clave = document.getElementById("clave")
var btn_R = document.getElementById("registrarse")
var btn_i = document.getElementById("iniciar")
var correo2 = document.getElementById("correo2")
var clave2 = document.getElementById("clave2")
let nombre_creador = "Jhondeivi"
let apellido_creador ="Rondon"
let correo_creador = "jones.ruiz07@gmail.com"
let clave_creador = "jones1018"
let creador = true
window.localStorage.setItem("nombre_creador", nombre_creador)
window.localStorage.setItem("apellido_creador",apellido_creador)
window.localStorage.setItem("correo_creador",correo_creador)
window.localStorage.setItem("clave_creador",clave_creador)

function registrar() {
    if(!nombre.value || !correo.value || !clave.value ) alert("faltan campos por rellenar")
    else{
     window.localStorage.setItem("nombre", nombre.value)
     window.localStorage.setItem("correo", correo.value)
     window.localStorage.setItem("clave", clave.value)
     $SingnIn.classList.toggle('active');
     $SingnUp.classList.toggle('active');
    }
 }

 btn_R.addEventListener("click", registrar)


function validar() {
    if (!correo2.value || !clave2.value) {
        alert("Termina de rellenar los campos")
    }
    else if(correo2.value == window.localStorage.getItem("correo_creador") && clave2.value == window.localStorage.getItem("clave_creador")){
        alert("Bienvenido Sr. " + window.localStorage.getItem("nombre_creador"))
        window.location.href="../html/recarga.html"
        window.localStorage.setItem("creador",creador)
    }
     else if (correo2.value != window.localStorage.getItem("correo")) {
        alert("correo incorrecto")
    }
    else if (clave2.value != window.localStorage.getItem("clave")) {
        alert("clave erronea")
    }
   
    else{
        alert("Bienvenido Sr. " + window.localStorage.getItem("nombre"))
        window.location.href="../html/recarga.html"
        window.localStorage.setItem('validar','true')
    }
}

btn_i.addEventListener("click", validar)



const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),
      $SingnUp = document.querySelector('.sign-up'),
      $SingnIn = document.querySelector('.sign-in');

document.addEventListener("click", e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $SingnIn.classList.toggle('active');
        $SingnUp.classList.toggle('active');
    }
});

