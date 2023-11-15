import './App.css';
import React, {useState} from 'react';
import SearchBar from './SearchBar';

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async (searchQuery, page) => {
    try{
      //Construct the query params
      const queryParams = new URLSearchParams({
        search: searchQuery,
        page: page
      });
      //Make request using fetch
      const response = await fetch(`http://localhost:3500/search?${queryParams.toString()}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const bookResultsArray = data["data"];
      console.log(bookResultsArray);
      setBooks(bookResultsArray);
      console.log(books)
    } catch (error) {
      console.error("Fetch error:", error)
    }
  };
  return(
    <div className="app">
      <h1>Book Listing App</h1>
      <h3>Powered by <a href="https://www.goodreads.com">Goodreads.com</a></h3>
      <SearchBar onSearch={fetchBooks}/>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <img src={book.imageUrl} alt={book.title}/>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default App;
