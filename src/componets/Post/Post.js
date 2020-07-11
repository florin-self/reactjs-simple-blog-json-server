import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Post = props => {
    //console.log(props);
    const { id, author, content, title, votes } = props;

    return (
        <div onClick={ () => props.goToPost(id) } className="Post">
            <h1>{ title }</h1>
            <p>{ content }</p>
            <small>{ author } - { votes } likes and counting ...</small>
        </div>
    );
};

Post.propTypes = {
    goToPost: PropTypes.func.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default Post;