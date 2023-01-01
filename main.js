function hadleKeyboard(event){
    if(event.key === 'f11'){
        document.body.classList.toggle('fullscreen')
    }
}

window.addEventListener('keydown',hadleKeyboard)