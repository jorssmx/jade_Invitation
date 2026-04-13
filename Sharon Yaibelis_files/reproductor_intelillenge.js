document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('toggleButton');
    const music = document.getElementById('music');
    const soundIcon = document.getElementById('soundIcon');
    let pausedByUser = false;
    let pausedByVisibility = false;
    const iconPaths = {
        play: 'M8 5v14l11-7z',
        music: 'M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z',
    };

    function setIcon(estado) {
        const path = soundIcon.querySelector('path') || soundIcon.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'path'));
        path.setAttribute('d', estado === 'music' ? iconPaths.music : iconPaths.play);
        path.setAttribute('fill', 'currentColor');
    }

    function updateUI() {
        const isPlaying = !music.paused;
        setIcon(isPlaying ? 'music' : 'play');
        soundIcon.classList.toggle('boom', isPlaying);
    }

    function toggleMusic() {
        if (!music.paused) {
            pausedByUser = true;
            music.pause();
            updateUI();
            return;
        }

        music.play()
            .then(() => {
                pausedByUser = false;
                pausedByVisibility = false;
                updateUI();
            })
            .catch(updateUI);
    }

    music.volume = 0.7;

    button.addEventListener('click', toggleMusic);
    music.addEventListener('play', () => {
        pausedByUser = false;
        pausedByVisibility = false;
        updateUI();
    });
    music.addEventListener('pause', updateUI);
    music.addEventListener('ended', updateUI);
    updateUI();

    // Detectar cuando se oculta la página
    document.addEventListener("visibilitychange", function () {
        if (document.hidden && !music.paused) {
            pausedByVisibility = true;
            music.pause();
            updateUI();
        } else if (!document.hidden && pausedByVisibility && !pausedByUser) {
            pausedByVisibility = false;
            music.play()
                .then(() => {
                    updateUI();
                })
                .catch((err) => {
                    // En caso de que el navegador bloquee el autoplay
                    console.warn("El navegador bloqueó la reproducción automática:", err);
                    updateUI();
                });
        }
    });
});
