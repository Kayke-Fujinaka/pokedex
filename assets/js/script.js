/*  

Quando clicar no pokémon da listagem temos que esconder o cartão 
do pokémon aberto e mostrar o cartão correspondente ao que foi 
selecionado na listagem 

Para isso vamos precisar de dois elementos:

1 - listagem
2 - cartão do pokemon

Precisa criar duas variáveis no JS para t
rabalhar com elementos da tela






*/

// Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')



listaSelecaoPokemons.forEach(pokemon => {
    //Vamos precisar trabalhar com um evento de clique feito 
   //pelo usuário na liotsgaem de pokemon

    pokemon.addEventListener('click', () => {
        // Remover a classe aberto só do cartao que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        // Ao clicar em pokémon da listagem pegamos o ID desse 
        //pokémon para saber qual cartão mostras
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        // Remover a classe ativa que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // Adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionaNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionaNaListagem.classList.add('ativo')


    })
})