document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.input');
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Envie seu Cadastro!';
    submitButton.className = 'envio';

    const linkSection = document.querySelector('main section:last-of-type');
    linkSection.innerHTML = '';
    linkSection.appendChild(submitButton);

    submitButton.addEventListener('click', function() {
        const algumVazio = Array.from(inputs).some(input => input.value.trim() === '');

        if (algumVazio) {
            alert('Por favor, preencha todos os campos antes de enviar o cadastro.');
        } else {
            window.location.href = 'calendario2.html';
        }
    });
});
