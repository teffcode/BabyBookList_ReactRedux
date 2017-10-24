import { combineReducers } from 'redux';

import ActiveBook from './reducer_active_books';
import BookReducer from './reducer_books';

const rootReducer = combineReducers({
    books: BookReducer,
    activeBook: ActiveBook
})

export default rootReducer;
