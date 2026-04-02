document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('toggleButton');
    const music = document.getElementById('music');
    const soundIcon = document.getElementById('soundIcon');
    let isPlaying = true;

    function setBocinaIcon(nombre) {
        const url = `../../../Iconos/${nombre}.png`;
        soundIcon.style.maskImage = `url(${url})`;
        soundIcon.style.webkitMaskImage = `url(${url})`;
    }

    function toggleMusic() {
        if (isPlaying) {
            music.pause();
            setBocinaIcon('mute');
        } else {
            music.play();
            setBocinaIcon('play');
        }
        isPlaying = !isPlaying;
    }

    music.volume = 0.7;

    // Inicializar con sonido activado
    setBocinaIcon('play');

    button.addEventListener('click', toggleMusic);

    // Detectar cuando se oculta la página
    document.addEventListener("visibilitychange", function () {
        if (document.hidden && isPlaying) {
            music.pause();
            setBocinaIcon('mute');
            isPlaying = false;
        } else if (!document.hidden && !isPlaying) {
            // Intenta reanudar la música
            music.play()
                .then(() => {
                    setBocinaIcon('play');
                    isPlaying = true;
                })
                .catch((err) => {
                    // En caso de que el navegador bloquee el autoplay
                    console.warn("El navegador bloqueó la reproducción automática:", err);
                });
        }
    });
});
