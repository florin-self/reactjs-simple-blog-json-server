import React, { Component } from "react";
import axios from "axios";
import { DotLoader } from "react-spinners";
import Post from "../Post/Post";
import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
        loading: true
    };

    componentDidMount() {
        const posts = [];
        axios
            .get("http://localhost:8000/posts")
            .then(({ data }) => {
                //console.log('data from Posts');
                //console.log(data);
                Object.values(data).map(post => posts.push(post));
                this.setState({ posts, loading: false });
            })
            .catch(err => console.log(err));
    }

    goToPost = id => this.props.history.push(`/post/${id}`);

    render() {
        const posts = this.state.posts.map((post, i) => (
            <Post
                key={i}
                goToPost={this.goToPost}
                {...post}
            />
        ));
        if (this.state.posts.length === 0) {
            return (
                <div className="loader">
                    <DotLoader
                        size={60}
                        color={"grey"}
                        loading={this.state.loading}
                    />
                </div>
            );
        }
        return <div className="Posts">{posts}</div>;
    }
}

export default Posts;
