const toggle=document.querySelector('.toggle')
const navlinks=document.querySelector('.navlinks')
toggle.addEventListener('click',()=>{
    toggle.classList.toggle('active')
    navlinks.classList.toggle('active')
})