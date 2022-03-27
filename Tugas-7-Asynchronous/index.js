// di index.js
const readBooks = require('./callback.js')
 
const books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

function iqro(time,books,i){
  if (i < books.length){
      readBooks(time,books[i],function (timeout){
          if (timeout>0){
              i += 1;
              iqro(timeout, books, i)
          }
      })
  }
}

iqro(10000,books,0)