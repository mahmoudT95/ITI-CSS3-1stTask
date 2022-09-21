var burger = document.querySelector('.burger')
var side = document.querySelector('.sidecont')
burger.addEventListener('click',function(){
    burger.classList.toggle('open')
    side.classList.toggle('sidecontopen')
    
})