/* BEE 1045 - Tipos de Triângulos

Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:
se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

Saída
Imprima todas as classificações do triângulo especificado na entrada.
||
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(" ");

const [A, B, C] = lines.map((n) => parseFloat(n)).sort((a, b) => b - a);

const isNot = A >= B + C;
const isRight = Math.pow(A, 2) === Math.pow(B, 2) + Math.pow(C, 2);
const isObtusangle = Math.pow(A, 2) > Math.pow(B, 2) + Math.pow(C, 2);
const isAcutangle = Math.pow(A, 2) < Math.pow(B, 2) + Math.pow(C, 2);
const isEquilateral = A === B && B === C && C === A;
const isIsosceles =
  (A === B && A !== C && B !== C) ||
  (B === C && B !== A && C !== A) ||
  (C === A && C !== B && A !== B);

if (isNot) {
  console.log("NAO FORMA TRIANGULO");
} else {
  isRight ? console.log("TRIANGULO RETANGULO") : null;
  isObtusangle ? console.log("TRIANGULO OBTUSANGULO") : null;
  isAcutangle ? console.log("TRIANGULO ACUTANGULO") : null;
  isEquilateral ? console.log("TRIANGULO EQUILATERO") : null;
  isIsosceles ? console.log("TRIANGULO ISOSCELES") : null;
}
