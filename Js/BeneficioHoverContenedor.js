function Beneficio_Mostrartexto(elemento, textoAdicional) {
    var textoAdicionalElement = elemento.querySelector('.Beneficio-texto-adicional');
    textoAdicionalElement.innerHTML = textoAdicional;
    textoAdicionalElement.style.display = 'block';
    elemento.classList.add('expanded');
}

function Beneficio_Ocultartexto(elemento) {
    elemento.classList.remove('expanded');
    var textoAdicionalElement = elemento.querySelector('.Beneficio-texto-adicional');
    textoAdicionalElement.style.display = 'none'; // Hide text when not hovered
    textoAdicionalElement.innerHTML = ''; // Clear text to avoid lingering content
}