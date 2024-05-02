<<<<<<< HEAD


//DOMContentLoaded faz com que o que está a partir daqui carregue somente depois que o html for carregado, cuidado com o que botar aqui.
document.addEventListener('DOMContentLoaded', function () {
    const botoesCarrinho = document.querySelectorAll('.add-to-cart-btn'); //busca pela classe, caso for criar outro botão, lembrar de não criar com a mesma classe.

    botoesCarrinho.forEach(function (botao) {
        botao.addEventListener('click', function (event) { //detecta o click no botão específico da página.
            const botaoClicado = event.target;
            const paidoBotão = botaoClicado.closest('.product-card'); //detecta quem é o pai do botão clicado, tornando possível operar tudo que tá dentro daquele div no html.

            if (paidoBotão) {
                const precoElemento = paidoBotão.querySelector('.product-price');
                if (precoElemento) {
                    const valorPreco = precoElemento.textContent.trim(); // valor usado para visualização.
                    const valorPrecoTratado = parseFloat(valorPreco.replace('R$', '').replace(',', '.').trim()) //favor não tirar o replace de , para .(é sério, ele ignora os decimais sem isso.)
                    console.log('Preço do produto:', valorPreco);
                    console.log('Preço do produto tratado para operações:', valorPrecoTratado.toFixed(2)); //toFixed(2) faz com que os 2 números da casa decimal sejam exibidos no console. independente se for 0.
                } else {
                    console.log('Elemento de preço não encontrado.');
                }
            } else {
                console.log('Produto não encontrado.');
            }
        });
    });
});
=======
//DOMContentLoaded faz com que o que está a partir daqui carregue somente depois que o html for carregado, cuidado com o que botar aqui.
document.addEventListener('DOMContentLoaded', function() {
    const cardsProdutos = document.querySelectorAll('.product-card');
    const produtos = [];
    const carrinho = [];
    const qtdItensCarrinho = carrinho.length;
    const localCarrinho = document.querySelector('.carrinho')

    localCarrinho.textContent = qtdItensCarrinho.toString()

    cardsProdutos.forEach(function(produto) {

        const imagem = produto.querySelector('.product-image').src;
        const titulo = produto.querySelector('.product-title').textContent;
        const preco = produto.querySelector('.product-price').textContent.replace('R$', '').replace(',', '.').trim().parseFloat;

        produtos.push(
            {
            imagem: imagem,
            titulo: titulo,
            preco: preco,
            }
        );
    });

    const botoesCarrinho = document.querySelectorAll('.add-to-cart-btn'); //busca pela classe, caso for criar outro botão, lembrar de não criar com a mesma classe.

    botoesCarrinho.forEach(function(botao) {
        botao.addEventListener('click', function(event) { //detecta o click no botão específico da página.
            const botaoClicado = event.target;
            const paidoBotao = botaoClicado.closest('.product-card'); //detecta quem é o pai do botão clicado, tornando possível operar tudo que tá dentro daquele div no html.
            
            const imagem = paidoBotao.querySelector('.product-image').src;
            const titulo = paidoBotao.querySelector('.product-title').textContent;
            const preco = parseFloat(paidoBotao.querySelector('.product-price').textContent.replace('R$', '').replace(',', '.').trim());
            
            // Verifica se o produto já tá no carrinho
            const produtoExistente = carrinho.find(item => item.titulo === titulo);
            

            // Se já tá no carrinho, só adiciona mais um.
            if (produtoExistente) {
                produtoExistente.quantidade++;
                console.log(produtoExistente.quantidade)
            } else {
                // Caso contrário, adiciona o produto ao array
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
            localCarrinho.textContent = qtdItensCarrinho.toString() 
        });
    });
});
>>>>>>> 42cabe60c7923a05e540cb79406c8aa014f8150c
