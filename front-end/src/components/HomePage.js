import React from 'react';
import PostList from './PostList'
import {Container} from 'react-bootstrap'

const App = () => {
    return (
        <div className="homepage">
            <div className="big_panel">
                <div className="sologan">
                    Blog whenever you are
                </div>
            </div>
           <Container>
                <PostList/>
           </Container>
        </div>
    )
}

export default App