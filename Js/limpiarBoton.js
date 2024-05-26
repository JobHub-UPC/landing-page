document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); //Evita el envio predeterminado del forms
        
        //Limpiar los campos
        const inputFields = document.querySelectorAll('.search-container input');
        inputFields.forEach(function(input){
            input.value = '';
        });
    });
});