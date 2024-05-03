const carrinho = [];
const qtdItensCarrinho = carrinho.length;
const localCarrinho = document.querySelector('.carrinho')

function carregarProduto() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var produtos = JSON.parse(xhr.responseText).produtos;

                // Exibe cada produto em sua respectiva div
                for (var i = 0; i < produtos.length; i++) {
                    exibirProduto(produtos[i], 'produto' + i); // Passa o ID da div
                }
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
    if (produtoDiv) {
        produtoDiv.innerHTML = '';
        
        // Cria os elementos HTML para exibir o produto
        var imagem = document.createElement('img');
        imagem.src = produto.imagem;
        imagem.alt = "Foto do produto";
        imagem.style.maxWidth = '300px';
        imagem.style.maxHeight = '300px';
        imagem.style.width = '100%'; // Garante que a largura seja ajustada se a imagem for menor que 400px
        imagem.style.height = 'auto'; // Garante que a altura seja ajustada se a imagem for menor que 400px
        produtoDiv.appendChild(imagem);

        var descricao = document.createElement('p');
        descricao.textContent = produto.descricao;
        produtoDiv.appendChild(descricao);

        var preco = document.createElement('p');
        preco.textContent = 'Preço: R$ ' + produto.preco.toFixed(2);
        produtoDiv.appendChild(preco);
        
        // Cria o botão "Adicionar ao Carrinho"
        var botao = document.createElement('button');
        botao.classList.add('add-to-cart-btn');
        botao.textContent = 'Adicionar ao Carrinho';
        botao.style.backgroundColor = 'rgba(64, 64, 64, 1)'; // Exemplo: define o fundo do botão como azul
        botao.style.color = 'white'; // Exemplo: define a cor do texto do botão como branca
        botao.dataset.productId = produto.id; // Define o ID do produto como um atributo de dados
        botao.onclick = function botaoadcCarrinho(event) {
            event.preventDefault();
            const imagem = produto.imagem;
            const titulo = produto.descricao;
            const preco = produto.preco;

            const produtoExistente = carrinho.find(item => item.titulo === titulo);

            if (produtoExistente) {
                produtoExistente.quantidade++;
                console.log(produtoExistente.quantidade)
            } else {
                carrinho.push(
                    {
                        imagem: imagem,
                        titulo: titulo,
                        preco: preco,
                        quantidade: 1
                    }
                );
            };
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            let qtdItensCarrinho = carrinho.length;
            localCarrinho.textContent = qtdItensCarrinho.toString();
        };;
        produtoDiv.appendChild(botao);
    } else {
        console.error('Elemento com o ID ' + idDiv + ' não encontrado.');
    }
}

// Chamada para carregar os produtos quando a página é carregada
window.onload = function() {
    carregarProduto();
};


