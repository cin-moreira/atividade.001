const botao = document.querySelector("#botao");

botao.addEventListener("click", mostrarMensagem);

function mostrarMensagem () {
    const mensagemExistente = document.querySelector(".mensagem");
    if (!mensagemExistente) {
        const mensagemAparece = document.createElement ("p");
        mensagemAparece.textContent = "O segredo da força está na vontade."
        mensagemAparece.classList.add("mensagem");
        botao.insertAdjacentElement("afterend", mensagemAparece);

        setTimeout(function(){
            mensagemAparece.remove();
        }, 3000);
    }
}

