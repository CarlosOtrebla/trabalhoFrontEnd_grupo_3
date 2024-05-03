const carrinho = [];
const qtdItensCarrinho = carrinho.length;
const localCarrinho = document.querySelector('.carrinho')

let produtosContainer = document.querySelector("#idCardProduto");
  fetch("produtos.json")
    .then(response => response.json())
    .then(dados => {
      dados.produtos.forEach(produto => {
        let divProduto = document.createElement("div");
        divProduto.classList.add("product-card");

        let imagemProduto = document.createElement("img");
        imagemProduto.classList.add("product-image");
        imagemProduto.src = produto.imagem;
        imagemProduto.alt = "Foto do produto";

        let descricaoProduto = document.createElement("p");
        descricaoProduto.classList.add("product-title");
        descricaoProduto.textContent = produto.descricao;

        let precoProduto = document.createElement("p");
        precoProduto.classList.add("product-price");
        precoProduto.textContent = `Preço: R$ ${produto.preco}`;

        let botaoComprar = document.createElement("button");
        botaoComprar.classList.add("add-to-cart-btn");
        botaoComprar.textContent = "Adicionar ao Carrinho";
        botaoComprar.onclick = function botaoadcCarrinho(event) {
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

        divProduto.appendChild(imagemProduto);
        divProduto.appendChild(descricaoProduto);
        divProduto.appendChild(precoProduto);
        divProduto.appendChild(botaoComprar);

        produtosContainer.appendChild(divProduto);
      });
    })
    .catch(error => console.error("Erro ao carregar os produtos:", error));