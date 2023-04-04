let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let usuario = document.getElementById("usuario")
let correo = document.getElementById("correo")
let clave =document.getElementById("clave")
let clave_oculta = ""
let estatus= document.getElementById("Estatus")
let edit1 = document.getElementById("edit1")
let edit2 = document.getElementById("edit2")
let edit3 = document.getElementById("edit3")
let edit4 = document.getElementById("edit4")
let edit5 = document.getElementById("edit5")
let table = document.getElementById("table")
let c_1 = document.getElementById("c_1") 
let c_2 = document.getElementById("c_2") 
let c_3 = document.getElementById("c_3") 
let c_4 = document.getElementById("c_4") 
let c_5 = document.getElementById("c_5") 
let volver =document.getElementById("volver")
const btnSwitch = document.querySelector('#switch');
let contador4 = 0


btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
	// Guardamos el modo en localstorage.
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
    
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}



if(window.localStorage.getItem("creador")=="true"){
    nombre.innerHTML= window.localStorage.getItem("nombre_creador")
    apellido.innerHTML = window.localStorage.getItem("apellido_creador")
correo.innerHTML = window.localStorage.getItem("correo_creador")
for (let i = 0; i < window.localStorage.getItem("clave_creador").length; i++) {
    clave_oculta = clave_oculta + "*"
}
clave.innerHTML= clave_oculta
estatus.innerHTML='Creador'
}
 else if(window.localStorage.getItem("validar")=="true"){
nombre.innerHTML = window.localStorage.getItem("nombre")
apellido.innerHTML = window.localStorage.getItem("apellido")
correo.innerHTML = window.localStorage.getItem("correo")
for (let i = 0; i < window.localStorage.getItem("clave").length; i++) {
    clave_oculta = clave_oculta + "*"
}
clave.innerHTML= clave_oculta
estatus.innerHTML='usuario' 
}
edit1.addEventListener("click",function() {
    if(window.localStorage.getItem("creador")=="true"){
        alert("como que cambiar nombre si eres la mera verga")
        c_1.setAttribute("class","c-1-v")
        contador4=1
     }
    if (contador4==0) {
        contador4=1
        c_1.setAttribute("class","c-1")
    }
     else {
       contador4=0
       c_1.setAttribute("class","c-1-v")
       window.localStorage.setItem("nombre",c_1.value)
    }
})
edit2.addEventListener("click",function name(params) {
    if(window.localStorage.getItem("creador")=="true"){
        alert("como que cambiar Apellido si eres la mera verga")
        c_2.setAttribute("class","c-2-v")
        contador4=1
     }
    if (contador4==0) {
        contador4=1
        c_2.setAttribute("class","c-2")
    }
     else {
       contador4=0
       c_2.setAttribute("class","c-2-v")
       window.localStorage.setItem("apellido",c_2.value)
    }
})
// edit3.addEventListener("click",function name(params) {
//     if(window.localStorage.getItem("creacion")=="true"){
//         alert("como que cambiar usuario si eres la mera verga")
//         c_3.setAttribute("class","c-3-v")
//         contador4=1
//      }
//     if (contador4==0) {
//         contador4=1
//         c_1.setAttribute("class","c-3")
//     }
//      else {
//        contador4=0
//        c_1.setAttribute("class","c-3-v")
//        window.localStorage.setItem("usuario",c_3.value)
//     }
// })
edit4.addEventListener("click",function() {
    if(window.localStorage.getItem("creador")=="true"){
        alert("como que cambiar correo si eres la mera verga")
        c_1.setAttribute("class","c-4-v")
        contador4=1
     }
    if (contador4==0) {
        contador4=1
        c_1.setAttribute("class","c-4")
    }
     else {
       contador4=0
       c_1.setAttribute("class","c-4-v")
       window.localStorage.setItem("correo",c_4.value)
    }
})
edit5.addEventListener("click",function () {
    if(window.localStorage.getItem("creador")=="true"){
        alert("como que cambiar clave si eres la mera verga")
        c_1.setAttribute("class","c-5-v")
        contador4=1
     }
    if (contador4==0) {
        contador4=1
        c_1.setAttribute("class","c-5")
    }
     else {
       contador4=0
       c_1.setAttribute("class","c-5-v")
       window.localStorage.setItem("clave",c_5.value)
    }
})
volver.addEventListener("click",()=>{
    window.location.href="../html/index.html"
})