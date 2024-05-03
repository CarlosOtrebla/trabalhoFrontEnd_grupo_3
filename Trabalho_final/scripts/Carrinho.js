var carrinho = JSON.parse(localStorage.getItem('carrinho'));
console.log('itens recebidos: ', carrinho)

function carregarItensDoCarrinho(carrinho) {
    const cards = document.querySelector('tbody');
    const totalValor = 0.0 //servindo para operação, mas ainda não utilziada.
    
    cards.innerHTML = '';

    carrinho.forEach(item => {
        const qtd = parseInt(item.quantidade);
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