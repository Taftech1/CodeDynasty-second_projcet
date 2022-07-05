let opener= document.getElementById('menu-bar')
let container = document.querySelector('.menu-con')
//////
let closer= document.getElementById('close')

opener.addEventListener('click', display)
function display (){
    container.style.display = "block"
    container.style.animation= "all, 10s, linear"
}
closer.addEventListener('click', disable)
function disable() {
    container.style.display = "none"
}