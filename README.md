
## Iniciando projeto

Primeiramente clone este repositorio e dentro da raiz do projeto execute o comando abaixo para instalar as depêndencias

```bash
npm install
```
Após executar o comando dentro ainda da raiz do projeto execute o comando abaixo para rodar a aplicação

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado

## Visualizando o projeto

Se tudo ocorreu certo você provavelmente deve estar vendo uma tela parecida com essa abaixo

![Initial](./src/screenshots/initial.png)

## Visualizando o componente

Feito isso basta apenas clicar em Carousel Component e voce sera redirecionado para o componente de carousel da aplicação

![Initial](./src/screenshots/home.png)

## Funcionalidades implementadas 

* Desenvolvimento do componente de carrossel permitindo ser utilizado em qualquer parte da aplicação
* Carrosel passando imagens automaticamente
* Ao clicar na imagem do carrossel é feito o redirecionamento para a página assim como no site amazonas meu lar
* Adicionado filtro de contraste
* Foi criado um hook para a request dos dados afim de ser utilizado em outras partes da aplicação de forma mais fácil para que não haja duplicação de código
* Foi utilizado typescript na aplicação para melhor organização, segurança e modularidade da aplicação utilizando interfaces e constantes.
