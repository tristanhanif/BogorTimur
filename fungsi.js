// mendeklarasikan fungsi

var penambahan = function() {
    console.log(1+2)
}
penambahan()

var pertambahan = function(parameter1, parameter2) {
   return parameter1 + parameter2
}
console.log(pertambahan(10 , 2))

// javascript hoisting

let manusia = {
    nama : "tristan",
    pekerjaan : "programmer"
    
}


const sapaSiManusia = function() {  
    console.log(`hai ${manusia.nama}, apakah benar kamu seorang ${manusia.pekerjaan}`)
}

sapaSiManusia()
console.log(manusia) // global 



const olahraga = 'basketball';

function namaAtlet() {
  let atlet = 'Lionel Messi';
  const noMessi = 10;
  console.log(atlet); // Output: messi
  if (olahraga === 'basketball') {
     atlet = 'Kobe Bryant';
     const noKobe = 24;
     console.log(olahraga); // Output: basketball
  }
  return atlet;
}

console.log(namaAtlet()); // Output: Kobe Bryant
console.log(olahraga); // Output: basketball

// objek

var orang = {
    nama: 'tristan',
    umur: 17,
    pekerjaan: 'ngecoding'
}

orang.hobi = 'maen ff'

console.log(orang)

function tambah(a,b) {
    if(typeof a == Number || typeof b == Number){
        return a + b 
    } else {
        return parseInt(a) + parseFloat(b)
    }
}

console.log(tambah("5.3","2"))

function tambah2(a,b) {
    return a+b
}

console.log(tambah2("5", "2"))

// pembelajaran array

let array = [1,2,3, 'halo', false, true]
console.log(array.toString()) // array string

let array1 = [1,2,3, 'halo', false, true]

console.log(array1.join(" "))
console.log(array1.join("#"))
console.log(array1.join('...')) // array join

let tristan = ['aku', 1,2, 'saya']
tristan.pop();
console.log(tristan) // array pop

let tristan1 = ['saya', 'kamu', 'aku',1,2]
tristan1.push('kami');
console.log(tristan1) // array push

let kamu = [4,5,6, 'tristan']
kamu.shift();
console.log(kamu); // array shift

let buah = ["pisang", 'mangga', 'apel']
buah.splice(0,1, 'lemon', 'manggis')
console.log(buah); // array splice  


let a = -40.4;

console.log(Math.abs(a)); // math abs

let b = 64
console.log(Math.sqrt(b)); // math sqrt

let c = 8
console.log(Math.cbrt(c)); // math cbrt

let bilangan1 = 5.7
let bilangan2 = 5.4

console.log(Math.round(bilangan1));
console.log(Math.round(bilangan2)); // math round

let d = 5.3
let e = 4.8

console.log(Math.floor(d));
console.log(Math.floor(e)); // math floor

let f = 6.9
let g = 3.1

console.log(Math.ceil(f));
console.log(Math.ceil(g)); // math ceil

console.log(Math.random())
console.log(Math.random()) // math random

console.log(Math.max(4,5,6,2,3)); // math max

console.log(Math.min(6,2,313,32,4));


function multiplier(x) {
    return function (num) {
      return x * num;
    };
  }
  
  const double = multiplier(2);
  const triple = multiplier(3);
  
  console.log(double(10));
  console.log(triple(11));



function mendapatkanTextDiH1DanTampilkanDiParagraf() {
    
}



