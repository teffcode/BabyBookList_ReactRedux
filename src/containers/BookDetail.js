import React, { Component } from 'react';
import { connect } from 'react-redux';

import './BookDetail.css';

class BookDetail extends Component {
    render(){
        if (!this.props.book) {
            return <div className="container__">Select a book to get started.</div>;
        }
        
        return (
            <div className="container_detail">
                <h3>Details for:</h3>
                <div className="container__detail_e">
                    <p>Title: {this.props.book.title}</p>
                    <p>Pages: {this.props.book.pages}</p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);