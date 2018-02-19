import React, { Component } from 'react';
import 'react-widgets/dist/css/react-widgets.css'

import bookJson from '../../../constants/data.js'

import Combobox from './components/Combobox/index.js'
import Book from './components/Book/index.js'
import SearchInput from './components/SearchInput/index.js'
import './styles.css';

class Home extends Component {
  state = { filter: '', filterParam: '', books: bookJson  };

  handleFilter = filter => {
    this.setState({ filter: filter });
    this.filterBooks();
  }

  handleFilterParam = filterParam => {
    this.setState({ filterParam: filterParam });
    this.filterBooks();
  }

  filterBooks = () => {
      var filteredBooks;
      var filter = this.state.filter.toLowerCase();
      var filterParam = this.state.filterParam;

      filteredBooks = bookJson.filter(function(book) {
        const bookTitle = book.title.toLowerCase();
        const bookAuthor = book.author.toLowerCase();
        if(filter !== ''){
          if(filterParam === ''){
            return bookTitle.includes(filter) || bookAuthor.toLowerCase().includes(filter);
          }else if(filterParam === 'Nombre'){
            return bookTitle.toLowerCase().includes(filter);
          }else if(filterParam === 'Autor'){
            return bookAuthor.toLowerCase().includes(filter);
          }
        }else {
          return book;
        }
      });
      this.setState({ books: filteredBooks });
  }

  render() {
    return (
      <div className='home-container'>
        <div className='dashboard-container'>
          <div className='filter-container'>
            <div className='filter-item'>
              <Combobox onSelection={this.handleFilterParam}/>
            </div>
            <div className='filter-item'>
              <SearchInput onInputChange={this.handleFilter}/>
            </div>
          </div>
          <div className='books-container'>
              { this.state.books.map(book => <Book key={book.id} title={book.title} author={book.author} imageUrl={book.image_url}/>) }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
