import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import './Posts.css'

class Posts extends Component {
    state = {
        posts: [],
        selectedPostID: null,
        error: false
    }

    componentDidMount() {
        // Getting our data from API
        // Sidenote: Can I jusrt use Fetch API here?
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            // Transforming data: only keeping the first 4 posts and then adding another property to the object
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Yusuf'
                }
            })

            // Updating the state once we receive the data
            this.setState({posts: updatedPosts})
        })
        .catch(error => {
            console.log(error);
        });
    }

    loadPostData = (id) => this.setState({selectedPostID: id});

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>

        if (!this.state.error)
        {
            // Going through each post and creating a Post component
            posts = this.state.posts.map(post => {
            return <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.loadPostData(post.id)}/>
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
    
}

export default Posts;