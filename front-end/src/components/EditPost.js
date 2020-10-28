import React, { Component } from 'react';
import { fetchPosts, fetchUsers, editPost, deletePost } from '../actions';
import PostForm from '../components/PostForm';
import { connect } from 'react-redux';
import {Container } from 'react-bootstrap'

class EditPost extends Component {
    componentDidMount() {
        this.props.fetchPosts()
        this.props.fetchUsers()
    }
    onDelete = () => {
        this.props.deletePost(parseInt(this.props.match.params.id))
    }
    onSubmit = (formValue) => {
        this.props.editPost(parseInt(this.props.match.params.id), formValue)
    }
    render() {
        return (
            <div  className="create-edit">
                <div className="photo"></div>
                <Container className="content">
                <h1>Edit Your Post</h1>
                 <PostForm id={parseInt(this.props.match.params.id)} onSubmit={this.onSubmit} onDelete={this.onDelete}/>
                </Container>
            </div>
        )
    }
}

export default connect(null, { editPost, deletePost, fetchPosts, fetchUsers})(EditPost)
