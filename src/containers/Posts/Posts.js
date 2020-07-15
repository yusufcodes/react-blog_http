import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import { Route } from 'react-router-dom';
import './Posts.css'
import FullPost from '../Blog/FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props);
        // Getting our data from API
        let config = {
            headers: {
                'Access-Control-Allow-Origin': true
            }
        }

        axios.get('/posts', config)
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

    loadPostData = (id) => {
        this.props.history.push({pathname: '/posts/' + id});
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>

        if (!this.state.error)
        {
            // Going through each post and creating a Post component
            posts = this.state.posts.map(post => {
            return (
                <Post
                title={post.title}
                author={post.author}
                clicked={() => this.loadPostData(post.id)}/>
            )
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'}exact component={FullPost}/>
            </div>
        )
    }
    
}

export default Posts;