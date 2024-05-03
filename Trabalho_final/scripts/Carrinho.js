var carrinho = JSON.parse(localStorage.getItem('carrinho'));
console.log('itens recebidos: ', carrinho)

function carregarItensDoCarrinho(carrinho) {
    const cards = document.querySelector('tbody');
    const totalElement = document.getElementById('total');
    let totalValor = 0.0;

    cards.innerHTML = '';

    carrinho.forEach(item => {
        const qtd = parseInt(item.quantidade);
        const total = parseFloat(item.quantidade * item.preco)
        const itemHTML = `
            <tr class="item-do-carrinho">
                <td>
                    <img class="imagem" src="${item.imagem}" alt="${item.titulo}">
                    <div class="nome">${item.titulo}</div>
                </td>
                <td class="preco">R$ ${item.preco.toFixed(2)}</td>
                <td>
                    <label for="quantidade-${item.titulo}">Quantidade:</label>
                    <input type="number" id="quantidade-${item.titulo}" name="quantidade-${item.titulo}" value="${qtd}" min="1">
                </td>
            </tr>
        `;
        totalValor += total;
        cards.innerHTML += itemHTML;
    });

    totalElement.textContent = `Total: R$ ${totalValor.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', function() {
    if (carrinho.length > 0) {
        carregarItensDoCarrinho(carrinho);
    } else {
        // Código para lidar com o carrinho vazio, se necessário
    }
});