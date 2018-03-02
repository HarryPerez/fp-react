import React, { Component } from 'react';
import 'react-widgets/dist/css/react-widgets.css'

import Loader from '../../components/Loader';

import Combobox from './components/Combobox/index.js'
import Book from './components/Book/index.js'
import SearchInput from './components/SearchInput/index.js'
import styles from './styles.scss';

class Home extends Component {
  render() {
    return (
      <div className={styles.homeContainer}>
        <div className={styles.dashboardContainer}>
          <div className={styles.filterContainer}>
            <div className={styles.filterItem}>
              <Combobox onSelection={this.props.handleFilterParam}/>
            </div>
            <div className={styles.filterItem}>
              <SearchInput onInputChange={this.props.handleFilter} filter={this.props.filter}/>
            </div>
          </div>
          <div className={styles.booksContainer}>
              { this.props.books.map(book => <Book key={book.id} book={book}/>) }
          </div>
        </div>
      </div>
    );
  }
}

export default Loader(Home);
