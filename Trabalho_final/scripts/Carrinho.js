const botaoAdicionarCarrinho = document.querySelector("button");
botaoAdicionarCarrinho.addEventListener("click", colocarNoCarrinho);

function colocarNoCarrinho(){
    const nome = document.querySelector("product-title").textContent;

    const valorString = document.querySelector("product-price").textContent;
    const valor = Number(valorString);

    const quantidadeString = document.querySelector("input").ariaValueMax;
    const quantidade = Number(quantidadeString);
    
    const produto = {
        nome,
        valor,
        quantidade,
    };

    const carrinhoString = localStorage.getItem('carrinho');
    const carrinho = JSON.parse(carrinhoString);
    
    carrinho.push(produto);
    carrinho.push(produto);
    

    localStorage.setItem('carrinho', carrinho);

}

