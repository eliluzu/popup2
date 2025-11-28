document.addEventListener('DOMContentLoaded', () => {
    const popupOverlay = document.getElementById('popup-overlay');
    const closeButton = document.getElementById('close-popup');
    // popupContent ya no es tan relevante para la animación de contenido, pero se puede mantener
    // const popupContent = document.getElementById('popup-content'); 

    setTimeout(() => {
        popupOverlay.style.display = 'flex';
        popupOverlay.classList.add('active');
    }, 500);

    const closePopup = () => {
        popupOverlay.classList.remove('active');
        setTimeout(() => {
            popupOverlay.style.display = 'none';
        }, 300);
    };

    closeButton.addEventListener('click', closePopup);

    popupOverlay.addEventListener('click', (event) => {
        if (event.target === popupOverlay) {
            closePopup();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && popupOverlay.classList.contains('active')) {
            closePopup();
        }
    });

    const nuevaHerramientaButton = document.querySelector('.btn-nueva-herramienta');
    nuevaHerramientaButton.addEventListener('click', (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del enlace si no hay href
        // window.location.href = 'https://tudominio.com/nueva-herramienta'; // Ejemplo de redirección
        closePopup();
    });
});