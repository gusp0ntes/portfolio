// Seleção de elementos do DOM
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navlinks = document.querySelectorAll('header nav a');

// Função para ativar link de navegação ao rolar a página
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });
};

// Toggle para o ícone do menu e navbar
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Fechar navbar ao clicar em um link
navlinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
});
