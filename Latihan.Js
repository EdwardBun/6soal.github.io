//Nomor 1//
let angka1 = 10
let angka2 = 20
let angka3 = 40

if (angka1 >= angka2 && angka1 >= angka3) {
    Hasil = (`${angka1} yang paling besar`)
}else if ( angka2 > angka1 && angka2 >= angka3) {
    Hasil = (`${angka2} yang paling besar`)
}else {
    Hasil = (`${angka3} yang paling besar`)
}

console.log(Hasil)

//Nomor 2//
let bilangan = 5

if(bilangan > 0) {
    hsl = "Positif"
}else {
    hsl = "Negatif"
}

if(bilangan % 2 == 0) {
    hsl1 = "genap"
}else {
    hsl1 = "ganjil"
}

console.log(`jadi ${bilangan} adalah ` + hsl + " dan " + hsl1)

//Nomor 3//
let lampu = 1

if (lampu == 0) {
    Hasil1 = (`${lampu} adalah inputnya yang mengakitbakan lampu mati`)
} else {
    Hasil1 = (`${lampu} adalah inputnya yang mengakitbakan lampu nyala`)
}

console.log (Hasil1)

//Nomor 4//
let Barang1 = 100000
let Barang2 = 100000
let Barang3 = 100000
let JumlahBarang = Barang1 + Barang2 + Barang3
let Diskon = 10/100 * JumlahBarang

if(JumlahBarang > 100000) {
    Harga = (JumlahBarang-Diskon)
    console.log(Harga)
}else {
    console.log(JumlahBarang)
}

//Nomor 5//
let jamlembur = 2

if(jamlembur < 6) {
    Gaji = (`RP.100.000`)
}else if (jamlembur == 6) {
    Gaji = (`RP.200.000`)
}else if (jamlembur > 6) {
    Gaji = (`RP.300.000`)
}

console.log (Gaji)

//Nomor 6//
let tinggiAir = 650.1

if (tinggiAir <= 500.0) {
    Status = "Aman"
}else if (tinggiAir > 500.0 && tinggiAir <= 600.0) {
    Status = "Waspada"
}else if (tinggiAir >= 600.1 && tinggiAir <= 650.0){
    Status = "Siaga1"
}else {
    Status = "Siaga2"
}

console.log(`Status Air sekarang jika tinggi air ${tinggiAir}` + Status)
