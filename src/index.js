import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './components/App'
import { createStore, applyMiddleware } from 'redux'
import postReducer from './reducers/postsReducer'
import './index.css'
import { composeWithDevTools } from 'redux-devtools-extension';

//TODO: Fix combine reducer here
const store = createStore(
    postReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

window.React = React;
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('container')
)