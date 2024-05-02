function carregarProduto() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var produtos = JSON.parse(xhr.responseText).produtos;

                // Exibe cada produto em sua respectiva div
                exibirProduto(produtos[0], 'produto');
                exibirProduto(produtos[1], 'produto1');
                exibirProduto(produtos[2], 'produto2');
            } else {
                console.error('Erro ao carregar produtos: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', '/produtos.json', true);
    xhr.send();
}

function exibirProduto(produto, idDiv) {
    var produtoDiv = document.getElementById(idDiv);
    produtoDiv.innerHTML = ''; 
    
    var imagem = document.createElement('img');
    imagem.src = produto.imagem;
    produtoDiv.appendChild(imagem);

    var descricao = document.createElement('p');
    descricao.textContent = produto.descricao;
    produtoDiv.appendChild(descricao);

    var preco = document.createElement('p');
    preco.textContent = 'Preço: R$ ' + produto.preco.toFixed(2);
    produtoDiv.appendChild(preco);
}

// Chamada para carregar os produtos quando a página é carregada
window.onload = function() {
    carregarProduto();
};

