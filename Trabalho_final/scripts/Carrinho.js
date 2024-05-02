var carrinho = JSON.parse(localStorage.getItem('carrinho'));

function carregarItensDoCarrinho(carrinho) {
    const cards = document.querySelector('tbody');

    cards.innerHTML = '';

    carrinho.forEach(item => {
        const qtd = parseInt(item.quantidade)
        const itemHTML = `
            <div class="item-do-carrinho">
                <img class="imagem" src="${item.imagem}" alt="${item.titulo}">
                <div class="nome" >${item.titulo}</div>
                <div class="preco" >R$ ${item.preco.toFixed(2)}</div>
                <label for="quantidade-${item.titulo}">Quantidade:</label>
                <input type="number" id="quantidade-${item.titulo}" name="quantidade-${item.titulo}" value="${qtd}" min="1">
            </div>
        `;
        cards.innerHTML += itemHTML;
    });
}
document.addEventListener('DOMContentLoaded', function() {
    if (carrinho.length > 0) {
        carregarItensDoCarrinho(carrinho);
    } else {
    }

}
)




// const botaoAdicionarCarrinho = document.querySelector("button");
// botaoAdicionarCarrinho.addEventListener("click", colocarNoCarrinho);

// function colocarNoCarrinho(){
//     const nome = document.querySelector("product-title").textContent;

//     const valorString = document.querySelector("product-price").textContent;
//     const valor = Number(valorString);

//     const quantidadeString = document.querySelector("input").ariaValueMax;
//     const quantidade = Number(quantidadeString);
    
//     const produto = {
//         nome,
//         valor,
//         quantidade,
//     };

//     const carrinhoString = localStorage.getItem('carrinho');
//     const carrinho = JSON.parse(carrinhoString);
    
//     carrinho.push(produto);
//     carrinho.push(produto);
    

//     localStorage.setItem('carrinho', carrinho);

// }

