import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Blog.css';
import Posts from '../Posts/Posts';

class Blog extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='Blog'>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                { /* Setting up routes - exact means only / renders Home, not just as a prefix */}
                <Route path="/" exact render={() => <h1>Home</h1>} />
            </div>
        );
    }
}

export default Blog;