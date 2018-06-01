import React, { Component } from 'react';
import { 
  Route, 
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login';
import Register from './Register';
import ResetPassword from './ResetPassword';
import Dashboard from './Dashboard'
import { firebaseAuth } from '../config/constants';

import { handleGetUserData } from '../actions/user'
import { handleRevicePets } from '../actions/pets'


const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return(
    <Route {...rest} render={(props) => authed === true 
      ? <Component exact {...props} />
      : <Redirect to={{pathname: '/auth', state: {from: props.location}}} />}
    />
  )
}

const PublicRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/' />}
    />
  )
}

class App extends Component {

  state = {
    authed: false,
    loading: true
  }

  componentDidMount() {
    const { dispatch } = this.props
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      console.log(user)
      if (user === null) {
        console.log('not authed')
        this.setState({
          authed: false,
          loading: false
        })
      } else if(user && !user.emailVerified){
        console.log('not verify')
        this.setState({
          authed: false,
          loading: false
        })
      } else if(user.emailVerified) {
        console.log('verify')
        dispatch(handleGetUserData(user, () => this.setState(({authed: true, loading: false}))))
      }
    })
  }

  componentWillUnmount () {
    this.removeListener()
  }

  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <Router>
        <Switch>
          <PublicRoute authed={this.state.authed} path='/auth' component={Login} />
          <PublicRoute authed={this.state.authed} path='/register' component={Register} />
          <PublicRoute authed={this.state.authed} path='/reset' component={ResetPassword} />
          <PrivateRoute authed={this.state.authed} path="/" component={Dashboard} />
          <Route render={() => <h1>Oops! Esta ruta no existe</h1>} />
        </Switch>
      </Router>

    )
  }
};

export default connect()(App)


