//Saroinsong, Gillian G. G

//>>>>>>>>>>>>>>>>>>>>> Class <<<<<<<<<<<<<<<<<
//1.

// class Orang
// {
//     constructor (nama, umur)
//     {
//         this.nama = nama;
//         this.umur = umur;
//     }
//     bekerja = () =>
//     {
//         console.log (`${this.nama} sedang bekerja seperti biasa`);
//     }
// }

// const user1 = new Orang("Gillian", "21");
// user1.bekerja();


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Inheritance <<<<<<<<<<<<<<<<<<

//2
class Orang
{
  constructor (nama, umur){
  this.nama = nama;
  this.umur = umur;
  
}
tidur(){
  console.log(`${this.nama} sedang tidur`)
}
makan(){
  console.log(`${this.nama}  sedang makan`)
}
}
class Pelajar extends Orang {
  constructor (nama, umur, namaSekolah){
      super(nama, umur);
      this.namaSekolah = namaSekolah;
  }
  belajar(){
      console.log (`${this.nama} belajar di ${this.namaSekolah}`)
  }
}
const user = new Pelajar ("Kevin", "19", "Unklab");
console.log(user);