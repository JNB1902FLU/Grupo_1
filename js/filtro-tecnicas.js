document.addEventListener("DOMContentLoaded", function() {
    inputBusca = document.getElementById("busca-evento");
    eventos = document.querySelectorAll(".evento-card");

    inputBusca.addEventListener("input", function(){
        termo = inputBusca.value.toLowerCase();

        eventos.forEach(function(evento) {
            titulo = evento.querySelector(".titulo-evento").textContent.toLowerCase();
            descricao = evento.querySelector("p").textContent.toLowerCase();

            corresponde = titulo.includes(termo) || descricao.includes(termo);
            if (corresponde) {
            evento.style.display = "block";
            } else {
            evento.style.display = "none";
            }
        });
    });
});