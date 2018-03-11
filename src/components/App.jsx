import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadPosts } from '../actions/'
import { bindActionCreators } from 'redux'
import Locale from '../locales/Locale'
import PostsList from './PostList'

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.locale = new Locale('en');// uses only one instance

        this.state = {
            currentLocale: 'en'
        }

        this.loadPosts = this.loadPosts.bind(this);
    }

    static childContextTypes = { // which properties are accessible by children
        locale: PropTypes.object
    }

    getChildContext(){ // which actually sets values for this properties
        //return { locale: locales[this.state.currentLocale] };
        return { locale: this.locale };
    }

    handleLocaleChange(locale){
        //console.log(locale);
        this.setState({currentLocale: locale})
    }

    componentWillUpdate(nextProps, nextState){
        this.locale.setLanguage(nextState.currentLocale);
    }

    render(){

        let data = [
            {id:1, name: "Pete Hunt", country: "USA"},
            {id: 2, name: "Jordan Walke", country: "Australia"}];

           return (
            <div className="App">
                <div>
                    <button onClick={() => this.handleLocaleChange('en')}>US</button>
                    <button onClick={() => this.handleLocaleChange('pt')}>PT</button>
                </div>
                <div>
                    <button onClick={() => {this.loadPosts()}}>Load Posts</button>
                </div>
                <div className="postsContainer">
                    <PostList data={postList}/>
                </div>
            </div>
        )
    }
}

function mapDispatchToPros(dispatch){
    return bindActionCreators({loadPosts}, dispatch);
}

function mapStateToPros(state){
    return {
        posts: state
    }
}

export default connect(mapStateToPros, mapDispatchToPros) (App);

//https://reactcheatsheet.com/
//https://babeljs.io/docs/plugins/transform-object-rest-spread/