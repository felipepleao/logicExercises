/* BEE 1013 - O Maior

Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:



Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".

*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(" ");

let a, b, c, maiorAB, maiorBC;

a = parseInt(lines.shift());
b = parseInt(lines.shift());
c = parseInt(lines.shift());

maiorAB = (a + b + Math.abs(a - b)) / 2;
maiorBC = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(`${maiorBC} eh o maior`);
