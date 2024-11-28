function showModal() {
    // Exibe o modal e a tela de fundo escurecida
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById('modal').style.display = 'block';

    // Após 3 segundos, redireciona para outra página
    setTimeout(function() {
        window.location.href = "outra_pagina.html"; // Altere para a URL desejada
    }, 3000); // 3000 milissegundos = 3 segundos
}

function copyToClipBoard() {
    // Seleciona o texto do elemento com o ID 'frame'
    const textToCopy = document.getElementById("frame").innerText;

    // Cria um elemento de texto temporário
    const tempInput = document.createElement("textarea");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    // Seleciona e copia o texto
    tempInput.select();
    document.execCommand("copy");

    // Remove o elemento temporário
    document.body.removeChild(tempInput);

}