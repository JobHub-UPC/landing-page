function Testimonio_Mostrartexto(elemento, textoAdicional) {
    var textoAdicionalElement = elemento.querySelector('.Testimonio-texto-adicional');
    textoAdicionalElement.innerHTML = textoAdicional;
    textoAdicionalElement.style.opacity = '1';  // Make it visible
    textoAdicionalElement.style.pointerEvents = 'auto';  // Enable interactions
    elemento.classList.add('expanded');
}

function Testimonio_Ocultartexto(elemento) {
    var textoAdicionalElement = elemento.querySelector('.Testimonio-texto-adicional');
    textoAdicionalElement.style.opacity = '0';  // Hide text smoothly
    textoAdicionalElement.style.pointerEvents = 'none';  // Disable interaction
    textoAdicionalElement.innerHTML = '';  // Clear text to avoid lingering content
    elemento.classList.remove('expanded');
}
