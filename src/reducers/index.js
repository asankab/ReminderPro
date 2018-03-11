import { combineReducers } from 'redux'
import { reminders } from './remindersReducer'
import { posts } from './postsReducer'

const rootReducer = combineReducers({
    reminders,
    posts
});

export default rootReducer;


//https://redux.js.org/basics/example-todo-list
//pagination: https://www.w3schools.com/bootstrap/bootstrap_pagination.asp