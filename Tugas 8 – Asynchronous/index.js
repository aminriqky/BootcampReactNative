let readBooks = require('./callback.js')
 
let books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

readBooks(10000, books[0], function(sisaWaktu) {
    if (sisaWaktu >= 2000) {
        readBooks(sisaWaktu, books[1], function (sisaWaktu) {
            if (sisaWaktu >= 4000) {
                readBooks(sisaWaktu,books[2], function (sisaWaktu) {
                    
                })
            }
        })
    }
})