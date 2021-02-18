# REST API com Node.js: back-end e front-end

_Tutorial ministrado por Iago Cavalcante no blog [iMasters](https://imasters.com.br/back-end/rest-api-com-node-js-back-end-e-front-end)_\
_Artigo de 15 de Janeiro de 2019_

## PASSO A PASSO

### Preparando o ambiente back-end

-   [x] iniciar um projeto node <code>npm init -y</code>
-   [x] instalar o express.js <code>npm install express</code>
-   [x] instalar o nodemon para continuar rodando sem precisar atualizar <code>npm install --save-dev nodemon</code>
-   [x] Para rodar a aplicação nas dependências de desenvolvimento inserir no package.json a propriedade <code>"dev":"nodemon src/app.js",</code>
-   [x] executar o projeto <code>npm run dev</code>

### Preparando o front-end

-   [x] fazer uma pasta dentro do projeto contendo um arquivo index.html;
-   [x] criar uma lista com quatro outras listas aninhadas(estática);
-   [x] instalar globalmente o pacote http-server;
-   [x] rodar simultaneamente em dois terminais a API e o front-end;
-   [x] utilizar método assíncrono <code>fetch(_path_)</code> para realizar as requisições;

## RESUMOS

### REST e Verbos HTTP

"Podemos Entender REST (Representational State Transfer) como a padronização da arquitetura web, uma abstração do protocolo HTTP, URL e os verbos HTTP."

-   GET: recupera dados
-   POST: envia novos dados
-   DELETE: apaga um dados com um id como parâmetro
-   PUT: atualiza um dado existente

### Parâmetros do Método

-   _req_: utilizado para obter informações que são mandadas para determinado URL;
-   _res_: utilizado para enviar uma resposta para aquele que está requisitando;
