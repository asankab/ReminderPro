import { ADD_REMINDER, REMOVE_REMINDER, FETCH_POSTS_PENDING } from '../actionTypes'

export const reminders = (state=[], action) => {
    //let reminders = null;

    switch (action.type){
        case ADD_REMINDER:
            console.log('IN REDUCER - ADD_REMINDER ACTION:', action)
            console.log([...state, reminder(action)])
            return [...state, reminder(action)]
        case REMOVE_REMINDER:
            console.log('IN REDUCER - REMOVE_REMINDER ACTION:', action)
            console.log('IN REDUCER - RAW STATE:', state);
            console.log('IN REDUCER - RESULT:', state.filter(reminder => reminder.id != action.payload))
            return state.filter(reminder => reminder.id != action.payload)
        default:
            return state;
    }
}

const reminder = action => {
    return {
        id: Math.random(),
        text: action.payload
    }
}

export const posts = (state=[], action) => {
    //let reminders = null;

    switch (action.type){
        case FETCH_POSTS_PENDING:
            console.log('IN REDUCER - FETCH_POSTS ACTION:', action)
            console.log([...state, action.payload])
            return [...state, action.payload]
        default:
            return state;
    }
}

//https://redux.js.org/basics/example-todo-list
//pagination: https://www.w3schools.com/bootstrap/bootstrap_pagination.asp