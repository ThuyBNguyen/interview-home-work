import React from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import HomePage from '../components/HomePage.js';
import PostDetail from '../components/PostDetail';
import CreatePost from '../components/CreatePost';
import EditPost from '../components/EditPost';
import history from '../history'


const AppRouter = () => {
    return (
        <div>
            <Router history={history}>
                <Header/>
                <Switch>
                    <Route  path="/" exact component={HomePage} />
                    <Route path="/post/create" exact component={CreatePost} />
                    <Route path="/post/edit/:id" exact component={EditPost} />
                    <Route path="/post/:id" exact component={PostDetail} />
                    <Route path="/signin" exact component={SignIn} />
                    <Route path="/signup" exact component={SignUp} />
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter