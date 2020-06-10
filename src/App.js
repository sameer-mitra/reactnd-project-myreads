import React from 'react'
import './App.css'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks.js'
import SearchBooks from './SearchBooks.js'

class BooksApp extends React.Component {
   bookshelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Read' }
  ];
  state = {
    books: [],
    searchBooks: []
  };
  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  };
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);

    let updatedBooks = [];
    updatedBooks = this.state.books.filter(b => b.id !== book.id);

    if (shelf !== 'none') {
      book.shelf = shelf;
      updatedBooks = updatedBooks.concat(book);
    }

    this.setState({
      books: updatedBooks,
    });
  };
  searchForBooks = query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  };
  resetSearch = () => {
    this.setState({ searchBooks: [] });
  };
  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route exact path="/"
          render={() => (
            <ListBooks
              bookshelves={this.bookshelves}
              books={books}
              onMove={this.moveBook}
            />
          )}
        />
        <Route path="/search"
          render={() => (
            <SearchBooks
              books={this.searchForBooks}
              onMove={this.moveBook}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp
