(function(){
    emailjs.init("RhJYZe1ukCn4h5j0v");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_scybzog';
    const templateID = 'template_ntfvo7j';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            let formsMessages = document.getElementById('form-messages');
            formsMessages.innerHTML = 'Mensagem enviada com sucesso!';
            formsMessages.classList.add('success-message');
            document.getElementById('contact-form').reset();
        }, (err) => {
            let formsMessages = document.getElementById('form-messages');
            formsMessages.innerHTML = 'Falha ao enviar a mensagem. Por favor, tente novamente.';
            formsMessages.classList.add('error-message');
        });
});