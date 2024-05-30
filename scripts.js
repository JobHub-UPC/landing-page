document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', function () {
            const respuesta = this.querySelector('p');
            const es_visible = respuesta.style.display === 'block';
            respuesta.style.display = es_visible ? 'none' : 'block';
        });
    });
});
