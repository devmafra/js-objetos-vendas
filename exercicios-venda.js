// Exercício 1: Crie um objeto chamado Venda com as propriedades produto, quantidade,
// precoUnitario e desconto. Adicione um método chamado calcularTotal que calcule o
// valor total da venda, considerando o desconto. Adicione também um método chamado
// detalharVenda que retorne uma string detalhando a venda.
const venda = {
  produto: "Camiseta",
  quantidade: 3,
  precoUnitario: 100,
  desconto: 0.05,
  calcularTotal: function () {
    return this.precoUnitario * this.quantidade * (1 - this.desconto);
  },
  detalharVenda: function () {
    console.log(
      `Produto: ${this.produto},
      Quantidade: ${this.quantidade},
      Preço unitário ${this.precoUnitario},
      Desconto de ${this.desconto * 100}%,
      Valor total: ${this.calcularTotal()}`
    );
  },
};
venda.detalharVenda();

// Exercício 2: Adicione um método ao objeto Venda chamado aplicarDesconto que recebe
// um valor percentual e atualiza o desconto da venda. Aplique um desconto de 10% e verifique o
// valor total com o método calcularTotal.
venda.aplicarDesconto = function (percentual) {
  this.desconto = percentual / 100;
};
venda.aplicarDesconto(10);
console.log(venda.calcularTotal());

// Exercício 3: Adicione um método ao objeto Venda chamado atualizarQuantidade que
// recebe um número e altera a quantidade do produto na venda. Atualize a quantidade e
// verifique o total da venda após a atualização.
venda.atualizarQuantidade = function (numero) {
  this.quantidade = numero;
};
venda.atualizarQuantidade(2);
console.log(venda.calcularTotal());

// Exercício 4: Adicione um método chamado verificarEstoque que recebe a quantidade
// disponível em estoque e retorna uma mensagem fixa indicando se a venda pode ser realizada
// ou se é necessário ajustar a quantidade.
venda.verificarEstoque = function (qtde_estoque) {
  return qtde_estoque >= this.quantidade
    ? "Produto disponível"
    : "Produto indisponível";
};
console.log(venda.verificarEstoque(10));

// Exercício 5: Retorne um array com todas as suas propriedades e valores do objeto Venda.
// Exiba as propriedades e valores em um formato legível.
const conteudoVenda = Object.entries(venda);
console.log(conteudoVenda);

// Exercício 6: Obtenha um array com os nomes de todas as propriedades do objeto Venda.
// Exiba as propriedades do objeto.
const nomesVenda = Object.keys(venda);
console.log(nomesVenda);

// Exercício 7: Obtenha um array com todos os valores das propriedades do objeto Venda.
// Exiba os valores das propriedades.
const valoresVenda = Object.values(venda);
console.log(valoresVenda);

// Exercício 8: Verifique se o objeto Venda possui a propriedade desconto. Retorne a
// verificação diretamente em uma mensagem fixa.
venda.verificarDesconto = function () {
  return Object.hasOwn(venda, "desconto")
    ? "Desconto disponível"
    : "Desconto indisponível";
};
console.log(venda.verificarDesconto());

// Exercício 9: Crie um novo objeto NovaVenda que contenha as mesmas propriedades e
// valores de Venda, mas com um produto e quantidade diferentes. Exiba o novo objeto
// NovaVenda.
const novaVenda = { ...venda, produto: "Calça", quantidade: 5 };
console.log(novaVenda);

// Exercício 10: Adicione uma nova propriedade data ao objeto Venda, definindo-a como não
// enumerável. Exiba todas as propriedades do objeto Venda e, em seguida, exiba o valor da
// nova propriedade data separadamente.
Object.defineProperties(venda, {
  data: {
    value: "05-05-2025",
    enumerable: false,
  },
});
console.log(venda);
console.log(venda.data);

// Exercício 11: Crie um novo objeto DescontoEspecial que herde as propriedades do objeto
// Venda, mas com um desconto fixo de 20%. Exiba as propriedades do novo objeto e verifique
// se o desconto foi aplicado corretamente.
const descontoEspecial = Object.create(venda);
descontoEspecial.desconto = 0.2;
console.log(descontoEspecial);

// Exercício 12: Remova a propriedade desconto do objeto Venda. Verifique se a propriedade
// foi removida com sucesso e exiba as propriedades restantes do objeto.

delete venda.desconto;
delete venda.aplicarDesconto;
delete venda.verificarDesconto;
console.log(venda);

//Desafio Bonus Acrescentado por mim
console.log("Resumo Geral Loja");
const Loja = {
  vendas: [],
};
// Registrar vendas
Loja.registrarVenda = function (produto, quantidade, preço, desconto) {
  const novaVenda = Object.assign({}, venda, {
    produto: produto,
    quantidade: quantidade,
    precoUnitario: preço,
    desconto: desconto / 100,
  });
  Loja.vendas.push(novaVenda);
};

Loja.registrarVenda("Tenis", 8, 250, 20);
Loja.registrarVenda("Chapéu", 8, 20, 5);
Loja.registrarVenda("Bolsa", 3, 120, 0);

// Listar vendas
Loja.listarVendas = function () {
  console.log(Loja.vendas);
};

Loja.listarVendas();
// Total arrecadado
Loja.totalArrecadado = function () {
  let total = 0;
  for (let i = 0; i < Loja.vendas.length; i++) {
    total += Loja.vendas[i].calcularTotal();
  }
  return total;
};

console.log("Total arrecadado: R$", Loja.totalArrecadado());
