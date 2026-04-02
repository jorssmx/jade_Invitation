document.addEventListener("DOMContentLoaded", () => {
    const generarItinerario = (eventos) => {
        const contenedor = document.querySelector(".itinerario > div"); // Contenedor donde van los eventos

        eventos.forEach((evento, index) => {
            // Alterna entre izquierda y derecha según el índice
            const posicion = index % 2 === 0 ? "izquierda" : "derecha";

            // Crea el HTML dinámico para cada evento
            const eventoHTML = `
                <div class="evento ${posicion}">
                    ${posicion === "izquierda" ? `
                        <div class="icono show-n-x">
                            <div class="circulo">
                                <div class="icono-itinerario" data-icono="${evento.icono}"></div>
                            </div>
                        </div>
                        <div class="item show-p-x">
                            <h4 class="nombre">${evento.nombre}</h4>
                            <p class="hora">${evento.hora}</p>
                        </div>
                    ` : `
                        <div class="item show-n-x">
                            <h4 class="nombre">${evento.nombre}</h4>
                            <p class="hora">${evento.hora}</p>
                        </div>
                        <div class="icono show-p-x">
                            <div class="circulo">
                                <div class="icono-itinerario" data-icono="${evento.icono}"></div>
                            </div>
                        </div>
                    `}
                </div>
            `;

            // Inserta el HTML en el contenedor
            contenedor.innerHTML += eventoHTML;
        });
    };

    // Llama a la función con los datos de eventos
    generarItinerario(eventos);

    // Aplica las máscaras a los iconos
    const aplicarMascara = (clase) => {
        const elementos = document.querySelectorAll(`.${clase}`);
        elementos.forEach((elemento) => {
            const nombreIcono = elemento.getAttribute("data-icono");
            if (nombreIcono) {
                const rutaIcono = `../../../Iconos/Itinerario/${nombreIcono}.png`;
                elemento.style.maskImage = `url('${rutaIcono}')`;
                elemento.style.webkitMaskImage = `url('${rutaIcono}')`;
            }
        });
    };

    aplicarMascara("icono-itinerario");
});
