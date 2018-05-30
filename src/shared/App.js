import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import NavBar from './NavBar';
import Whoops from './Whoops';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          {routes.map(({ path, exact, component: C, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => (
                <C {...props} {...rest} />
              )}
            />
          ))}
          <Route render={(props) => <Whoops {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
