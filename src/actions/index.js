import { FETCH_POSTS_SUCCESS } from '../actionTypes'
import PostsData from '../api/fakeResponses/fakePosts.json'

export const loadPosts = () => {
    console.log('ACTION CALLED')
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: PostsData.posts
    }
}

