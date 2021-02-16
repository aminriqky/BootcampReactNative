// if-else
var nama = "Amin";
var peran = "pEnYiHir";

peran = peran.toLowerCase();

if(nama.length == 0 && peran.length == 0){
    console.log("Nama harus diisi!");
} else if (nama.length != 0 && peran.length == 0) {
    console.log("Halo "+nama+", Pilih peranmu untuk memulai game!");
} else if (nama.length != 0 && peran.length != 0) {
    console.log("Selamat datang di Dunia Werewolf, "+nama);
}

if(nama.length != 0 && peran == "penyihir"){
    console.log("Halo Penyihir "+nama+", kamu dapat melihat siapa yang menjadi werewolf!");
} else if(nama.length != 0 && peran == "guard"){
    console.log("Halo Guard "+nama+", kamu akan membantu melindungi temanmu dari serangan werewolf.");
} else if (nama.length != 0 && peran == "werewolf") {
    console.log("Halo Werewolf "+nama+", Kamu akan memakan mangsa setiap malam!");
}

// Switch Case
var tanggal = 13; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 11; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2000; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch (true) {
    case tanggal >= 1 && tanggal <= 31 :
        tanggal = tanggal.toString();
        break;
    default:
        tanggal = "Nilai tidak valid";
        break;
}

switch (true) {
    case bulan >= 1 && bulan <= 12 :
        bulan = parseInt(bulan);
        break;
    default:
        bulan = "Nilai tidak valid";
        break;
}

switch (bulan) {
    case 1 :
        bulan = "Januari";
        break;
    case 2 :
        bulan = "Februari";
        break;
    case 3 :
        bulan = "Maret";
        break;
    case 4 :
        bulan = "April";
        break;
    case 5 :
        bulan = "Mei";
        break;
    case 6 :
        bulan = "Juni";
        break;
    case 7 :
        bulan = "Juli";
        break;
    case 8 :
        bulan = "Agustus";
        break;
    case 9 :
        bulan = "September";
        break;
    case 10 :
        bulan = "Oktober";
        break;
    case 11 :
        bulan = "November";
        break;
    case 12 :
        bulan = "Desember";
        break;
    default:
        break;
}

switch (true) {
    case tahun >= 1900 && tahun <= 2200 :
        tahun = tahun.toString();
        break;
    default:
        tahun = "Nilai tidak valid";
        break;
}

console.log(tanggal+" "+bulan+" "+tahun);