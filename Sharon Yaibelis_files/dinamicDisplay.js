window.addEventListener('scroll',show);

function show(){
    var showNX = document.querySelectorAll('.show-n-x');
    var showPX = document.querySelectorAll('.show-p-x');
    var showNY = document.querySelectorAll('.show-n-y');
    var showPY = document.querySelectorAll('.show-p-y');
    var show = document.querySelectorAll('.show');

    for(var i = 0 ; i<showNX.length;i++){
        var windowHeight = window.innerHeight;
        var showTop = showNX[i].getBoundingClientRect().top;
        var showPoint = 100;

        if(showTop<windowHeight-showPoint){
            showNX[i].classList.add('active-n-x')
        }else{
            showNX[i].classList.remove('active-n-x')
        }
    }

    for(var i = 0 ; i<showPX.length;i++){
        var windowHeight = window.innerHeight;
        var showTop = showPX[i].getBoundingClientRect().top;
        var showPoint = 100;

        if(showTop<windowHeight-showPoint){
            showPX[i].classList.add('active-p-x')
        }else{
            showPX[i].classList.remove('active-p-x')
        }
    }

    for(var i = 0 ; i<showNY.length;i++){
        var windowHeight = window.innerHeight;
        var showTop = showNY[i].getBoundingClientRect().top;
        var showPoint = 100;

        if(showTop<windowHeight-showPoint){
            showNY[i].classList.add('active-n-y')
        }else{
            showNY[i].classList.remove('active-n-y')
        }
    }

    for(var i = 0 ; i<showPY.length;i++){
        var windowHeight = window.innerHeight;
        var showTop = showPY[i].getBoundingClientRect().top;
        var showPoint = 100;

        if(showTop<windowHeight-showPoint){
            showPY[i].classList.add('active-p-y')
        }else{
            showPY[i].classList.remove('active-p-y')
        }
    }

    for(var i = 0 ; i<show.length;i++){
        var windowHeight = window.innerHeight;
        var showTop = show[i].getBoundingClientRect().top;
        var showPoint = 100;

        if(showTop<windowHeight-showPoint){
            show[i].classList.add('active')
        }else{
            show[i].classList.remove('active')
        }
    }
}