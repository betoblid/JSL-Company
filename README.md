# JSL - Company

É um E-commerce completo, onde poderá ver os produtos, colocá-los no carrinho e com aba de favoritos, só não poderá comprar o produto, pois não tem conexão com api de pagamentos e a api de produtos vem de uma api do mercado livre.

![ilustração da pagina inicial](https://a.imagem.app/oIOK8J.jpeg)
## Documentação

Um E-commerce feito com o objetivo de treinar a criação de um E-commerce do zero com futura implementação é criar uma propria api de produtos e conectar com uma api de pagamentos para simular pagamentos e fazer um Endpoint de login.

O site é bem simples de usar e contando com um vídeo no You Tube explicando como se usa o nosso site e um vídeo no linkedin com musica interativa.

### Pagina inicial

Na página inicial contamos com toda a interface de qualquer E-commerce, é simples de usar, temos uma seção com o Cabeçalho do site onde se encontra todas as informações de navegação e esse componente header se encontra em todas as paginas, temos um *Banner* que possui um componente *carrossel*, que recebe as props necessária para que possa ser acessível, o carrossel para ser reutilizado mais de 1 vez, Temos uma aba onde se encontra todas as categorias do site disponível, e cada categoria conta com 50 produtos, após categoria temos um componente ListaCard onde consegue-se agrupar todos os cards produtos na ordem que queremos e dentro do componente ListCard receber uma props Children para que possamos percorrer os produtos e renderizar na tela pelo componente CardProduct, e após os cards produtos vem o Roda pé onde tem links úteis para a navegação nas redes sociais da loja, portfólio de quem a criou e o carrinho da loja e favoritos;

![ilustração da pagina inicial](https://a.imagem.app/oIOK8J.jpeg)

### página Categoria

A página categoria conta com os Componentes Header que já comentamos e o footer,
de baixo do header se encontra os componentes container, dentro dele temos uma props chamada children onde recebe o componente listcard para dentro dele podemos percorrer a lista de produtos e renderizar no cardProduct.

![pagina categoria](https://a.imagem.app/oIO5sr.jpeg)

### Página favoritos

A pagina Favoritos conta com os componentes Header que já comentamos e o footer,
basicamente é semelhante a estrutura da página Categoria a única coisa que muda são as informações que está vendo de um hook que criamos para ter functions para manipular nosso hook ListCardFavorit onde fica os produtos que foi apertado o coraçãozinho que se encontra ao lado esquerdo da sua tela. Após clicado, no lado de cima terá sua cor alterada. 

![Pagina favoritos](https://a.imagem.app/oIOw7l.jpeg)

### Pagina de comprar

Essa aba tem os mesmos componentes, a página Favoritos conta com os Componentes Header que já comentamos e o footer, Aqui apresenta o valor do produto e os produtos escolhidos tanto podemos removê-los como podemos adicionar mais produtos no carrinho, temos valor do produto e o total com o frete também já adicionado.

![Pagina de comprar](https://a.imagem.app/oIOdtE.jpeg)

### Página de login

A página de login se encontra no processo de criação, mas pode ser vista no site.
## Tecnologia

- React js
- typescript
- React-query
- React-Slick
- react-icons
- react-router-dom
- axios
- html
- css

## Licença 
- License MIT