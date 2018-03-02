import * as types from './actionTypes';

import * as bookService from '../../services/bookService';

export const fetchBooks = () => (dispatch, getState) =>
bookService.getAllBooks().then((response) => {dispatch({ type: types.BOOKS_FETCHED, response })}).catch((error) => {throw error});

export const filter = (filter, filterParam, books) => (dispatch, getState) => {
  filter = filter.toLowerCase();
  let filteredBooks = books.filter((book) => {
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
  dispatch({ type: types.BOOKS_FILTERED, filter, filterParam, filteredBooks });
}
