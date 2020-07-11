import React, { useRef } from "react";
import axios from "axios";
import "./NewPost.css";
import { useHistory } from 'react-router-dom'

const NewPost = () => {
    const history = useHistory();

    const refTitle = useRef();
    const refAuthor = useRef();
    const refSubject = useRef();
    const refContent = useRef();

    const createPost = e => {
        e.preventDefault();
        const payload = {
            title: refTitle.current.value,
            author: refAuthor.current.value,
            subject: refSubject.current.value,
            content: refContent.current.value,
            votes: 0
        };
        //console.log(payload);

        axios.post("http://localhost:8000/posts", payload )
            .then(({ data }) => {
                //console.log(data);
                history.push(`/posts`);
            })
            .catch(err => console.log(err));

    };

    return (
        <div className="NewPostWrapper">
            <h1 className="NewPostTitle">New Post</h1>
            <form onSubmit={createPost} className="NewPostForm">
                <input type="text" placeholder="Title" ref={refTitle} required minLength="3"/>
                <input type="text" placeholder="Author" ref={refAuthor} required minLength="3"/>
                <input type="text" placeholder="Subject" ref={refSubject} required minLength="3"/>
                <textarea placeholder="Content..." ref={refContent} required minLength="20"/>
                <input type="submit" value="Publish" />
            </form>
        </div>
    );
}

export default NewPost;
