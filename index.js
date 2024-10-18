const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escolha um número para o Pokémon inicial (1, 2, 4, 5): ', (input) => {
    let escolhaDoTreinador = parseInt(input);
    let pokemonEscolhido;

    if (escolhaDoTreinador === 1) {
        pokemonEscolhido = "Bulbasaur";
    } else if (escolhaDoTreinador === 2) {
        pokemonEscolhido = "Charmander";
    } else if (escolhaDoTreinador === 4) {
        pokemonEscolhido = "Pikachu";
    } else if (escolhaDoTreinador === 5) {
        pokemonEscolhido = "Mewtwo";
    }

    if (pokemonEscolhido) {
        console.log("Você escolheu o " + pokemonEscolhido + " como seu Pokémon inicial.");
    } else {
        console.log("Escolha inválida.");
    }
    rl.close();
});
