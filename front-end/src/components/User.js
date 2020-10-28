import React from 'react';
import { connect } from 'react-redux'

class User extends React.Component {
    render() {
        const { user } = this.props
        if(!user) {
            return null
        }

        return(
            <div className="author">
                Author: {user && user.name}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({user: (state.users.users || []).find(user => user.id === ownProps.owner)})
}

export default connect(mapStateToProps)(User)