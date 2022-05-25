/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('c-show-menu')
        })
    }
}
showMenu('i-level-3-nav-toggle','i-level-3-nav-nav')

/*==================== REMOVE MENU ====================*/
const navLink = document.querySelectorAll('.c-level-4-nav')
function linkAction(){
    const navMenu = document.getElementById('i-level-3-nav-nav')
    navMenu.classList.remove('c-show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACTIVE LINKS ====================*/
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 70;
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.c-level-3-nav-nav a[href*=' + sectionId + ']').classList.add('c-active-link')
        }else{
            document.querySelector('.c-level-3-nav-nav a[href*=' + sectionId + ']').classList.remove('c-active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== ADD BOX-SHADOW MENU ====================*/ 
function scrollNav(){
    const nav = document.getElementById('i-level-2-nav')
    if(this.scrollY >= 10) nav.classList.add('c-scroll-nav'); else nav.classList.remove('c-scroll-nav')
}
window.addEventListener('scroll', scrollNav)

/*==================== SHOW SCROLLTOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('i-scrolltop');
    if(this.scrollY >= 300) scrollTop.classList.add('c-show-scroll'); 
    else scrollTop.classList.remove('c-show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== SWIPER PORTAFOLIO ====================*/ 
let swiper = new Swiper('.swiper-container', {
    cssMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
});

sr.reveal(`.c-level-3-home-img, .c-level-2-about-img, .c-boton-inicio, .c-level-2-services-card`, {
    origin: 'top',
    interval: 200,
})

sr.reveal(`.c-level-2-about-data, .swiper-container`, {
    origin: 'right',
    interval: 200,
})

sr.reveal(`.c-level-3-home-icon, .c-level-3-home-data, .c-level-2-contacto-informacion, .c-level-2-contacto-formulario`, {
    origin: 'left',
    interval: 200,
})