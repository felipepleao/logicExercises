/* BEE 1098 - Sequencia IJ 4
Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.

Entrada
Não há nenhuma entrada neste problema.

Saída
Imprima a sequencia conforme exemplo abaixo.
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

let countI = 0;
let countJ = 1;

for (countI; countI <= 2; countI += 0.2) {
  console.log(`I=${countI.toFixed(1)} J=${countJ}`)
  console.log(`I=${countI.toFixed(1)} J=${countJ + 1}`)
  console.log(`I=${countI.toFixed(1)} J=${countJ + 2}`)

  countJ += 0.1;
}
