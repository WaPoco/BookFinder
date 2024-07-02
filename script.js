// Click handler for search button
const captureSearchValue = () => {
  const searchBar = document.getElementById("search-bar");
  console.log(searchBar.value);
  return searchBar.value;
};

// Filter books based on search input
const filterBooks = (search,books) => {
  const arrayBooks = flattenObjectValuesIntoArray(books);
  console.log(arrayBooks);
  const filteredBooks = arrayBooks.filter((book)=>{
    if(book.some(tag=>tag==search)==true) {
        return book;
    }  
  });
  const objectFilteredBooks = filteredBooks.map((book)=>{
    return {title: book[0], author: book[1], tags: book.slice(2,book.length)};
  });
  console.log(objectFilteredBooks);
  return objectFilteredBooks;
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = (books) => {
  const divBooks = books.map(structureBookAsHtml);
  return divBooks;
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (books) => {
  const filterBooksArray = filterBooks(captureSearchValue(), books);
  const struturedBooks = structureBooksAsHtml(filterBooksArray);
  renderBooksToDom(struturedBooks);
}

// Grab search button from the DOM
const searchBtn = document.getElementById('search-btn');

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => {
   searchBtnClickHandler(books) });