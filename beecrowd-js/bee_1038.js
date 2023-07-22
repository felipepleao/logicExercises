/* BEE 1038 - Lanche

Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.



Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.

*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(" ");

let valueOne, valueTwo, billToPay;

valueOne = parseInt(lines.shift());
valueTwo = parseInt(lines.shift());
billToPay = 0;

switch (valueOne) {
  case 1:
    billToPay = valueTwo * 4.0;
    break;

  case 2:
    billToPay = valueTwo * 4.5;
    break;

  case 3:
    billToPay = valueTwo * 5.0;
    break;

  case 4:
    billToPay = valueTwo * 2.0;
    break;

  case 5:
    billToPay = valueTwo * 1.5;
    break;
}

console.log(`Total: R$ ${billToPay.toFixed(2)}`);
