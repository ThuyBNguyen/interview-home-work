import React, { Component } from 'react';
import moment from 'moment'
import {connect } from 'react-redux';
import {  fetchPosts, fetchUsers} from '../actions';
import { Container, Button} from 'react-bootstrap';
import User from '../components/User'

class PostDetail extends Component {
    componentDidMount() {
        this.props.fetchPosts()
        this.props.fetchUsers()
    }

    renderPost() {
        const post = this.props.post
        return (
            <div>
                <h1>{post.title}</h1>
                    <div className="post-header">
                        <User owner={post.owner}/>
                        <p className="createdAt">Created at: {moment(post.created_at).format("MMM Do YY")}</p>
                    </div>
                    <div className="post-content">
                        {post.content || ''}
                    </div>
                    <Button href={`/post/edit/${post.id}`} className="edit">Edit Post</Button>
            </div>
        )
    }
    render() {
        return (
            <div className="postDetail">
                <div className="photo"></div>
                <Container className="post">
                    {this.renderPost()}
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = parseInt(ownProps.match.params.id)
    return {
        post: state.posts.find(post => post.id === id) || {},
    }
}

export default connect(mapStateToProps, {fetchPosts, fetchUsers})(PostDetail)