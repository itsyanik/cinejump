# Desafio Trilha 1 - Academia Webjump

## Sobre

Ao final da trilha 1 da Academia Webjump foi proposto o seguinte desafio:
A criação de um site que se comunicasse com o The Movie Data Base através da [API](https://www.themoviedb.org/documentation/api) deles. Esse site deve listar os três filmes que estão em destaque, os filmes populares e os filmes em cartaz. Além disso o usuário do site deve conseguir adicionar e remover filmes de uma lista de favoritos, e a lista de favoritos deve ser exibida ao final da página.

O site deve seguir o layout provido pela equipe de Design no [Figma](https://www.figma.com/file/um4dcEJCOlEvB6kCe9KCOD/Cinejump?node-id=0%3A1), porém a responsividade dele não é obrigatória.

Outros itens não obrigatórios são: uma listagem de trailers dos filmes populares, funcionalidade de busca, filtro entre séries e filmes, e uma opção de criar um perfil.

## Rodando o projeto

Observação: antes de iniciar, certifique-se de ter uma chave de desenvolvedor do The Movie Database.

Após clonar este repositório, navegue até a pasta em que ele está localizado e rode o comando:
`yarn install` ou apenas `yarn` para que as dependências sejam instaladas.

Crie um arquivo `.env` na pasta `src` com a seguinte estrutura:

``
module.exports = {
 AP_KEY=YOUR_API
}
``

Em seguida, rode o comando `yarn watch` para iniciar o servidor local e navegar pela aplicação. Por padrão essa aplicação roda na porta `5000`, mas você pode facilmente alterar isso no arquivo `src/index.js` caso prefira outra porta.
