import React, { Component } from 'react';
import 'react-widgets/dist/css/react-widgets.css'

import bookJson from '../../../constants/data.js'
import Navbar from '../../components/Navbar';

import Combobox from './components/Combobox/index.js'
import Book from './components/Book/index.js'
import SearchInput from './components/SearchInput/index.js'
import styles from './styles.scss';

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
      let filteredBooks;
      const filter = this.state.filter.toLowerCase();

      filteredBooks = bookJson.filter((book) => {
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
      this.setState({ books: filteredBooks });
  }

  render() {
    return (
      <div className={styles.homeContainer}>
        <Navbar/>
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
              { this.state.books.map(book => <Book key={book.id} book={book}/>) }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
