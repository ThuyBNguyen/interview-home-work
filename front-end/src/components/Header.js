import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class Header extends React.Component {
    state = {
        active: false,
    }
    componentDidMount() {
       window.addEventListener('scroll', this.changeBackground)
    }
    changeBackground = () => {
      if (window.scrollY >= 50) {
        this.setState({ active :true})
      } else {
        this.setState({ active : false})
      }
    }
    
  render() {
      return (
          <Navbar expand="lg" className={this.state.active ? 'header active' : 'header'}>
              <Navbar.Brand href="/">blogobal</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/post/create">Create Post</Nav.Link>
                  </Nav>

                  <Nav className="ml-auto">
                    <Nav.Link href="/signin">Sign In</Nav.Link>
                  </Nav>
                  
                </Navbar.Collapse>
          </Navbar>
      )
    }
}

// const mapStateToProps = (state) => {
//   return { isLoggedIn : state.auth.isLoggedIn , uid : state.auth.uid}
// }

// export default connect(mapStateToProps, { login, logout })(Header)

export default Header