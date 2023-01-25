// - crie um algoritmo que imprima na tela o fatorial de 10.

let aFat = [];
let multip = 1;

for (let i = 9; i >= 0; i -= 1) {
  aFat[i] = i + 1;
  multip *= i + 1;
}

console.log(
  `${aFat[9]}! = ${aFat[9]} x ${aFat[8]} x ${aFat[7]} x ${aFat[6]} x ${aFat[5]} x ${aFat[4]} x ${aFat[3]} x ${aFat[2]} x ${aFat[1]} x ${aFat[0]} = ${multip}`
);
