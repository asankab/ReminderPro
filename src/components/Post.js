import React, { Component } from 'react'

class Post extends Component {
    render() {
        let { post } = this.props;
        return (<div key={post.id}>{post.message}</div>)
    }
}

export default Post;