// Soal No. 1 (Range)
function range(startNum, finishNum) {
    var array = [];
    if (startNum == null || finishNum == null) {
        array = -1;
    } else if (startNum < finishNum) {
        for (var index = startNum; index <= finishNum; index++) {
            array.push(index);
        }
    } else if (startNum > finishNum) {
        for (var index = startNum; index >= finishNum; index--) {
            array.push(index);
        }
    }
    return array;
}

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 

// Soal No. 2 (Range with Step)
function rangeWithStep(startNum, finishNum, step) {
    var array = [];
    if (step == null) {
        step = 1;
    }
    if (startNum == null || finishNum == null) {
        array = -1;
    } else if (startNum < finishNum) {
        for (var index = startNum; index <= finishNum; index+=step) {
            array.push(index);
        }
    } else if (startNum > finishNum) {
        for (var index = startNum; index >= finishNum; index-=step) {
            array.push(index);
        }
    }
    return array;
}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 

// Soal No. 3 (Sum of Range)
function sum(startNum, finishNum, step) {
    if (startNum != null && finishNum == null && step == null) {
        count = startNum;
    } else {
        var jumlah = rangeWithStep(startNum, finishNum, step);
        var count = 0;
        for(var i = 0; i < jumlah.length; i++)
        {
            count = count + jumlah[i];
        }
    }
    return count;
}

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

// Soal No. 4 (Array Multidimensi)
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling() {
    for (var object = 0; object < input.length; object++) {
        var [no, nama, kota, tanggal, hobi] = input[object];
        console.log("\nNomor ID:  "+no);
        console.log("Nama Lengkap:  "+nama);
        console.log("TTL:  "+kota+" "+tanggal);
        console.log("Hobi:  "+hobi);
    }
}

dataHandling();

// Soal No. 5 (Balik Kata)
function balikKata(str) {
    var reversedString = '';
    for (var i = str.length - 1; i >= 0; i--){
       reversedString = reversedString + str[i];
    }
    return reversedString;
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 