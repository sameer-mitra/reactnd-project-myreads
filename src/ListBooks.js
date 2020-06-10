import React from 'react'
import './App.css'
import {Link} from 'react-router-dom';
import BookCase from './components/BookCase.js'
import OpenSearchButton from './components/OpenSearchButton.js'

class ListBooks extends React.Component {
  render() {
    const { bookshelves, books, onMove } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookCase bookshelves={bookshelves} books={books} onMove={onMove} />
        <OpenSearchButton />
      </div>
    );
  }
}
export default ListBooks