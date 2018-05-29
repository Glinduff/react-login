import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logout }  from '../helpers/auth' 

class Dashboard extends Component {


  componentDidMount(){
    console.log(this.props)
  }
  handleLogout = () => {
    logout()
  }

  render() {
    const { user } = this.props
    return (
      <div>
        { user 
          ? <div>{user.name}</div> 
          : null }
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
};

export default connect((state) => ({
  user: state.user
}))(Dashboard)
