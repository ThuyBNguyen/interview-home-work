import React from 'react'
import { connect } from 'react-redux';
import { createPost } from '../actions'
import PostForm from './PostForm';
import { Container} from 'react-bootstrap'

class CreatePost extends React.Component {
    onSubmit = (formValue) => {
        this.props.createPost(formValue)
    }
    render() {
        return (
            <div class="create-edit">
                <div className="photo"></div>
                <Container className="content">
                    <h1>Create a new Post</h1>
                    <PostForm onSubmit={this.onSubmit} />
                </Container>
            </div>
            
        )
    }
}

export default connect(null, {createPost})(CreatePost)