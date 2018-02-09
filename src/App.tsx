import * as React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb: any) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: any) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

const PrivateRoute: React.SFC<any> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

class Login extends React.Component<any, {}> {
  state = {
    redirectToReferrer: false,
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

// const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;
const Protected2 = () => <h3>Protected2</h3>;

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{' '}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push('/'));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

const AuthExample = () => (
  <div>
    <AuthButton />
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
      <PrivateRoute exact={true} path="/" component={Protected2} />
      <Redirect to="/login" />
    </Switch>
  </div>
);

export default AuthExample;
