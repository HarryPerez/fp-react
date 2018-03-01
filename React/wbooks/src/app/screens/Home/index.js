import React, { Component } from 'react';
import 'react-widgets/dist/css/react-widgets.css'

import * as bookService from '../../../services/bookService';

import Combobox from './components/Combobox/index.js'
import Book from './components/Book/index.js'
import SearchInput from './components/SearchInput/index.js'
import styles from './styles.scss';

class Home extends Component {
  state = { filter: '', filterParam: '', books: '', filteredBooks: '' };

  handleFilter = filter => {
    this.setState({ filter: filter });
    this.filterBooks();
  }

  handleFilterParam = filterParam => {
    this.setState({ filterParam: filterParam });
    this.filterBooks();
  }

  filterBooks = () => {
      let filteredBooks;
      const filter = this.state.filter.toLowerCase();

      filteredBooks = this.state.books.filter((book) => {
        const bookTitle = book.title.toLowerCase();
        const bookAuthor = book.author.toLowerCase();
        if(filter !== ''){
          if(this.state.filterParam === ''){
            return bookTitle.includes(filter) || bookAuthor.toLowerCase().includes(filter);
          }else if(this.state.filterParam === 'Nombre'){
            return bookTitle.toLowerCase().includes(filter);
          }else if(this.state.filterParam === 'Autor'){
            return bookAuthor.toLowerCase().includes(filter);
          }
        }else {
          return book;
        }
      });
      this.setState({ filteredBooks: filteredBooks });
  }

  componentWillMount = () => {
    bookService.getAllBooks().then((response) => {this.setState({ 'books':response.data, 'filteredBooks': response.data })});
  }

  render() {
    return (
      <div className={styles.homeContainer}>
        <div className={styles.dashboardContainer}>
          <div className={styles.filterContainer}>
            <div className={styles.filterItem}>
              <Combobox onSelection={this.handleFilterParam}/>
            </div>
            <div className={styles.filterItem}>
              <SearchInput onInputChange={this.handleFilter}/>
            </div>
          </div>
          <div className={styles.booksContainer}>
            { this.state.books && this.state.filteredBooks.map(book => <Book key={book.id} book={book}/>) }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
