document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los elementos con la clase `icono-inv`
    const iconos = document.querySelectorAll(".ornamento-color");

    iconos.forEach((icono) => {
        // Obtiene el valor del atributo `data-icono`
        const nombreIcono = icono.getAttribute("data-icono");

        if (nombreIcono) {
            // Define la ruta de la máscara en base al nombre del icono
            const rutaIcono = `../../../Iconos/${nombreIcono}.png`;

            // Aplica la máscara como estilo en línea
            icono.style.maskImage = `url('${rutaIcono}')`;
            icono.style.webkitMaskImage = `url('${rutaIcono}')`;
        }
    });
});            