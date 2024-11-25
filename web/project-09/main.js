
let idade = prompt('Digite a sua idade: ');
let temTitulo = prompt('Tem título de eleitor? (sim/não): ');
let idadeMinima = 18;

if (idade >= idadeMinima && temTitulo === 'sim') {
  console.log('Você pode votar!');
} else if (idade >= idadeMinima && temTitulo === 'não') {
    console.log('Você não pode votar, pois não possui título de eleitor.');
} else if (idade < idadeMinima && temTitulo === 'não') {
    console.log('Você não pode votar, pois não possui idade mínima e nem título de eleitor.');
}
