// No. 1 Looping While 
var i = 0;
console.log('LOOPING PERTAMA');
while( i += 2, i <= 20 ){
    console.log(i+' - I love coding');
}
var j = 22;
console.log('LOOPING KEDUA');
while( j -= 2 ){
    console.log(j+' - I will become a mobile developer');
}

// No. 2 Looping menggunakan for
for (var index = 1; index <= 20; index++) {
    if ( index % 2 == 1 ) {
        if ( index % 3 == 0 ) {
            console.log(index+' - I Love Coding');
        } else {
            console.log(index+' - Santai');
        }
    } else if ( index % 2 == 0 ) {
        console.log(index+' - Berkualitas');
    }
}

// No. 3 Membuat Persegi Panjang #
var pagar = 0;
while (pagar += 1, pagar <= 4) {
    var dalam = 0;
    while (dalam += 1, dalam <= 8) {
        process.stdout.write('#');
        if (dalam == 8) {
            process.stdout.write('\n');
        }
    }
}

// No. 4 Membuat Tangga
for (var a = '#'; a.length <= 7; a += '#') {
    console.log(a);
}

// No. 5 Membuat Papan Catur
var ukuran = 8;
var papan = "";
for (var y = 0; y < ukuran; y++) {
  for (var x = 0; x < ukuran; x++) {
    if ((x + y) % 2 == 0)
      papan += " ";
    else
      papan += "#";
  }
  papan += "\n";
}
console.log(papan);