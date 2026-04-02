var sobre = document.getElementById("sobre");
/* var body = document.getElementById("invitacion"); */
const music = document.getElementById('music');

sobre.addEventListener("click",()=>{
    music.play()
    /* body.style.overflowY = "scroll"; */
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
