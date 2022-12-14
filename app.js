const btn_si = document.getElementById("btn_si")
const btn_no = document.getElementById("btn_no")
let divModoSexo=document.getElementsByClassName("modo_sexo")[0]

function moverbtn(elm){
  elm.style.position='absolute'
  elm.style.top=Math.random()*(window.innerHeight - elm.offsetHeight) + 'px';
  elm.style.left = Math.random()* (window.innerWidth - elm.offsetWidth) +'px';
}
btn_no.addEventListener("mouseenter",function(e){
  moverbtn(e.target)
})

btn_si.addEventListener("click",function(e){
  alert("sabía que dirías que si!!😍 ")
  divModoSexo.style.display='block'
  const cancion = new Audio('img\\modo_hot.mp3')
  cancion.play()
} )