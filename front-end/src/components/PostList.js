import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHandPointDown, faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons';
import {  fetchPostsAndUsers} from '../actions';
import User from './User';
import { Link } from 'react-router-dom';

class PostList extends React.Component {
    state = {
        display: null
    }
    componentDidMount() {
        this.props.fetchPostsAndUsers()
    }

    toggleComment = (id) => {
        this.setState({display: this.state.display === id ? null : id})
    }

    renderList() {
        console.log('this.props', this.props)
        return this.props.posts.map(post => {
            return (
                <div className="post">
                    <h1>{post.title}</h1>
                    <div className="post-header">
                        <User owner={post.owner}/>
                        <p className="createdAt">Created at: {moment(post.created_at).format("MMM Do YY")}</p>
                    </div>
                    <div className="post-content">
                        {(post.content || '').split(" ").slice(0, 100).join(" ")}...
                        <Link to={`/post/${post.id}`}><span className="read">Read more<FontAwesomeIcon icon={faCoffee} className="coffee" ></FontAwesomeIcon></span></Link>
                    </div>
                    <div className="post-comments">
                        <h3>({(this.props.comments[post.id] || []).length})comments <FontAwesomeIcon icon={faAngleDoubleDown} className="showComment" onClick={() => this.toggleComment(post.id)}></FontAwesomeIcon></h3>
                        {(this.props.comments[post.id] || []).map(comment => {
                            let user = this.props.users.find(user => user.id === comment.owner) || {}
                            return (
                                <Container className={this.state.display === post.id ? 'comment' : 'comment display'}>
                                    <div>
                                        <div className="post-header">
                                            <div  className="author"> 
                                                <p>{user.username}</p>                                            
                                            </div>
                                            <div className="createdAt">
                                                <p >{moment(comment.created_at).format("MMM Do YY")}</p>
                                            </div>
                                        </div>
                                        <p>{comment.content}</p>
                                    </div>
                                </Container>
                            )
                        })}
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <Container  className="postList">
                {this.renderList()}
            </Container>
        )
    }
}

const mapStateToProps = (state) => {

    console.log('posts', state)
    return { 
        posts: state.posts || [],
        users: state.users.users || [],
        comments: state.comments.commentsByPost || {},
    }
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList)