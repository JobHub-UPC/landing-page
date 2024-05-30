document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const casos = document.querySelectorAll('.Caso');
    const totalCasos = casos.length;
    
    const btnAtras = document.getElementById('flechaAtras');
    const btnAdelante = document.getElementById('flechaAdelante');

    function mostrarCaso(index) {
        casos.forEach((caso, i) => {
            caso.classList.remove('active');
            caso.style.display = 'none'; // Asegura que todos los casos estén ocultos inicialmente
        });
        casos[index].style.display = 'block'; // Asegura que el caso activo esté visible
        setTimeout(() => {
            casos[index].classList.add('active');
        }, 200); // Añade una pequeña demora para que la transición sea visible
    }


    btnAdelante.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalCasos;
        mostrarCaso(currentIndex);
    });

    btnAtras.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalCasos) % totalCasos;
        mostrarCaso(currentIndex);
    });

    mostrarCaso(0); // Muestra el primer caso al cargar
});