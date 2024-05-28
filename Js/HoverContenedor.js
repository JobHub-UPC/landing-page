function mostrartexto(elemento, textoAdicional) {
    var textoAdicionalElement = elemento.querySelector('.texto-adicional');
    textoAdicionalElement.innerHTML = textoAdicional;
    textoAdicionalElement.style.display = 'block';
    elemento.classList.add('expanded');
}

function ocultartexto(elemento) {
    elemento.classList.remove('expanded');
    var textoAdicionalElement = elemento.querySelector('.texto-adicional');
    textoAdicionalElement.style.display = 'none'; // Hide text when not hovered
    textoAdicionalElement.innerHTML = ''; // Clear text to avoid lingering content
}