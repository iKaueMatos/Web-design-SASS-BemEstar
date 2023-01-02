const small = window.matchMedia('(max-width:600px)')
const small_tablet = window.matchMedia('(max-width:700px)')
const small_desktop = window.matchMedia('(max-width:1440px)')



if (small){
    console.log("Uusuario Mobile")
}else if(small_tablet){
    console.log("Usuario Tablet")
}else if(small_desktop){
    console.log("Usuario de Desktop")
}






//Event de clique
function hadleKeyboard(event){
    if(event.key === 'f11'){
        document.body.classList.toggle('fullscreen')
    }
}

window.addEventListener('keydown',hadleKeyboard)