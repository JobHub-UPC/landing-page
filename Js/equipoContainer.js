const cards = [
    {
        photo: 'img/AlejandroCuadros.png',
        role: 'Alejandro Cuadros',
        description: 'Soy Freddy Alejandro Cuadros Contreras, estudió la carrera de Ciencias de la Computación en UPC. En mi opinión poseo habilidades enfocadas al análisis de datos y programación, ya que tengo conocimientos en lenguajes de programación como Python, C + + y SQL. Asimismo, puedo adaptarme fácilmente a diversas situaciones en mis equipos de trabajo.'
    },
    {
        photo: 'img/AndresCarbajal.png',
        role: 'Andres Carbajal',
        description: 'Soy Andrés Carbajal, estoy estudiando la carrera de Ciencias de la Computación. Actualmente me encuentro en el ciclo 5 y estoy llevando el curso de IHC y Programación Web. Tengo experiencia en C++ y en Python. Contribuiré ayudando al equipo en cualquier situación. '
    },
    {
        photo: 'img/JimenaQuintana.png',
        role: 'Jimena Quintana',
        description: 'Soy una estudiante de la carrera de Ciencias de la Computación. Durante mi formación, he adquirido conocimientos en HTML y CSS, usados en el campo del desarrollo web. Además, en la universidad, he aprendido el lenguaje de programación C++, el cual me ha permitido desarrollar habilidades en programación orientada a objetos. Me considero una persona comprometida y apasionada por la tecnología, siempre estoy en búsqueda de nuevos desafíos y oportunidades de aprendizaje para expandir mis conocimientos.  '
    },
    {
        photo: 'img/JoaquinRamirez.png',
        role: 'Joaquin Ramirez',
        description: 'Estudió la carrera de Ciencias de la Computación por pasión a la creación de proyectos en la nueva era digital. He desarrollado mis habilidades dentro del lenguaje de programación de C + +, además de recientemente adentrarme a Python. Considero que mi sentido de responsabilidad es fuerte en la colaboración en equipos, por lo que me veo bastante capaz de apoyar en el desarrollo de este proyecto cuando exista la necesidad.'
    }
];

let currentIndex = 0;

const cardElement = document.getElementById('card');
const photoElement = document.getElementById('team-photo');
const roleElement = document.getElementById('role-placeholder');
const descriptionElement = document.getElementById('description-placeholder');

function updateCard(index) {
    cardElement.classList.remove('active');
    setTimeout(() => {
        const card = cards[index];
        photoElement.src = card.photo;
        roleElement.textContent = card.role;
        descriptionElement.textContent = card.description;
        cardElement.classList.add('active');
    }, 450); // La mitad del tiempo de transición para que la salida y entrada se superpongan ligeramente
}

document.getElementById('prev-button').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCard(currentIndex);
});

document.getElementById('next-button').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCard(currentIndex);
});

// Inicializa la primera tarjeta
updateCard(currentIndex);