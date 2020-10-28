import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Container, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PostForm extends React.Component {
    state = {
        title: '',
        tags: '',
        content: '',
        error: '',
        id: null,
    }

    static getDerivedStateFromProps(props, state) {
        if (props.post && props.post.id !== state.id) {
            return {
                title: props.post.title || '',
                tags: props.post.tags || '',
                content: props.post.content || '',
                id: props.post.id,
            }
        }
    }

    handleEditorChange = (e, ) => {
        console.log('Content was updated:', e.target.getContent());
        this.setState({content: e.target.getContent()})
    }

    onChange = (field) => {
        return event => {
            console.log('onChange', field, event.target.value)
            this.setState({[field]: event.target.value})
        }
    }
    onSubmit = (e) => {
        console.log('onSubmit', this.state)
        e.preventDefault()
        if( !this.state.title || !this.state.content) {
            this.setState({error: 'Please enter title and content'})
        } else {
            this.setState({error: ''})
            // const payload = this.props.onSubmit({
            //     title: this.state.title,
            //     tags: this.state.tags,
            //     content: this.state.content
            // })
            // this.props.onSubmit({
            //     title: this.state.title,
            //     tags: this.state.tags,
            //     content: this.state.content
            // })

           const payload = {
                title: this.state.title,
                tags: this.state.tags,
                content: this.state.content
           }
           this.props.onSubmit(payload)
        }
    }

    render() {
        console.log('postForm', 'state', this.state)
        return (
            <Container>
                <Form onSubmit={this.onSubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Title"
                            autoFocus
                            value={this.state.title}
                            onChange={this.onChange('title')}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Tag"
                            autoFocus
                            value={this.state.tags}
                            onChange={this.onChange('tags')}
                        />
                    </Form.Group>
                    {/* <Form.Group>
                        <Editor
                            init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help'
                            }}
                            onEditorChange={this.handleEditorChange}
                        />
                    </Form.Group> */}

                    <Form.Group>
                        <Form.Control 
                            as="textarea"
                            placeholder="Content"
                            value={this.state.content}
                            onChange={this.onChange('content')}
                            rows={10}
                        />
                    </Form.Group>

                    <div className="buttons">
                        <Button className="create" type="submit">{this.state.id ? 'Edit Post' : 'Create Post'}</Button>
                        {this.props.onDelete ? <Button className="delete" onClick={this.props.onDelete}>Delete Post</Button> : []}
                        <Link className="btn btn-secondary cancel" to="/">Cancel</Link>
                    </div>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    if (!ownProps.id) return {}
    const id = parseInt(ownProps.id)
    return {
        post: state.posts.find(post => post.id === id) || {},
    }
}

export default connect(mapStateToProps)(PostForm)
