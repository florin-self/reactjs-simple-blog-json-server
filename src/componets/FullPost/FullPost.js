import React, { Component } from "react";
import axios from "axios";
import './FullPost.css';
import Button from '@material-ui/core/Button';


class FullPost extends Component {
    state = {
        id:'',
        title: '',
        content: '',
        author: '',
        votes: ''
    };

    voteMe(){
        const numberOfVotes = this.state.votes + 1;
        const payload = {
            id:this.state.id,
            title: this.state.title,
            content: this.state.content,
            author: this.state.author,
            votes: this.state.votes + 1
        };
        axios.put("http://localhost:8000/posts/"+this.state.id, payload)
            .then(({ data }) =>{
                this.setState({
                    votes: numberOfVotes
                });
            })
            .catch(err => console.log(err));
    }

    deleteMe(){
        axios.delete("http://localhost:8000/posts/"+this.state.id)
            .then(({ data }) =>{
                //console.log(data);
                this.props.history.push(`/posts`);
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        let { postId } = this.props.match.params;
        axios.get("http://localhost:8000/posts/"+postId)
            .then(({ data }) =>{
                //console.log(data);
                //console.log(data.title);
                this.setState({
                    id: data.id,
                    title: data.title,
                    content: data.content,
                    author: data.author,
                    votes: data.votes
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        const { title, content, author, votes } = this.state;
        //console.log(this.state);
        return (
            <div className="FullPostWrapper">
                <h6 className="FullPostTitle">{title}</h6>
                <div className="FullPostAuthor">
                    <div>
                        {author} - {votes} likes
                    </div>
                    <div className="bntVote">
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => this.voteMe() }
                        >
                            Vote
                        </Button>

                    </div>
                </div>
                <div className="FullPostContentWrapper">
                    <p>
                        {content}
                    </p>
                </div>
                <div >

                        <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => this.deleteMe() }
                    >
                        DELETE
                    </Button>

                </div>
            </div>
        );
    }
}

export default FullPost;
