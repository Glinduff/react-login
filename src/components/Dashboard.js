import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logout }  from '../helpers/auth'

import Resumen from './Resumen'

class Dashboard extends Component {

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
        <div>
            <Resumen />
        </div>
      </div>
    )
  }
};

export function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Dashboard)
