import {FETCH_POSTS_INPROGRESS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FALIUER} from '../actionTypes'

export const postsReducer = (state, action) => {
    switch (action.type){
        case FETCH_POSTS_INPROGRESS:
            console.log('FETCH_POSTS_IN PROGRESS REDUCER:', action)
            return [...state, action.state]
        case FETCH_POSTS_SUCCESS:
            console.log('FETCH_POSTS_SUCCESS REDUCER:', action)
        case FETCH_POSTS_FALIUER:
        default:
            return state;
    }
}

export default postsReducer

//https://redux.js.org/basics/example-todo-list
//pagination: https://www.w3schools.com/bootstrap/bootstrap_pagination.asp