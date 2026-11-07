const number = "1";

console.log(1+1);
console.log(1-1);
console.log(5*2);
console.log(10/2);


console.log("Modulus")
console.log(10%2);
console.log(7%3);
// 10 8 6 4 2 0
// 7 4 1
// 10 5 1

console.log(87%2);

// console.log(typeof Number(number));

console.log(Number(number) + 1); // 11
console.log("1" - 1); // 0


let nama = "Bambang";
let kota = "Jakarta"

console.log("Halo nama saya adalah " + nama + " dan saya tinggal di " + kota);

console.log(`Halo nama saya adalah ${nama} dan saya tinggal di ${kota} ${10+2}`);


let angka1 = 12;
let angka2 = 12;
let angka3 = 50;

// console.log(angka1 === angka2);
// console.log(angka1 !== angka2);
// console.log(angka1 >= angka2);
// console.log(angka1 <= angka2);

console.log(angka1 >= angka2 && angka3 > angka2);
console.log(angka2 !== angka1 || angka3 > angka2);

console.log(!(angka2 !== angka1 || angka3 > angka2))

console.log(angka2 !== angka1 || !(angka3 > angka2))