import React from 'react';

import Loader from '../../components/Loader';

import Combobox from './components/Combobox/index.js'
import Book from './components/Book/index.js'
import SearchInput from './components/SearchInput/index.js'
import styles from './styles.scss';

const Home = (props) => (
  <div className={styles.homeContainer}>
    <div className={styles.dashboardContainer}>
      <div className={styles.filterContainer}>
        <div className={styles.filterItem}>
          <Combobox onSelection={props.handleFilterParam}/>
        </div>
        <div className={styles.filterItem}>
          <SearchInput onInputChange={props.handleFilter} filter={props.filter}/>
        </div>
      </div>
      <div className={styles.booksContainer}>
          { props.books.map(book => <Book key={book.id} book={book}/>) }
      </div>
    </div>
  </div>
);

export default Loader(Home);
