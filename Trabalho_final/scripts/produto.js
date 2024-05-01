const produtos = [
  {id: 0,
  img: 'link da imagem',
  descricao: 'descricao do produto',
  valor: 1200
},
]


//DOMContentLoaded faz com que o que está a partir daqui carregue somente depois que o html for carregado, cuidado com o que botar aqui.
document.addEventListener('DOMContentLoaded', function() {
  const botoesCarrinho = document.querySelectorAll('.add-to-cart-btn'); //busca pela classe, caso for criar outro botão, lembrar de não criar com a mesma classe.

  botoesCarrinho.forEach(function(botao) {
      botao.addEventListener('click', function(event) { //detecta o click no botão específico da página.
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