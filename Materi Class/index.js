// const mobil = {
//   merek: "Toyota",
//   warna: "Putih",
//   nyalakanMobil: function () {
//     console.log(`Mobil dengan merek ${this.merek} sudah dinyalakan`);
//   },
// };

// const mobil2 = {
//   merek: "Honda",
//   warna: "Merah",
//   nyalakanMobil: function () {
//     console.log(`Mobil dengan merek ${this.merek} sudah dinyalakan`);
//   },
// };
// mobil.nyalakanMobil();
// mobil2.nyalakanMobil();


//Object Class
class Mobil {
    constructor(merek, warna) {
      this.merek = merek;
      this.warna = warna;
    }
  
    nyalakanMobil = () => {
      console.log(`Mobil dengan merek ${this.merek} sudah dinyalakan`);
    };
  }
  
  // const mobil1 = new Mobil("Toyota", "Putih");
  // const mobil2 = new Mobil("Honda", "Hitam");
  
  // mobil1.nyalakanMobil();
  // mobil2.nyalakanMobil();
  
  //Inheritance
    class Nissan extends Mobil {
    constructor(merek, warna, mesin) {
      super(merek, warna);
      this.mesin = mesin;
    }
    matikanMesin = () => {
      console.log(`Mobil dengan merek ${this.merek} sudah dimatikan`);
    };
    nyalakanMobil = () => {
      console.log(`Mobil dengan mesin ${this.mesin} sudah dinyalakan`);
    };
  }
  
  const Silvia = new Nissan("Silvia", "Putih", "1800cc");
  const Skyline = new Nissan("Supra", "Hitam", "2100cc");
  
  Silvia.nyalakanMobil();
  Skyline.nyalakanMobil();
  
  Silvia.matikanMesin();
  Skyline.matikanMesin();