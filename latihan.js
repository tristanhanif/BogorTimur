console.log('Biodata Siswa') // biodata siswa
console.log('Nama = Tristan Hanif nadindra') // nama siswa
console.log('Kelas = 10 rpl') // kelas
console.log('Hobby = ngecoding') // hobby 
console.log('Umur = 15 Tahun') // umur
console.log('Motto Hidup = Masuk surga tanpa hisab') // motto

/* 
ini adalah contoh komentar lebih dari satu baris
contoh, nama saya = tritan hanif nadondra
*/









 // tugas deklarasi variabel  
let namaPribadi = 'mq';
console.log(namaPribadi)
namaPribadi = 'TRISTAN HANIF';
console.log(namaPribadi)

let sekolahSaya = 'SMK MADINATULQURAN';
console.log(sekolahSaya)

const umur = '15';
console.log(umur)

let alamat;
alamat = 'jonggol';
console.log(alamat)

let hobbyKu = ' hobiku futsal';
console.log(hobbyKu)
hobbyKu = ' hobyku berubah codingan';
console.log(hobbyKu)

const mottoHidup = 'Masuk Surga Tanpa Hisab'
console.log(mottoHidup)


// contoh string
let nama = 'rumah bekasi'
nama = 'albert' // bisa diubah datanya
console.log(nama)

const rumahAsli = 'indonesia'
console.log(rumahAsli) // const yang benar

const rumahTinggal = 'bekasi barat'
console.log(rumahTinggal) 

const lahir = 20
console.log(lahir)

const apakahSudahMenikah = false
console.log(apakahSudahMenikah)

let jumlahAnak;
console.log(jumlahAnak)

let kegiatan = 'pada hari ini ada akan kegiatan "menumgut sampah'
console.log(kegiatan)

let hari2 = 'hari ini hari jum\'at'
console.log(hari2) // penempatan yang benar

let wacana = "besok ada kegiatan kerjabakti pda hari jum'at \n tapi boong \\ wkwkwkw \b hahay"
console.log(wacana)

// pelajaran number

let y;
y = 3
let z;
z = 2
const hasil = y * z 
console.log(  hasil); 
console.log(typeof y + z)

// operator aritmatika 

let jumlah1 = 10
let jumlah2 = 2
console.log(jumlah1 + jumlah2); // penjumlahan

let jumlah3 = 28
let jumlah4 = 27
console.log(jumlah3 - jumlah4); // pengurangan

let jumlah5 = 4
let jumlah6 = 5
console.log(jumlah5 * jumlah6) // perkalian

let jumlah7 = 6
let jumlah8 = 2
console.log(jumlah7 / jumlah8) // pembagian
 
let jumlah9 = 4
let jumlah10 = 3
console.log(jumlah9 ** jumlah10) // pangkat

let jumlah11 = 27
let jumlah12 = 4
console.log(jumlah11 % jumlah12) // modulus

let jumlah13 = 10
jumlah13++;
console.log(jumlah13); // tambah 1

let jumlah14 = 10
jumlah14--;
console.log(jumlah14) // kuarng 1

// operator string dan number

let namaDepan = 'tristan ';
let namaBelakang = 'hanif';
console.log(namaDepan + namaBelakang) // type string

let a = 122;
let b = 33;
console.log(a + b) // type number

// operator perbandingan 

console.log(2 == 2) // == (sama dengan)
console.log(3 != 2) // ! (tidak sama dengan)
console.log(4 === '4') // === (strict sama dengan)
console.log(3 !== 3) // !== (strict tidak sama dengan)
console.log(8 >= 7) // (lebih besar sama dengan)
console.log(6 <= 3) // (lebih kecil sama dengan)

// operator logika

let bilangan1 = 6
let bilangan2 = 4

console.log(bilangan1 === 6 && bilangan2 === 4) // output: true
console.log(bilangan1 === 6 && bilangan2 < 4 ) // output: false
console.log(bilangan1 < 6 && bilangan2 === 4) // output: false
console.log(bilangan1 < 6 && bilangan2 < 4) // output: false

console.log(bilangan1 === 6 || bilangan2 === 4); // Output: true
console.log(bilangan1 === 6 || bilangan2 < 4); // Output: true
console.log(bilangan1 < 6 || bilangan2 === 4); // Output: true
console.log(bilangan1 < 6 || bilangan2 < 4); // Output: false

console.log(!true); // Output: false
console.log(!false); // Output: true

const  u = 100;
const o = 101;
const l = 102;
const n = "100"

console.log(u == 100); // true;
console.log(u == "100"); // false;
console.log(u === "100"); // false;

console.log(o != 101); // false;
console.log(o != "102"); // true;

console.log(l < 100); // false;
console.log(l >= 102); // true;
console.log(l >= 102); // true;

console.log(u === 100 || o === 103); // true 
console.log(u === 101 || o === 101); // true 
console.log(u === 100 && o === 101); // true

console.log(o === 101 && l === 101 + 1); // true
console.log(l === 100 || o === 101); // true
console.log(n === "100" && b+1 === l); //false
console.log(n === 100 || l-2 === u); // true
console.log(n === 100 || l-2 === u); // true
console.log(n+2 === l || o-1 === 101); // false
console.log(u+2 === l || n === 100); // true
console.log(u+2 === l && o-1 === "100"); // false


let namaSiswa = 'tristan'
let sekolah = 'smk mq'
let jurusan = 'rekayasa perangkat lunak'

let salam = `selamat datang ${namaSiswa}`
let salam2 = `selamat datang ${namaSiswa} di ${sekolah}`
let salam3 = `selamat datang ${namaSiswa} di ${sekolah} dengan jurusan ${jurusan}`
console.log(salam)
console.log(salam2)
console.log(salam3)
console.log('selamat datang ' + namaSiswa + ' di ' + sekolah)
console.log('halo ' + namaSiswa + ' di ' + sekolah + ' dengan jurusan ' + jurusan)

function mendapatkanTextDiId () {
    let nama = document.getElementById('nama'). style = ' color:red';
    console.log(nama.value)
} 

let sepatuImage = document.getElementById('sepatu')
console.log(sepatuImage.src)
console.log(sepatuImage.alt)

sepatuImage.src = 'images/download.jpeg'
sepatuImage.alt = 'cewekku' 

console.log(sepatuImage.src)
console.log(sepatuImage.alt)

let submit = document.getElementById("submit");
submit.onclick = showMassage;

function showMassage () {
    alert("sudah terkirim");
}

