let namaSaya = 'tristan hanif nadindra'
namaSaya = 'hanif';
console.log(namaSaya)


const umurSaya = 15 
console.log(umurSaya)


const penjumlahan = 7+8;
const modulus = penjumlahan % 12
const pangkat = modulus ** 3
console.log (pangkat)


// assigment

let bilangan = 10;

bilangan += 5;

console.log(bilangan); // Output 15


let perkurangan = 10;

perkurangan -= 5;

console.log(perkurangan); // Output: 5



let perkalian = 10;

perkalian *= 5;

console.log(perkalian); // Output: 50


let pembagian = 10;

pembagian /= 5;

console.log(pembagian); // Output: 2


let matematika = 10;

matematika %= 5;

console.log(matematika); // Output: 0


let aduhai = 10;

aduhai **= 5;

console.log(aduhai); // Output: 100000


// perbandingan

let bilangan1 = 6;
let bilangan2 = 4;

console.log(bilangan1 === 6 && bilangan2 === 4); // Output: true
console.log(bilangan1 === 6 && bilangan2 < 4); // Output: false
console.log(bilangan1 < 6 && bilangan2 === 4); // Output: false
console.log(bilangan1 < 6 && bilangan2 < 4); // Output: false

console.log(bilangan1 === 6 || bilangan2 === 4); // Output: true
console.log(bilangan1 === 6 || bilangan2 < 4); // Output: true
console.log(bilangan1 < 6 || bilangan2 === 4); // Output: true
console.log(bilangan1 < 6 || bilangan2 < 4); // Output: false

console.log(!true); // Output: false
console.log(!false); // Output: true


// function

let namaAku = function () {
    return "tristan hanif"
}

console.log(namaSaya())


var luasPersegi = function(s) {
    return s * s
}

console.log(luasPersegi(4, 4))


const olahraga = 'basketball';

// lingkup global
function namaAtlet() {
  let atlet = 'Lionel Messi';
  const noMessi = 10;
  console.log(olahraga); // Output: basketball
  if (olahraga === 'basketball') {
     atlet = 'Kobe Bryant';
     const noKobe = 24;
     console.log(olahraga); // Output: basketball
  }
  return atlet;
}


// objek
console.log(namaAtlet()); // Output: Kobe Bryant
console.log(olahraga); // Output: basketball


let saya = new Object()

saya.nama = 'tristan',
saya.umur = 17
saya.hobi = 'maen ff'

console.log(saya.nama);
console.log(saya['umur']);
console.log(saya.hobi);

