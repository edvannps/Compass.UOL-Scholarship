
let valorConta = 0;
let gorjeta = 0;
let valorTotal = 0;

valorConta = parseFloat(prompt('Digite o valor da conta: '));
gorjeta = parseFloat(prompt('Digite o valor (decimal%) da gorjeta: '));

gorjeta = (valorConta * gorjeta) / 100;
valorTotal = valorConta + gorjeta;

alert(`O valor da conta é R$ ${valorConta}, a gorjeta é R$ ${gorjeta} e o valor total é R$ ${valorTotal}.`);
