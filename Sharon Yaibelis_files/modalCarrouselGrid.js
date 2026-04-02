// modalCarrousel.js
const container = document.querySelector(".container-grid");
const images = Array.from(container.querySelectorAll("img.object-grid"));
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;
const MIN_TOUCH_DISTANCE = 50;

// Abrir modal con imagen ampliada
function openModal(index) {
    modalImg.src = images[index].src;
    modal.style.display = "block";
    currentIndex = index;
}

// Cerrar modal
function closeModal() {
     modal.style.display = "none";
     modalImg.style.transform = "translate(-50%, -50%) scale(1)";
}

// Event listeners para abrir y cerrar el modal
images.forEach((image, index) => {
    image.addEventListener("click", () => {
        openModal(index);
    });
});

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Navegación del carrusel dentro del modal
document.addEventListener("keydown", (e) => {
    if (modal.style.display === "block") {
        if (e.key === "ArrowRight") {
            navigateCarousel(1);
        } else if (e.key === "ArrowLeft") {
            navigateCarousel(-1);
        }
    }
});

// Función para navegar el carrusel dentro del modal
function navigateCarousel(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    modalImg.style.transform = "translate(-50%, -50%) scale(0.1)"; // Escalar durante la transición
    modalImg.addEventListener("transitionend", () => {
      modalImg.src = images[currentIndex].src;
      modalImg.style.transform = "translate(-50%, -50%) scale(1)"; // Restaurar la escala después de cambiar la imagen
    }, { once: true }); // El evento "transitionend" se elimina automáticamente después de ejecutarse una vez
  }

// Event listeners para los controles de flecha en el modal
// prevBtn.addEventListener("click", () => navigateCarousel(-1));
// nextBtn.addEventListener("click", () => navigateCarousel(1));

// Funciones para manejar eventos táctiles
function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
}

function handleTouchMove(e) {
    touchEndX = e.touches[0].clientX;
}

function handleTouchEnd() {
    const touchDistance = touchEndX - touchStartX;
    if (touchDistance > MIN_TOUCH_DISTANCE) {
        navigateCarousel(-1); // Desplazamiento hacia la izquierda
    } else if (touchDistance < -MIN_TOUCH_DISTANCE) {
        navigateCarousel(1); // Desplazamiento hacia la derecha
    }
    // Reiniciar el desplazamiento al finalizar el toque
    touchStartX = 0;
    touchEndX = 0;
}

// Event listeners para eventos táctiles
modal.addEventListener("touchstart", handleTouchStart);
modal.addEventListener("touchmove", handleTouchMove);
modal.addEventListener("touchend", handleTouchEnd);
