import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Posts from './componets/Posts/Posts';
import NewPost from './componets/NewPost/NewPost';
import FullPost from './componets/FullPost/FullPost';

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Route path="/" component={ Home } exact/>
                <Route path="/about" component={ About } exact/>
                <Route path="/posts" component={ Posts } exact/>
                <Route path="/newpost" component={ NewPost } exact/>
                <Route path="/post/:postId" component={ FullPost } exact />
            </div>
        </Router>
    );
}

export default App;
