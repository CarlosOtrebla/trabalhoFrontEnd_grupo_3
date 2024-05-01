function habilitarBotao() {
    var senhaInput = document.getElementById("senha");
    var entrarBotao = document.getElementById("entrar");
    var usuario = document.getElementById("username")

    // Verifica se a senha tem 8 ou mais caracteres
    if (senhaInput.value.length >= 8 && usuario.value.trim() != "") {
        entrarBotao.disabled = false; // Habilita o botão
    } else {
        entrarBotao.disabled = true; // Desabilita o botão
    }
}