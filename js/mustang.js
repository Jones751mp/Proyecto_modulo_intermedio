let volver= document.getElementById("volver")
let btnSwitch = document.querySelector('#mc2017');
let desear = document.getElementById("desear")
let contador = 0
btnSwitch.addEventListener('click', () => {
    if(contador == 0){
        btnSwitch.classList.toggle('active');
        desear.innerHTML='desea añadir al carrito?'
        
        contador=1
    }
	else{
        desear.innerHTML=''
        btnSwitch.classList.remove('active');
        contador=0
    }
});
volver.addEventListener("click",()=>{
    window.location.href="../html/index.html"
})