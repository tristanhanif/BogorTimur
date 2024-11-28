//penjelasan if else
const score = 85;

if (score > 90) {
  console.log('Selamat, Anda mendapatkan nilai A!');
} else if (score > 80) {
  console.log('Selamat, Anda lulus ujian!');
} else {
  console.log('Maaf, Anda belum lulus ujian.');
}

// penjelasan switch
const fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('I am a banana.');
    break;
  case 'apple':
    console.log('I am an apple.');
    break;
  case 'orange':
    console.log('I am an orange.');
    break;
  case 'strawberry':
    console.log('I am a strawberry.');
    break;
  default:
    console.log('I am not a fruit. I am a programmer.');
}

const day = new Date().getDay();

if (day === 0) {
  console.log('Minggu');
} else if (day === 1) {
  console.log('Senin');
} else if (day === 2) {
  console.log('Selasa');
} else if (day === 3) {
  console.log('Rabu');
} else if (day === 4) {
  console.log('Kamis');
} else if (day === 5) {
  console.log('Jumat');
} else if (day === 6) {
  console.log('Sabtu');
} else {
  console.log('Hari tidak valid');
}

// kode for loop
for (let i = 0; i < 5; i++) {
    console.log(`Angka ke-${i} adalah ${i}`);
  }


// kode for in
const person = { name: 'Fulan', origin: 'Bandung', birthYear: 2024 };

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}

// kode for of
const names = ['Bebek', 'Ayam', 'Telor', 'Tempe'];

for (const item of names) {
  console.log(item);
}

// kode while
let i = 0;

while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
}

// kode do while
let r = 0;

do {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
} while (i < 5);

// kode break
for (let i = 0; i < 10; i++) {
    if (i === 5)
        break;

}
console.log(i) // bisa juga diganti continue

// kode try-catch
try {
    console.log('Memulai program');
    throw new Error('Error: Program berhenti');
    console.log('Mengakhiri program');
  } catch (err) {
    console.log('Karena ada error, blok ini akan dieksekusi');
  }

// kode finally
try {
    console.log('Ini try block');
    throw new Error('Error: Program berhenti');
  } catch (err) {
    console.log('Ini catch block');
  } finally {
    console.log('Ini finally block');
  }

// implementasi flow control
function checkGrades(grades) {
    for (let i = 0; i < grades.length; i++) {
      if (typeof grades[i] !== 'number') {
        throw new Error('Invalid input. Please provide an array of numbers.');
      }
  
      const grade = grades[i];
      let predicate;
  
      if (grade >= 90) {
        predicate = 'A';
      } else if (grade >= 80) {
        predicate = 'B';
      } else if (grade >= 70) {
        predicate = 'C';
      } else if (grade >= 60) {
        predicate = 'D';
      } else {
        predicate = 'E';
      }
  
      console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
    }
  }
  
  try {
    const studentGrades = [95, 85, 65, 80, 70];
    checkGrades(studentGrades);
  } catch (e) {
    console.error(e);
  }


  function categorizeNumber(input) {
  
    /**
     * TODO:
     * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
     * Dengan ketentuan sebagai berikut:
     * 1. Jika input bukan number, bangkitkan (throw) error.
     * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
     * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
     * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
     * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
     * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
     */
     if (typeof input !== 'number') {
      throw new Error("input harus bilangan bulat");
     }
       
       if (input === 0) {
         return "Nol";
       }
    
    if (input < 0) {
      return "Negatif";
    }
    
    function isPrima(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true
    }
    
    if (isPrima(input)) {
      return "prima";
    }
    if (input  % 2 === 0) {
      return "Genap";
    }
    return "Ganjil";
  }
  
  // Contoh
  console.log(categorizeNumber(15)); // Output: "Ganjil"
  console.log(categorizeNumber(12)); // Output: "Genap"
  console.log(categorizeNumber(17)); // Output: "Prima"
  console.log(categorizeNumber(0)); // Output: "Nol"
  console.log(categorizeNumber(-5)); // Output: "Negatif"
  
  try {
    categorizeNumber('abc');
  } catch (error) {
    console.log(error.message);
  } // Output: "Input harus berupa bilangan bulat"
  

  // TODO: buatlah variabel (konstan) bernama `currency` dan isi dengan nilai "IDR".
const currency = 'IDR'


// TODO: buatlah variabel bernama `value` dan isi dengan nilai 10000.
let value = 10000


// TODO: tambahkan nilai di dalam variabel `value` sebesar 5000.
value += 5000


/**
 * TODO: buatlah variabel (konstan) bernama `money`,
 * isi dengan penambahan string dari nilai `currency` + " " + `value`.
 */
const money = currency + "money" + value
console.log (money)



/**
 
TODO:
Buatlah sebuah fungsi bernama hello yang menerima 2 argumen: name dan origin.
Kembalikan fungsi tersebut dengan nilai string dengan templat:
"Halo! Nama saya (name). Saya tinggal di (origin)."*
Contoh: Jika name bernilai 'Fulan' dan origin bernilai 'Jakarta', fungsi harus mengembalikan:
"Halo! Nama saya Fulan. Saya tinggal di Jakarta.".*
Argumen origin boleh kosong dengan nilai default adalah "Bandung".
Buatlah variabel bernama rahmat yang menampung nilai dari hasil pemanggilan fungsi hello
yang diberikan argumen name = 'Rahmat' dan origin = 'Semarang'.
Buatlah variabel bernama indra yang menampung nilai dari hasil pemanggilan fungsi hello
yang diberikan argumen name = 'Indra' tanpa memberikan nilai origin.*/
export function hello ( name, origin="Bandung") {
  return `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`
}
const rahmat=hello("Rahmat","Semarang");
console.log(rahmat);
const indra = hello("Indra",);
console.log(indra);



const employees = [
  {
    name: 'Fulan',
    email: 'fulan@dicoding.com',
    joinYear: 2020,
  },
];

export default function addEmployee(name, email, joinYear) {
  /**
   * @TODO
   * lengkapi fungsi ini agar dapat menambahkan objek employee baru
   * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
   */
  const newEmployee = {
    name: name,
    email: email,
    joinYear: joinYear
  }
 employees.push(newEmployee)
   
}
 addEmployee('tristan', 'tristan.example.com', 2023)
console.log(employees)

// import
const nama = 'tristan'
const email = 'tristan.example.com'
const age = 25;

export {nama, email, age};
