// Soal No. 1 (Array to Object)
function arrayToObject(arr) {
    var now = new Date()
    var thisYear = now.getFullYear() // 2020 (tahun sekarang)
    for( i=1; i < arr.length; i++ ) {
        var tahun;
        var tahun1;
        if (arr[0][3] > thisYear || arr[0][3] == null) {
            tahun = "Invalid birth year";
        } else {
            tahun = thisYear - arr[0][3];
        }
        if (arr[1][3] > thisYear || arr[1][3] == null) {
            tahun1 = "Invalid birth year";
        } else {
            tahun1 = thisYear - arr[1][3];
        }
        var object = { firstName: arr[0][0], lastName: arr[0][1], gender: arr[0][2], age: tahun}
        var object1 = { firstName: arr[1][0], lastName: arr[1][1], gender: arr[1][2], age: tahun1}
        process.stdout.write(i+". "+object.firstName+" "+object.lastName+" : ");
        console.log(object);
        process.stdout.write((i+1)+". "+object1.firstName+" "+object1.lastName+" : ");
        console.log(object1);
    }
}

// Driver Code
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 
/*
    1. Bruce Banner: { 
        firstName: "Bruce",
        lastName: "Banner",
        gender: "male",
        age: 45
    }
    2. Natasha Romanoff: { 
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2) 
/*
    1. Tony Stark: { 
        firstName: "Tony",
        lastName: "Stark",
        gender: "male",
        age: 40
    }
    2. Pepper Pots: { 
        firstName: "Pepper",
        lastName: "Pots",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
// Error case 
arrayToObject([]) // ""

// Soal No. 2 (Shopping Time)
function shoppingTime(memberId, money) {
    var output;
    var list = [175000, 1500000, 500000, 250000, 50000]
    var item = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone']
    list.sort();
    if (memberId == null || memberId == 0) {
        output = "Mohon maaf, toko X hanya berlaku untuk member saja";
    } else if (money < 50000) {
        output =  "Mohon maaf, uang tidak cukup";
    } else if (memberId != null && money != null && memberId == '1820RzKrnWn08') {
        output = { memberId: memberId,
        money: money,
        listPurchased:
        [ item[0],
        item[1],
        item[2],
        item[3],
        item[4] ], 
        changeMoney: 0}
    } else if (memberId != null && money != null && memberId == '82Ku8Ma742') {
        output = { memberId: memberId,
        money: money,
        listPurchased:
        [ item[4] ], 
        changeMoney: 0}
        output.listPurchased.sort();
    }
    return output;
  }
   
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

// Soal No. 3 (Naik Angkot)
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    for (var object = 0; object < arrPenumpang.length; object++) {
        var [nama, mulai, selesai] = arrPenumpang[object];
        var start = mulai.charCodeAt(0) - 65;
        var finish = selesai.charCodeAt(0) - 65;
        var bayar = (finish - start) * 2000;
        var obj = {
            penumpang: nama,
            naikDari: mulai,
            tujuan: selesai,
            bayar: bayar
        }
        console.log(obj);
    }
}
   
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
 
console.log(naikAngkot([])); //[]