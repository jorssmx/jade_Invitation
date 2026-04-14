var sobre = document.getElementById("sobre");
const music = document.getElementById('music');
var scrollY = 0;
var isLocked = false;
var touchOptions = { passive: false };

function preventTouchMove(e) {
    if (isLocked) e.preventDefault();
}

function lockScroll() {
    if (isLocked) return;
    scrollY = window.scrollY || window.pageYOffset || 0;
    document.body.classList.add('no-scroll');
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + scrollY + 'px';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.addEventListener('touchmove', preventTouchMove, touchOptions);
    isLocked = true;
}

function unlockScroll() {
    if (!isLocked) return;
    document.body.classList.remove('no-scroll');
    var top = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    document.removeEventListener('touchmove', preventTouchMove, touchOptions);
    var y = parseInt(top || '0', 10);
    window.scrollTo(0, isNaN(y) ? scrollY : -y);
    isLocked = false;
}

lockScroll();

sobre.addEventListener("click",()=>{
    unlockScroll();
    music.play()
    loadGsap();

})

function loadGsap(){
    gsap.to('.sello-sombra',{
        duration:2,
        opacity:0,
        y:'80%',
    })
    gsap.to('.sello',{
        duration:2,
        opacity:0,
        y:'87%',
    })
    gsap.to('.banda-sobre',{
        duration:4,
        opacity:0,
        y:'190%',
    })
    gsap.to('.first',{
        delay:0.0,
        duration:4,
        x:'-105%'
    })
    gsap.to('.second',{
        delay:0.0,
        duration:4,
        x:'105%',
        onComplete: function() {
            document.querySelector('.sobre').remove();
        }
    })
}
