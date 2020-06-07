import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        // Getting our data from API
        // Sidenote: Can I jusrt use Fetch API here?
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            // Updating the state once we receive the data
            const posts = response.data.slice(0, 4);
            this.setState({posts: response.data})
        });
    }

    render() {
        // Going through each post and creating a Post component
        const posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title}/>
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;