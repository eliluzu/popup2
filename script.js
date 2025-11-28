document.addEventListener('DOMContentLoaded', () => {
    const popupOverlay = document.getElementById('popup-overlay');
    const closeButton = document.getElementById('close-popup');
    // popupContent ya no es tan relevante para la animación de contenido, pero se puede mantener
    // const popupContent = document.getElementById('popup-content'); 

    // Muestra el popup con un ligero retraso y añade la clase 'active' para la animación
    setTimeout(() => {
        popupOverlay.style.display = 'flex';
        popupOverlay.classList.add('active');
    }, 500);

    const closePopup = () => {
        // Remueve la clase 'active' para iniciar la animación de cierre (ej. fade out)
        popupOverlay.classList.remove('active');
        // Oculta el popup completamente después de que termine la animación (300ms)
        setTimeout(() => {
            popupOverlay.style.display = 'none';
        }, 300);
    };

    // Evento para cerrar el popup haciendo clic en el botón de cierre
    closeButton.addEventListener('click', closePopup);

    // Evento para cerrar el popup haciendo clic fuera del contenido (en el overlay)
    popupOverlay.addEventListener('click', (event) => {
        if (event.target === popupOverlay) {
            closePopup();
        }
    });

    // Evento para cerrar el popup presionando la tecla 'Escape'
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && popupOverlay.classList.contains('active')) {
            closePopup();
        }
    });
});