import React, { Component } from 'react';

import BookDetail from '../containers/BookDetail';
import BookList from '../containers/BookList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>BOOK LIST !</h1>
        <BookList/>
        <BookDetail/>
      </div>
    );
  }
}

export default App;
