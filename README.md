# REST API com Node.js: back-end e front-end

_Tutorial ministrado por Iago Cavalcante no blog [iMasters](https://imasters.com.br/back-end/rest-api-com-node-js-back-end-e-front-end)_
_Artigo de 15 de Janeiro de 2019_

## PASSO A PASSO

-   iniciar um projeto node <code>npm init -y</code>
-   instalar o express.js <code>npm install express</code>
-   instalar o nodemon para continuar rodando sem precisar atualizar <code>npm install --save-dev nodemon</code>
-   Para rodar a aplicação nas dependências de desenvolvimento inserir no package.json a propriedade <code>"dev":"nodemon src/app.js",</code>
-   executar o projeto <code>npm run dev</code>

## RESUMOS

### REST e Verbos HTTP

"Podemos Entender REST (Representational State Transfer) como a padronização da arquitetura web, uma abstração do protocolo HTTP, URL e os verbos HTTP."

-   GET: recupera dados
-   POST: envia novos dados
-   DELETE: apaga um dados com um id como parâmetro
-   PUT: atualiza um dado existente
