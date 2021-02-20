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
    if (startNum == null || finishNum == null || step == null) {
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

