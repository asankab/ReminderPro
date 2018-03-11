import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PostList extends Component {
    render() {
        let { postList } = this.props;
        return (
            <div>
                { posts.map((post) => {
                    return <span key={post.id}>{post.name}</span>
                })}
            </div>
        )
    }
}

PostList.propTypes = {
    postList: PropTypes.array
}

export default PostList