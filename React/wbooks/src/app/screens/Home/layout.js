import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../../components/Loader';
import { bookArrayPropType } from '../../../redux/books/proptypes';

import Combobox from './components/Combobox';
import Book from './components/Book';
import SearchInput from './components/SearchInput';
import styles from './styles.scss';

const Home = props => (
  <div className={styles.homeContainer}>
    <div className={styles.dashboardContainer}>
      <div className={styles.filterContainer}>
        <div className={styles.filterItem}>
          <Combobox onSelection={props.handleFilterParam} />
        </div>
        <div className={styles.filterItem}>
          <SearchInput onInputChange={props.handleFilter} filter={props.filter} />
        </div>
      </div>
      <div className={styles.booksContainer}>
        {props.books.map(book => <Book key={book.id} book={book} />)}
      </div>
    </div>
  </div>
);

Home.propTypes = {
  handleFilterParam: PropTypes.func,
  handleFilter: PropTypes.func,
  books: bookArrayPropType,
  filter: PropTypes.string
};

export default Loader(Home);
