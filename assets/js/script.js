const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    const top = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('rotated');
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

navlinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('rotated');
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
});


document.getElementById("copyEmail").addEventListener("click", function () {
    const email = "gustavopontes.dev@gmail.com";
    navigator.clipboard.writeText(email).then(function () {
        const tooltip = document.getElementById("tooltip");
        tooltip.classList.add("show-tooltip");
        setTimeout(function () {
            tooltip.classList.remove("show-tooltip");
        }, 2000);
    }, function (err) {
        console.error("Erro ao copiar o email:" + err);
    });
});