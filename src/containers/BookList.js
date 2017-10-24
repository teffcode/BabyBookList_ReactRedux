import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

import './BookList.css';

class BookList extends Component {
    renderList(){
        return this.props.books.map(book => {
            return(
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                >
                    {book.title}
                </li>
            );
        })
    }

    render(){
        return (
            <div className="container__list">
                <h3>Choose one: </h3>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

// lo que sea devuelto, se mostrará como props dentro de BookList 
function mapStateToProps(state){
    return {
        books: state.books
    };
}

// lo que sea devuelto, se mostrará como props dentro de BookList 
function mapDispatchToProps(dispatch){
    // cada vez que selectBook es llamado, el resultado 
    // debe ser pasado a todos los reducers 
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);