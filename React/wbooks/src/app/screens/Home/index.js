import React, { Component } from 'react';
import Combobox from './components/Combobox/index.js'
import Book from './components/Book/index.js'
import SearchInput from './components/SearchInput/index.js'
import bookJson from '../../../constants/data.js'
import 'react-widgets/dist/css/react-widgets.css'
import './styles.css';

class Home extends Component {
  state = {filter: '', filterParam: '', books: bookJson};

  handleFilter = filter => {
    this.setState({filter: filter});
    this.handleFilterBooks();
  }

  handleFilterParam = filterParam => {
    this.setState({filterParam: filterParam});
    this.handleFilterBooks();
  }

  filterBooks = books => {
    var filteredBooks;
    var filter = this.state.filter.toLowerCase();
    var filterParam = this.state.filterParam;

    const bookTitle = books.title.toLowerCase();
    const bookAuthor = books.author.toLowerCase();
    if(filter !== ''){
      if(filterParam === ''){
        return bookTitle.includes(filter) || bookAuthor.toLowerCase().includes(filter);
      }else if(filterParam === 'Nombre'){
        return bookTitle.toLowerCase().includes(filter);
      }else if(filterParam === 'Autor'){
        return bookAuthor.toLowerCase().includes(filter);
      }
    }else {
      return bookJson;
    }
    return filteredBooks;
  }

  handleFilterBooks = () => {
    this.setState({books: bookJson.filter(this.filterBooks)});
  }

  render() {
    return (
      <div className='home-container'>
        <div className='filter-container'>
          <div className='filter-item'>
            <Combobox callback={this.handleFilterParam}/>
          </div>
          <div className='filter-item'>
            <SearchInput callback={this.handleFilter}/>
          </div>
        </div>
        <div className='books-container'>
            {this.state.books.map(function(book) { return <Book key={book.id} title={book.title} author={book.author} imageUrl={book.image_url}/>})}
        </div>
      </div>
    );
  }
}

export default Home;
