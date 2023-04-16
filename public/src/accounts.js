function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);

}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA,accountB) =>
   accountA.name.last < accountB.name.last ? -1 : 1)
 
}

function getTotalNumberOfBorrows(account, books) {
  const accID = account.id;
  let total = 0;
 const filteredBooks = books.forEach(book => book.borrows.forEach(borrow => 
 accID === borrow.id && total++))
 return total;
 } 

function getBooksPossessedByAccount(account, books, authors) {
  const accID = account.id

  return books.filter((book) => book.borrows.some((borrow) =>
   borrow.id === account.id && !borrow.returned)).map((book) => {const author = authors.find((author) =>
  author.id === book.authorId)
  book.author = author
  return book}) 
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
