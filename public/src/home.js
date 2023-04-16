function getTotalBooksCount(books) {
  let total = [];
 const filterBooks = books.reduce((result, book) => {
 result[book.title] = book.genre;
 return result;
 }, {});
 total = Object.keys(filterBooks);
 return total.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let total = 0;
  const filteredBooks = books.forEach(book => book.borrows.forEach(borrow => 
 !borrow.returned && total++))
  return total 
}
function helperFunction(books){
  let countObj = {};
  books.forEach((book) => {
  if(countObj[book.genre] != null){
    countObj[book.genre]++
  }else{
   countObj[book.genre] = 1;
  }
  })
  return countObj;
}
function getMostCommonGenres(books) {
  let countObj = helperFunction(books);
  let countArray = [];
  for(const[key,value] of Object.entries(countObj)){
    countArray.push({
      'name' : key,
      'count' : value
    });
  }
 countArray.sort((a,b) => b.count - a.count);
 return countArray.slice(0,5);
}

function popularBookHelper(books){
  let countObj = {};
  books.forEach((book) => {
  countObj[book.title] = book.borrows.length;
  })
 return countObj;               
}

function getMostPopularBooks(books) {
  let countObj = popularBookHelper(books);
  let countArray = [];
  for(const [key,value] of Object.entries(countObj)){
    countArray.push({
      'name' : key,
      'count' : value
    });
  }
  countArray.sort((a,b) => b.count - a.count);
  return countArray.slice(0,5); 
}

function getMostPopularAuthors(books, authors) {
  const result =[];
  authors.forEach(author => {
     const returnAuthor = { 
      name: `${author.name.first} ${author.name.last}`, 
      count: 0
    }
 
 books.forEach(book => {
   if(book.authorId=== author.id){
     returnAuthor.count += book.borrows.length;
   }
  })
  result.push(returnAuthor); 
 }) 
  
  return result.sort((a,b) => b.count - a.count).slice(0,5);      
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
