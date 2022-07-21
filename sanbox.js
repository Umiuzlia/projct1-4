Project1
let detik = 3600;

function convertJam(jam) {
  return jam * detik;
}
let ubahJam = convertJam(2);
// console.log(ubahJam);


Project2
let nilai1 = 20
let nilai2 = 20
if (nilai1 > nilai2) {
  console.log(nilai1)
}else if(nilai1 === nilai2){
  console.log(nilai1 || nilai2)
}else{
  console.log(nilai2)
// }


Project3
const harga_tiket_pesawat = 600000

function cekTiket(jumlah_traveler){
  return jumlah_traveler * harga_tiket_pesawat
}
console.log(cekTiket(2))


Project4
let nilai = 100
for(let i = 0; i <= nilai; i++){
  console.log(i)
}
