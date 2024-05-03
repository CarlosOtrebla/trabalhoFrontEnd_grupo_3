function habilitarBotao() {
    var senhaInput = document.getElementById("senha");
    var entrarBotao = document.getElementById("entrar");
    var usuario = document.getElementById("username")

  
    if (senhaInput.value.length >= 4 && usuario.value.trim() !== "") {
        entrarBotao.disabled = false; 
    } else {
        entrarBotao.disabled = true;
    }
}

